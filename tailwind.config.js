/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        themeBgGardient: 'linear-gradient(to top, #accbee 0%, #e7f0fd 100%);'
      },
      backgroundColor: {
        themeBg: '#90caf9',
        themeLightBg: '#accbee'
      },
      colors: {
        themeColor: '#5faaff'
      }
    },
  },
  plugins: [],
}

