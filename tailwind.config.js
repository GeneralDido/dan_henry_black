module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js','./pages/**/*.tsx', './components/**/*.tsx','./pages/**/*.ts', './components/**/*.ts',],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red_black_friday: '#EB0A0A',
        orange_black_friday: '#F6B65A',
        green_black_friday: '#2FB210',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
