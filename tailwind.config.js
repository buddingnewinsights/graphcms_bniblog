/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.scss',
  ],
  theme: {
    extend: {
      inset: {
        '424px': '424 px',
      },
      colors: {
        'btn-primary': '#3182ce',
      },
      borderRadius: {
        xl: '1rem',
      },
      boxShadow: {
        btn: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  variants: {},
  plugins: [],
};
