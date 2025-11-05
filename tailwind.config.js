/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Colores de marca (sin cambios)
        primary: '#ff007a',
        'primary-hover': '#e6006e',
        secondary: '#34d399',
        'secondary-hover': '#2cb383',

        // Modo claro (sin cambios)
        'background-light': '#ffffff',
        'text-light': '#0f172a',
        'subtext-light': '#64748b',
        'card-light': '#f8fafc',
        'border-light': '#e2e8f0',

        // Modo oscuro SUAVIZADO (nuevos valores)
        'background-dark': '#1f2937', // gray-800
        'text-dark': '#f9fafb', // gray-50
        'subtext-dark': '#d1d5db', // gray-300
        'card-dark': '#374151', // gray-700
        'border-dark': '#4b5563' // gray-600
      },
      fontFamily: {
        display: ['Manrope', 'sans-serif']
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px'
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'pop-in': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      animation: {
        'slide-up-1': 'slide-up 0.5s ease-out forwards',
        'slide-up-2': 'slide-up 0.5s 0.2s ease-out forwards',
        'slide-up-3': 'slide-up 0.5s 0.4s ease-out forwards',
        'pop-in':
          'pop-in 0.6s 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards',
        'float-1': 'float 3s 1s ease-in-out infinite',
        'float-2': 'float 3s 1.3s ease-in-out infinite',
        'float-3': 'float 3s 1.6s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
