module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        'as-grey': '#E1E2E2',
      }),

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
