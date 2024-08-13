import { nextui } from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/comComponents/dropdown.js',
    './node_modules/@nextui-org/theme/dist/comComponents/radio.js',
    './node_modules/@nextui-org/theme/dist/comComponents/date-picker.js',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [nextui()],
};
