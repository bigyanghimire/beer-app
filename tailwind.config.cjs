/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  options: {
    whitelist: ['.grid', '.grid-cols-3', '.gap-x-5']
  },
  safelist: [
    'leading-relaxed',
    'text-xl',
  ],
  theme: {
    screens: {
      'lg': { 'max': '1200px' },
      'md': { 'min': '1201px' }
    },
    colors: {
      ...colors,

      "primary": {
        "main": '#EB595F',
        "dark": '#D35055',
        "extradark": '#73476D',
        "light": '#F18B8F',
        "extralight": '#FDEEEF',
        "yellow": "#FDD17F",
        "lightyellow": "#EBA31C",
        "pink": "#fce8fe",
        "blue": "#39518C"
      },

      "grey": {
        '100': '#3c4858',
        '400': '#4B4B63',
        '900': '#14142B',
        'light': '#8492a6',
      },

      "secondary": {
        "main": '#5E455A',
        "dark": '#42303F',
        "darkLight": '#646464',
        "light": '#8E7D8B',
        "extra-light": '#EFECEE',
      },

      "blue": {
        '100': "#133D9A",
        '200': "#133d9ad4",
        '300': '#0066C3',
        '50': '#e8f4f8'
      },

      "error": {
        100: '#A20B00'
      },

      "info-base": "#017AAD",

      "surface": {
        "overlay-60": '#00000099',
        80: '#F9F9FB',
        "overlay-40": '#00000066',
        "overlay-20": '#00000033',
        "background": '#DEDEDE',
      },

      "highlight": {
        100: '#4787F3',
      },

    },

    extend: {
      inset: (theme) => ({
        '1/5': '20%',
      }),

      fontWeight: (theme) => ({
        normal: '400',
      }),

      fontSize: (theme) => ({
        '2.5xl': '1.75rem',
        'xs-625': '0.625rem',
        '1.5': '0.375rem',
      }),

      fontFamily: (theme) => ({
        'Open-Sans': ['Open Sans', 'sans-serif'],
        'Montserrat': ['Montserrat', 'sans-serif'],
        'Inter': ['Inter', 'sans-serif'],
        'Mukta': ['Mukta', 'sans-serif'],
        'Lato': ['Lato', 'sans-serif'],
        'Muli': 'Muli',
        'Muli-Light': 'Muli-Light',
        'Muli-Bold': 'Muli-Bold',
        'Muli-SemiBold': 'Muli-SemiBold',
      }),
      colors: {
        "primaryGreen": "#289A3F",
        "lightGreen": "#EAF3EB",
        "primaryRed": "#DC2020",
        "lightRed": "#FCEAEA",
        "brightGray": "#EAEAEA",
        "lightPink": '#F0DCF5',
        "lightBlue": '#DCE2F5',
        "tirtiary": '#FAEAEA',
        'palate-4': '#DCF5F5'
      },
      lineHeight: {
        15: '3.75rem',
      },
      boxShadow: {
        cardHeader: "0px 6px 18px rgba(11, 7, 110, 0.07)",
        cardFooter: "0px -6px 18px rgba(11, 7, 110, 0.07)",
        normal: "inset 0px -1px 0px #EAEAEA",
        btn: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      },
      dropShadow: {
        btn: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      },
      width: {
        "13": "3.25rem",
        "15": "3.75rem",
      },
      maxWidth: {
        9: '9rem',
        102.75: '25.6rem',
        42.5: '10.625rem', // 170px
        39.5: '9.875rem', // 158px
        7.5: '1.875rem', // 30px
        15: '3.75rem', // 60px
        21.25: '1.875rem', // 85px
        22.5: '5.625rem', // 90px
        19: '4.75rem', // 76px
        '66.5': '16.625rem',
        94: '23.5rem',// 376px
        155.75: '38.938rem',// 623px,
        160: '40rem', //640px
        150: '37.5rem',
        30: '7.5rem', // 120px
        78.25: '19.563rem', // 313px
        82: '20.5rem', // 328px
        56.25: '14.063rem', // 225px
        100: '25rem', // 400px
        102.5: '25.625rem', // 410px
        106.25: '26.563rem', // 425px
        54.25: '13.563rem', // 217px
        90: '22.5rem',// 360px 
        47.75: '11.938rem', // 191px
        270: '67.5rem', //1080px
        320: '80rem', // 1280px Container Type 1
        184.252: '46.063rem', // 737px Container Type 2
        102.752: '25.688rem', // 411px Container Type 3
        129.752: '32.438rem', // 519px Container Type 4
        211.5: '52.875rem', // 846px Container Type 5
        48.5: '12.125rem', // 194px Container Type 6
        157: '39.25rem', // 628px Container Type 7
        130: '32.5rem', // 520px Container Type 8
        75.5: '18.875rem', // 302px Container Type 9
        116.25: '29.063rem', // 465px
        124: '31rem', // 496px
      },
      height: {
        "13": "3.25rem",
        "15": "3.75rem",
        "145": "36.25rem",
        "140/100vh": "calc(100vh - 140px)",
        "160/100vh": "calc(100vh - 160px)",
        "200/100vh": "calc(100vh - 200px)",
        "220/100vh": "calc(100vh - 220px)",
        "260/100vh": "calc(100vh - 260px)",
        "460/100vh": "calc(100vh - 460px)"
      },
      minHeight: {
        '160': '40rem',
        '100': '25rem',
      },
      padding: {
        '4.5': '1.125rem',
      },
      borderRadius: {
        '2.5xl': '1.125rem',
      },
    },
    variants: {
      extend: {
        backgroundColor: ['checked'],
        borderColor: ['checked'],
        translate: ['group-hover'],
        pointerEvents: ['group-hover'],
        display: ['group-hover']
      }
    },
    plugins: [
      require('tailwindcss-rtl')
    ]
  },
}
