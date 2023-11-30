/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      black: '#000',
      white: '#fff',
      pink: '#da458f',
      purple: '#da34dd',
    },
    extend: {
      fontFamily: {
        body: 'Inter, sans-serif',
      },
      backgroundImage: {
        img: "url('/assets/bg.png')",
        banner: "url('/assets/banner.png')",
        bottom: "url('/assets/bottom.png')",
      },
      backgroundColor: {
        transparent: 'transparent',
        primary: '#17161a',
        card: 'rgba(58, 56, 65, 0.6)',
      },
      textColor: {
        primary: '#fff',
        secondary: '#89888b',
      },
      borderColor: {
        primary: '#da34dd',
        secondary: '#89888b',
      },
      outlineColor: {
        primary: '#da34dd',
      },
    },
  },
  plugins: [],
};
