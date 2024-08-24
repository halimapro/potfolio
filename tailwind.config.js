/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'pops':['Poppins', 'sans-serif']
      },
      colors:{
        primary:'#F40404',
        secondary:'#6C6C6C',
        demo: '#000000',
        third:'#858585'
      },
      maxWidth:{
        'container': '1144px',
      },
      backgroundImage:{
       'banner': "url('./src/assets/banner(3).png')",
       'oursimg': "url('./src/assets/our1.png')",
       'web': "url('./src/assets/web-1.png')",
       'webtwo': "url('./src/assets/web-2.png')",
       'aboutone':"url('./src/assets/About1.png')",
       'abouttwo':"url('./src/assets/About2.png')"
       },
      
       fontSize: {
       font64 : '64px',
       },
    },
  },
  plugins: [],
}