import xml.etree.ElementTree as ET
import re

tree = ET.parse('logo_traced.svg')
root = tree.getroot()

paths = []
for el in root.iter():
    if el.tag.endswith('path'):
        fill = el.attrib.get('fill', '').upper()
        transform = el.attrib.get('transform', '')
        # parse translate(tx, ty)
        t_match = re.search(r'translate\(([^,]+),\s*([^)]+)\)', transform)
        tx = float(t_match.group(1)) if t_match else 0.0
        ty = float(t_match.group(2)) if t_match else 0.0

        if fill in ['#000000', '#000', 'BLACK']:
            d = el.attrib.get('d', '')
            nums = [float(x) for x in re.findall(r'[-+]?(?:\d*\.\d+|\d+)', d)]
            if nums:
                xs = [x + tx for x in nums[0::2]]
                ys = [y + ty for y in nums[1::2]]
                if xs and ys:
                    min_x, max_x = min(xs), max(xs)
                    min_y, max_y = min(ys), max(ys)
                    paths.append({
                        'tx': tx,
                        'ty': ty,
                        'd': d,
                        'bbox': (min_x, min_y, max_x, max_y),
                        'w': max_x - min_x,
                        'h': max_y - min_y
                    })

print(f'Parsed {len(paths)} paths with transforms')
for i, p in enumerate(sorted(paths, key=lambda x: (x['bbox'][1], x['bbox'][0]))):
    bbox = p['bbox']
    print(f'Path {i}: Y=[{bbox[1]:.0f}, {bbox[3]:.0f}], X=[{bbox[0]:.0f}, {bbox[2]:.0f}], W={p["w"]:.0f}, H={p["h"]:.0f}')
