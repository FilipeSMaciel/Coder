/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    
  ],
  theme: {
    extend: {
      colors: {
        'header-fundo': '#242424',
        'verde_botao': '#298C00',
        'background': '#1E1E1E',
        'texto_header': '#B3B3B3',
        'bg_botao-login': '#2C2C2C',
        'verde_principal': '#41FF00',
        'fundo_lastProjects': '#3C3C3C',
      },
    },
    dropShadow: {
      '3xl': '1px 8px 18px rgba(0, 0, 0, 0.8)',
      '4xl': '1px 10px 18px rgba(0, 0, 0, 0.9)',
      '1xl': '1px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    },
    fontFamily: {
      'jetbrains': ['JetBrains Mono', 'monospace'],
      'inter': ['Inter', 'monospace'],
  },
  animation: {
    'animacaoSubir': 'animacaoCima 10s linear infinite',
    'animacaoDescer': 'animacaoBaixo 10s linear infinite',
  },
  keyframes: {
    animacaoCima: { 
      '0%': {transform: 'translateY(150px) rotate(90deg)'},
      '100%': {transform: 'translateY(1500px) rotate(90deg)'},
    },
    keyframes: {
    animacaoBaixo: {
      '0%': {transform: 'translateY(150px) rotate(90deg)'},
      '100%': {transform: 'translateY(1350px) rotate(90deg)'},
    }
}}},

  plugins: [require('tailwindcss-font-inter')],
};