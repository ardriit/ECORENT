/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    extend: {
      
      fontFamily: { 
        "roboto": 'Roboto' 
      },
      
      colors:{
      'brand-green': '#12c106',
      'light-green': '#F3FCF2'
  

    },
    margin:{
      'my-20': '96px'
    }
  },
  },
  plugins: [],
}

