module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'layout-container': `url(${process.env.NEXT_PUBLIC_BACKGROUND_URL})`
      }
    }
  },
  plugins: []
}
