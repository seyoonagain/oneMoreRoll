/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'brand': '#0952ed',
        'sun': '#fc4903',
        'moon': '#ede351'
      },
      dropShadow: {
        'title': '3px 3px 0 rgb(33, 33, 33, 0.9)',
      },
      maxWidth: {
        'footer': '60rem',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-1000%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(1000%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        'marquee-infinite': 'marquee 120s linear infinite',
        'marquee2-infinite': 'marquee2 120s linear infinite',
      },
    },
    fontFamily: {
      'Silkscreen': ['Silkscreen'],
      'Tiny5': ['Tiny5'],
      'Pretendard': ['Pretendard'],
      'Galmuri7': ['Galmuri7'],
      'Galmuri9': ['Galmuri9'],
      'Galmuri11': ['Galmuri11'],
      'Galmuri14': ['Galmuri14']
    }
  },
  plugins: [],
}

