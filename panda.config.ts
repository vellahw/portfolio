import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  presets: [],

  // Where to look for your css declarations
  include: ['./src/**/*.{ts,tsx,js,jsx}'],

  globalCss: {
    'html, body': {
      fontSize: '62.5%',
      fontFamily: 'pretendard',
      color: 'primary',
      backgroundColor: 'black',
    },

    '@media screen and (max-width: 768px)': {
      'html, body': {
        fontSize: '40%'
      }
    },
    '@media screen and (min-width: 769px) and (max-width: 1456px)': {
      'html, body': {
        fontSize: '50%'
      }
    },

    button: {
      cursor: 'pointer',

      _active: {
        outline: 'none',
      },
    },

    'h1, h2, h3, h4, h5, h6, span, p': {
      lineHeight: 1,
    },

    'h1, h2, h3, h4, h5, h6': {
      fontWeight: 700
    },
  },

  globalFontface: {
    Pretendard: [
      {
        src: 'url(/fonts/Pretendard-Regular.woff2) format("woff2")',
        fontWeight: 400,
        fontStyle: 'normal',
        fontDisplay: 'swap',
      },
      {
        src: 'url(/fonts/Pretendard-SemiBold.woff2) format("woff2")',
        fontWeight: 600,
        fontStyle: 'normal',
        fontDisplay: 'swap',
      },
      {
        src: 'url(/fonts/Pretendard-Bold.woff2) format("woff2")',
        fontWeight: 700,
        fontStyle: 'normal',
        fontDisplay: 'swap',
      },
    ],
    Darker: [
      {
        src: 'url(/fonts/DarkerGrotesque-Regular.ttf) format("truetype")',
        fontWeight: 400,
        fontStyle: 'normal',
        fontDisplay: 'swap',
      },
      {
        src: 'url(/fonts/DarkerGrotesque-Medium.ttf) format("truetype")',
        fontWeight: 500,
        fontStyle: 'normal',
        fontDisplay: 'swap',
      },
      {
        src: 'url(/fonts/DarkerGrotesque-Bold.ttf) format("truetype")',
        fontWeight: 700,
        fontStyle: 'normal',
        fontDisplay: 'swap',
      },
    ],
    Montserrat: [
      {
        src: 'url(/fonts/Montserrat-Medium.ttf) format("truetype")',
        fontWeight: 500,
        fontStyle: 'normal',
        fontDisplay: 'swap',
      },
      {
        src: 'url(/fonts/Montserrat-Bold.ttf) format("truetype")',
        fontWeight: 700,
        fontStyle: 'normal',
        fontDisplay: 'swap',
      },
    ]
  },

  globalVars: {
    '--font-pretendard': 'Pretendard',
    '--font-darker': 'Darker',
    '--font-montserrat': 'Montserrat',
  },

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
    tokens: {
      fonts: {
        pretendard: { value: 'var(--font-pretendard)' },
        darker: { value: 'var(--font-darker)' },
        montserrat: { value: 'var(--font-montserrat)' },
      },
      colors: {
        primary: { value: '#f9f9f8' },
        border: { value: '#e4eaee4d' },
        black: { value: '#15151A' },
        gray100: { value: '#E6E6E6' },
        gray500: { value: '#575757' },
      },
    },
    breakpoints: {
      sm: '150px',
      md: '768px',
      lg: '1366px',
      '2xl': '1921px',
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
