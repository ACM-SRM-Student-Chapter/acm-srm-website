import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['var(--font-mango)', 'sans-serif'],
        poly: ['var(--font-poly)', 'sans-serif'], 
      },
      colors: {
        customGold: "#FDDC68",
        customgrey:'#D9D9D9',
        customorange:'#FF6F00',
        customblue:'#0A95DA',
        custombrown:'#FFCBB0'
      },
      height:{
        custom1: '444px',
        custom2: '422px'
      },
      width:{
        customw1: '699px',
        customw2: '781px',
        customw3: '538px',
        customw4: '523px'
      },
      
    },
  },
  plugins: [],
}

export default config