/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#9FD7E8',
        'brand-lavender': '#B19CD9',
        'brand-gold': '#BA9F6B',
        'brand-cyan': '#38DAE5',
        'brand-purple': '#9E92DE',
        'brand-bg': '#fcfcfd',
      },
      boxShadow: {
        '3d-light': '10px 10px 20px #e6e6e6, -10px -10px 20px #ffffff',
        '3d-light-hover': '15px 15px 30px #d9d9d9, -15px -15px 30px #ffffff',
        '3d-inner': 'inset 5px 5px 10px #e6e6e6, inset -5px -5px 10px #ffffff',
        'gold-glow': '0 0 15px rgba(186, 159, 107, 0.4)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #9FD7E8 0%, #B19CD9 100%)',
        'primary-text': 'linear-gradient(135deg, #9FD7E8 0%, #B19CD9 100%)',
      }
    },
  },
  plugins: [],
}
