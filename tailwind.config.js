/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Cours/**/*.{html,js}","./**/*.{html,js}"],
  theme: {
    
    screens: {
      'sm': {'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
    colors:{
      'withbg':'#f3f3f3',
      'withHead':'#f9f9f9e0',
      'redClolor':'#dc2626',
      'redColorHovr':'#ef4444',
    },
  },
  },
  plugins: [],
}

