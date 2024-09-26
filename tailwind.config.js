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
        themeLightBg: '#accbee',
        themeDarkBg: '#247ad0'
      },
      colors: {
        themeColor: '#5faaff',
        themeDarkColor: '#247ad0'
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke': '2px #247ad0',
        },
        // Custom utility for half-colored text
        '.text-half-color': {
          'background': '#247ad0',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          'color': 'transparent',
          'height': '0px',
          'width': '0px',
          "display": "inline-block"
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}

