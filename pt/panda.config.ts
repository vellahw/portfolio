import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  presets: ['@pandacss/preset-base', '@pandacss/preset-panda'],

  // Where to look for your css declarations
  include: ['./src/**/*.{ts,tsx,js,jsx}'],

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
  },

  globalVars: {
    '--font-pretendard': 'Pretendard',
  },

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
    tokens: {
      fonts: {
        pretendard: { value: 'var(--font-pretendard)' },
      },
      colors: {
        primary: { value: '#e1ddd5' },
      },
    },
    breakpoints: {
      sm: '150px',
      md: '767px',
      lg: '1367px',
      '2xl': '1921px',
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
