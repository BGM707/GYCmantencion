/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        pulseHeart: {
          // El latido ocurre en el primer 30% del tiempo, el resto es calma
          '0%, 30%, 100%': { transform: 'scale(1)' },
          '10%': { transform: 'scale(1.12)' },
          '20%': { transform: 'scale(1.05)' },
          '25%': { transform: 'scale(1.18)' },
        },
        'infinite-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        // Aumentamos a 2.5s para que no sea estresante
        'pulse-heart': 'pulseHeart 2.5s ease-in-out infinite',
        'infinite-scroll': 'infinite-scroll 30s linear infinite',
      },
    },
  },
  plugins: [],
};