/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'header-fundo': '#242424',
        'verde_botao': '#298C00',
        'background': '#1E1E1E',
        'texto_header': '#B3B3B3',
      },
    },
    dropShadow: {
      'botao': 'px 4px 4px rgba(0, 0, 0, 1)',
      
    }
  },
  plugins: [],
}