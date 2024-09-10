/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  darkMode: 'class',
  theme: {
    colors: {
      primary: 'orange',
      blueColor: '#0b2b5e',
      darkColor: '#1d242f',
      lightColor: '#fff',
      grayColor: 'rgb(108, 113, 120)',
      skeletonColor: '#e0e0e0',
      successColor: '#28a745',
      modeBlueColor: '#2364cc',
      shadowColor: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    },
    extend: {
      screens: {
        xxs: '370px',
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [
    // require('@tailwindcss/aspect-ratio')
  ],
};
