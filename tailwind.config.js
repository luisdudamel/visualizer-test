module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    'src/pages/**/*.{js,ts,jsx,tsx}',
    'src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'layout-container': `url(${process.env.NEXT_PUBLIC_BACKGROUND_URL})`
      }
    }
  }
}
