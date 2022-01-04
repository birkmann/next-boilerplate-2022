module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        headline: ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
