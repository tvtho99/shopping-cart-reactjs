/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        ctn: '88vh',
      },
    },
    fontFamily: {
      'fira-sans': ['Fira Sans', 'sans-serif'],
    },
  },
  variants: {
    opacity: ({ after }) => after(['disabled']),
  },
  plugins: [],
};
