module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    colors: {
      grey: {
        lighter: '#D7D7D7',
        light: '#F3F5F3',
        med: '#E7E7E7',
        'med-dark': '#3A3A3A',
        dark: '#2B2B2B',
      },
      white: '#fff',
      black: '#000',
      transparent: 'transparent',
      blue: 'blue'
    },
    fontFamily: {
      'laundry': ['Laundry Grotesk', '-apple-system', 'sans-serif']
    },
    fontSize: {
      base: ['1.4rem', '1.6'],
    },
    flex: {
      '0-0': '0 0 auto',
    },
    extend: {},
  },
  plugins: [],
}
