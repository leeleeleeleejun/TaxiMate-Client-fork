import { nextui } from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    // './node_modules/@nextui-org/theme/dist/components/dropdown.{js,mjs,ts}',
    // './node_modules/@nextui-org/theme/dist/components/radio.{js,mjs,ts}',
    // './node_modules/@nextui-org/theme/dist/components/date-picker.{js,mjs,ts}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [nextui()],
};
