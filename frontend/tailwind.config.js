/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'Georgia', 'sans-serif'],
        neue: ['Bebas Neue', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      fontSize: {
        baseSize: '16px',
        mediumSize: '20px',
        bigSize: '24px'

      },
      fontWeight: {
        headerWeight: '400',
        baseWeight: '400',
      },
      lineHeight: {
        headerLine: '1',
        baseLine: '1.6',
      },
      letterSpacing: {
        baseSpacing: '0.025em',
        headerSpacing: '0.0em',
      },
      borderWidth: {
        iconWidth: '2px',
      },
      colors: {


        milkBlue: 'rgba(245,245,245,1)',
        darkGray: 'rgba(230, 230, 230, 1)',
        blackBg: 'rgba(30, 30, 32, 1)',
        blackLight: 'rgba(32,32,32,255)',
        blackLight2: 'rgba(18, 20, 23, 1)',
        lightGray: 'rgba(169, 169, 169, 1)',
        whiteText: 'rgba(252, 251, 254, 1)',
        blueButton: 'rgba(34, 108, 254, 1)',
        greenButton: 'rgba(2, 255, 255, 1)',
        colorLine: 'rgba(59, 62, 64, 1)',


        purpleGood: 'hsl(272,61%,25%)',
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      },
      backgroundImage: {
        'full-bg': "url('/src/assets/images/img3.jpg')",
        'full-bg2': "url('/src/assets/images/img2.jpg')",
        'home-bg': "url('/src/assets/images/img5.png')",
        'welcome-bg': "url('/src/assets/images/img4.png')",
      },
    },
  },
  plugins: [
    '@tailwindcss/line-clamp'
  ],
}