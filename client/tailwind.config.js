/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      black: '#000',
      white: '#fff',
      pink: '#da458f',
      purple: '#da34dd',
      fuchsia: '#8F2F73',
      yellow: '#ffcc21',
      'gray-700': '#334155',
      'gray-800': '#1f2937',
    },
    extend: {
      container: {
        screens: {
          sm: '100%',
          md: '100%',
          lg: '100%',
          xl: '1280px',
          '2xl': '1356px',
        },
      },
      fontFamily: {
        body: 'Inter, sans-serif',
      },
      backgroundImage: {
        img: "url('/assets/bg.png')",
        banner: "url('/assets/banner.png')",
        bottom: "url('/assets/bottom.png')",
        ribbon: "url('/assets/ribbon.png')",
      },
      backgroundColor: {
        transparent: 'transparent',
        primary: '#17161a',
        header: 'rgb(23, 22, 26)',
        menu: 'rgb(58, 56, 65)',
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
