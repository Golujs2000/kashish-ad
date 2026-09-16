/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '420px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        brand: {
          blue: '#1346a8',
          'blue-hover': '#0f3a8e',
          'blue-light': '#f0f7ff',
          navy: '#0f2d6b',
          'navy-dark': '#0b1c36',
          whatsapp: '#25d366',
          'whatsapp-hover': '#1da851',
          slate: '#0f172a',
          muted: '#64748b',
          light: '#f8fafc',
          border: '#e2e8f0'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
        raphtalia: ['Raphtalia', 'Outfit', 'sans-serif'],
        script: ['Caveat', 'cursive']
      },
      maxWidth: {
        'site': '1280px',
      },
      borderRadius: {
        'sm': '8px',
        'md': '10px',
        'lg': '12px',
        'xl': '14px',
        '2xl': '16px',
      },
      boxShadow: {
        'xs': '0 1px 2px rgba(0, 0, 0, 0.04)',
        'sm': '0 2px 4px rgba(0, 0, 0, 0.05)',
        'card': '0 2px 8px -2px rgba(15, 23, 42, 0.05), 0 4px 16px -4px rgba(15, 23, 42, 0.05)',
        'card-hover': '0 10px 24px -4px rgba(15, 23, 42, 0.08)',
      }
    },
  },
  plugins: [],
}
