/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#1a3a6b',
          'navy-dark': '#102447',
          'navy-light': '#eff4fb',
          orange: '#e85c1a',
          'orange-hover': '#cf4e12',
          'orange-light': '#fff3ec',
          red: '#e85c1a', // map red references smoothly to brand orange
          'red-hover': '#cf4e12',
          'red-light': '#fff3ec',
          whatsapp: '#25d366',
          'whatsapp-hover': '#128c7e',
          dark: '#0f172a',
          slate: '#334155',
          muted: '#64748b',
          light: '#f8fafc',
          border: '#e2e8f0'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
        raphtalia: ['Raphtalia', 'Outfit', 'sans-serif']
      },
      boxShadow: {
        'card': '0 2px 8px -2px rgba(15, 23, 42, 0.05), 0 4px 16px -4px rgba(15, 23, 42, 0.05)',
        'card-hover': '0 12px 24px -4px rgba(15, 23, 42, 0.08), 0 8px 16px -6px rgba(15, 23, 42, 0.04)',
        'orange': '0 10px 25px -5px rgba(232, 92, 26, 0.35), 0 8px 10px -6px rgba(232, 92, 26, 0.2)',
        'navy': '0 10px 25px -5px rgba(26, 58, 107, 0.35), 0 8px 10px -6px rgba(26, 58, 107, 0.2)'
      }
    },
  },
  plugins: [],
}
