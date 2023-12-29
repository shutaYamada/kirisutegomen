/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "my-red":"#AE3610",
        "bg-red":"#971114",
        "border-red":"#7B2206",
        "button-color":"#EBBC2E",
        "my-yerrow":"#FFF500",
        "my-gray":"#F5F5F5",
        "border-yellow":"#EDC448",
        "border-blue":"#3389C6",
        "cell-gray-color":"#D9D9D9",
        "cell-pink-color":"#FFEFE9",
        "table-gray":"#F4F4F4",
        "my-orange":"#F39800"
      },
      spacing: {
        '10px': '10px',
        
      },
      // backgroundImage: {
      //   'bg-red': "url('./img/bg-red.png')",
      // }
      backgroundImage: theme => ({
        'custom-bg': "url('/src/img/bg-red.png')",
        'normal-bg': "url('/src/img/bg-main.jpeg')",
      })
    },
  },
  variants: {},
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.border-collapse': {
          'border-collapse': 'separate',
        },
      }

      addUtilities(newUtilities)
    }
  ],
}

