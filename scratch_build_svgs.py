import xml.etree.ElementTree as ET
import re
import os

tree = ET.parse('logo_traced.svg')
root = tree.getroot()

all_paths = []
for el in root.iter():
    if el.tag.endswith('path'):
        fill = el.attrib.get('fill', '').upper()
        transform = el.attrib.get('transform', '')
        t_match = re.search(r'translate\(([^,]+),\s*([^)]+)\)', transform)
        tx = float(t_match.group(1)) if t_match else 0.0
        ty = float(t_match.group(2)) if t_match else 0.0

        if fill in ['#000000', '#000', 'BLACK']:
            d = el.attrib.get('d', '')
            nums = [float(x) for x in re.findall(r'[-+]?(?:\d*\.\d+|\d+)', d)]
            if nums:
                xs = [x + tx for x in nums[0::2]]
                ys = [y + ty for y in nums[1::2]]
                all_paths.append({
                    'd': d,
                    'tx': tx,
                    'ty': ty,
                    'min_x': min(xs),
                    'max_x': max(xs),
                    'min_y': min(ys),
                    'max_y': max(ys),
                    'w': max(xs) - min(xs),
                    'h': max(ys) - min(ys)
                })

monogram_paths = [p for p in all_paths if p['min_y'] < 720]
name_paths = [p for p in all_paths if 720 <= p['min_y'] < 925]
tagline_paths = [p for p in all_paths if p['min_y'] >= 925]

def get_bounds(plist):
    min_x = min(p['min_x'] for p in plist)
    max_x = max(p['max_x'] for p in plist)
    min_y = min(p['min_y'] for p in plist)
    max_y = max(p['max_y'] for p in plist)
    return min_x, min_y, max_x, max_y

m_x1, m_y1, m_x2, m_y2 = get_bounds(monogram_paths)
n_x1, n_y1, n_x2, n_y2 = get_bounds(name_paths)
t_x1, t_y1, t_x2, t_y2 = get_bounds(tagline_paths)

# 1. GENERATE logo-icon.svg (KA Monogram Only)
# Normalize coordinates so (m_x1, m_y1) becomes (20, 20) with a viewBox
pad = 25
mw = m_x2 - m_x1
mh = m_y2 - m_y1
vb_w = mw + 2 * pad
vb_h = mh + 2 * pad

icon_svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {vb_w:.1f} {vb_h:.1f}" fill="none">
  <g fill="currentColor" transform="translate({pad - m_x1:.2f}, {pad - m_y1:.2f})">
'''
for p in monogram_paths:
    icon_svg_content += f'    <path d="{p["d"]}" transform="translate({p["tx"]}, {p["ty"]})" />\n'
icon_svg_content += '  </g>\n</svg>\n'

with open('public/assets/logo-icon.svg', 'w', encoding='utf-8') as f:
    f.write(icon_svg_content)
print("Wrote public/assets/logo-icon.svg")


# 2. GENERATE logo-horizontal.svg & logo.svg (Monogram on Left, "Kashish Ad" & tagline on Right)
# Monogram is height mh ~ 475. Let's scale text so that "Kashish Ad" + tagline fits nicely next to monogram!
# Right side:
# Name is width ~ 828, height ~ 186.
# Tagline is width ~ 451, height ~ 58.
# Let's align them in a horizontal canvas:
# Monogram at x=0, y=0, width=mw (~520), height=mh (~475)
# Spacing = 60
# Right text:
# Name positioned at x = mw + 60, y = 80, width = 828, height = 186
# Tagline positioned at x = mw + 60 + 200, y = 300, width = 451, height = 58
# Total height = 475 + 40 = 515, Total width = mw + 60 + 828 + 40 = 1448

h_pad = 20
h_spacing = 70
right_x = mw + h_spacing
tot_w = right_x + (n_x2 - n_x1) + 2 * h_pad
tot_h = mh + 2 * h_pad

def make_horizontal_svg(color_icon, color_name, color_tag):
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {tot_w:.1f} {tot_h:.1f}" fill="none">
  <!-- Kashish Ad KA Monogram Icon -->
  <g fill="{color_icon}" transform="translate({h_pad - m_x1:.2f}, {h_pad - m_y1:.2f})">
'''
    for p in monogram_paths:
        svg += f'    <path d="{p["d"]}" transform="translate({p["tx"]}, {p["ty"]})" />\n'
    svg += '  </g>\n'

    # Name: align vertically nicely
    name_offset_y = (mh - (n_y2 - n_y1) - (t_y2 - t_y1) - 20) / 2 + 10
    svg += f'''  <!-- Brand Name: Kashish Ad (Brush Script) -->
  <g fill="{color_name}" transform="translate({h_pad + right_x - n_x1:.2f}, {h_pad + name_offset_y - n_y1:.2f})">
'''
    for p in name_paths:
        svg += f'    <path d="{p["d"]}" transform="translate({p["tx"]}, {p["ty"]})" />\n'
    svg += '  </g>\n'

    # Tagline: positioned below "Kashish Ad", indented to the right matching the design
    tag_offset_y = name_offset_y + (n_y2 - n_y1) + 18
    tag_offset_x = right_x + 220
    svg += f'''  <!-- Tagline: let's print branding... -->
  <g fill="{color_tag}" transform="translate({h_pad + tag_offset_x - t_x1:.2f}, {h_pad + tag_offset_y - t_y1:.2f})">
'''
    for p in tagline_paths:
        svg += f'    <path d="{p["d"]}" transform="translate({p["tx"]}, {p["ty"]})" />\n'
    svg += '  </g>\n</svg>\n'
    return svg

# Primary Logo (Navy brand color #1a3a6b)
with open('public/assets/logo.svg', 'w', encoding='utf-8') as f:
    f.write(make_horizontal_svg('#1a3a6b', '#1a3a6b', '#475569'))
print("Wrote public/assets/logo.svg")

# Horizontal Logo with currentColor / Navy
with open('public/assets/logo-horizontal.svg', 'w', encoding='utf-8') as f:
    f.write(make_horizontal_svg('#1a3a6b', '#1a3a6b', '#475569'))
print("Wrote public/assets/logo-horizontal.svg")

# Light Logo for dark navy backgrounds (White icon + White text + Light grey tagline)
with open('public/assets/logo-light.svg', 'w', encoding='utf-8') as f:
    f.write(make_horizontal_svg('#ffffff', '#ffffff', '#cbd5e1'))
print("Wrote public/assets/logo-light.svg")


# 3. GENERATE logo-square.svg / logo-vertical.svg (Stacked Monogram on Top, Kashish Ad in middle, Tagline below)
sq_pad = 30
sq_w = max(mw, n_x2 - n_x1) + 2 * sq_pad
sq_h = (mh) + (n_y2 - n_y1) + (t_y2 - t_y1) + 80 + 2 * sq_pad

def make_stacked_svg(color_icon, color_name, color_tag):
    # center each element horizontally
    m_cx = sq_pad + (sq_w - 2*sq_pad - mw) / 2
    n_cx = sq_pad + (sq_w - 2*sq_pad - (n_x2 - n_x1)) / 2
    t_cx = sq_pad + (sq_w - 2*sq_pad - (t_x2 - t_x1)) / 2

    y_cur = sq_pad
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {sq_w:.1f} {sq_h:.1f}" fill="none">
  <g fill="{color_icon}" transform="translate({m_cx - m_x1:.2f}, {y_cur - m_y1:.2f})">
'''
    for p in monogram_paths:
        svg += f'    <path d="{p["d"]}" transform="translate({p["tx"]}, {p["ty"]})" />\n'
    svg += '  </g>\n'

    y_cur += mh + 35
    svg += f'''  <g fill="{color_name}" transform="translate({n_cx - n_x1:.2f}, {y_cur - n_y1:.2f})">
'''
    for p in name_paths:
        svg += f'    <path d="{p["d"]}" transform="translate({p["tx"]}, {p["ty"]})" />\n'
    svg += '  </g>\n'

    y_cur += (n_y2 - n_y1) + 20
    svg += f'''  <g fill="{color_tag}" transform="translate({t_cx - t_x1:.2f}, {y_cur - t_y1:.2f})">
'''
    for p in tagline_paths:
        svg += f'    <path d="{p["d"]}" transform="translate({p["tx"]}, {p["ty"]})" />\n'
    svg += '  </g>\n</svg>\n'
    return svg

with open('public/assets/logo-square.svg', 'w', encoding='utf-8') as f:
    f.write(make_stacked_svg('#1a3a6b', '#1a3a6b', '#475569'))
print("Wrote public/assets/logo-square.svg")

with open('public/assets/logo-square-light.svg', 'w', encoding='utf-8') as f:
    f.write(make_stacked_svg('#ffffff', '#ffffff', '#cbd5e1'))
print("Wrote public/assets/logo-square-light.svg")

# 4. GENERATE favicon.svg (Navy rounded background with white KA monogram)
fav_size = 192
fav_pad = 36
fav_scale = (fav_size - 2 * fav_pad) / max(mw, mh)

fav_svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {fav_size} {fav_size}">
  <rect width="{fav_size}" height="{fav_size}" rx="42" fill="#1a3a6b" />
  <g fill="#ffffff" transform="translate({fav_pad}, {fav_pad + (fav_size - 2*fav_pad - mh*fav_scale)/2}) scale({fav_scale:.4f}) translate({-m_x1:.2f}, {-m_y1:.2f})">
'''
for p in monogram_paths:
    fav_svg += f'    <path d="{p["d"]}" transform="translate({p["tx"]}, {p["ty"]})" />\n'
fav_svg += '  </g>\n</svg>\n'

with open('public/assets/favicon.svg', 'w', encoding='utf-8') as f:
    f.write(fav_svg)
print("Wrote public/assets/favicon.svg")

