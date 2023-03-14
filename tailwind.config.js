/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      screens: {
        'xs': '360px',
      },
      backgroundImage: (theme) => ({
        'darkTheme': 'linear-gradient(#171717, #475569)',
        
      }),
    },
  },
  plugins: [],
}
