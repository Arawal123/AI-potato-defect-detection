/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        night: '#030712',
        mist: '#f2f6ff',
        accent: '#7dd3fc'
      },
      fontFamily: {
        display: ['"SF Pro Display"', 'Inter', 'sans-serif'],
        body: ['"SF Pro Text"', 'Inter', 'sans-serif']
      }
    }
  },
  plugins: []
};
