/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: '#0952ed',
        sun: '#fc4903',
        moon: '#ede351'
      },
      dropShadow: {
        title: '4px 4px 0 rgb(33, 33, 33, 0.9)',
        smTitle: '3px 3px 0 rgb(33, 33, 33, 0.9)',
      },
      backgroundImage: {
        banner: `url('../public/images/banner.jpg')`
      },
      aspectRatio: {
        '3/4': '3 / 4',
      },
    },
    fontFamily: {
      Silkscreen: ['Silkscreen'],
      Tiny5: ['Tiny5'],
      Pretendard: ['Pretendard']
    }
  },
  plugins: [],
}

