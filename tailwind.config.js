/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        ppmori: ['PPMori', 'sans-serif'],
      },
      colors: {
        deepblue: '#061237',
        lessdeepblue: '#0A1D4F',
        waylessdeepblue: '#0e2a75',
        deeperblue: '#0B0F2A',
        bluehour: '#3972E5',
        gloabalstrategy: '#20E0D5',
        structuredsolutions: '#DBFF00',
        familypartners: '#FFAB48',
        mist: '#E6E7EB',
        mist2: '#f5f0f0',
        white: '#FFFFFF',
      },
    },
    keyframes: {
      moveUp: {
        '0%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-70%)' },
        '100%': { transform: 'translateY(0)' },
      },
    },
    animation: {
      moveUp: 'moveUp 25s cubic-bezier(0.5, 0, 0.5, 1) infinite',
    },
  },
  variants: {},
  plugins: [],
};
