import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  //  mytheme: {
  //         "primary": "#403F3F",
  //         "secondary": "#D72050",
  //         "base-100":"#E7E7E7",
  //         "base-200":"#F3F3F3",
  //         "accent" : "#706F6F",

  //       },

}

