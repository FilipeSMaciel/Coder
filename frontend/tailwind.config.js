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
      'typewriter': 'typewriter 12s steps(30) 1s infinite',
      'blink-cursor': 'blinkTextCursor 500ms steps(9) infinite normal',
    },
    keyframes: {
      animacaoCima: { 
        '0%': { transform: 'translateY(10vh) rotate(90deg)' },
        '100%': { transform: 'translateY(258vh) rotate(90deg)' },
      },
      animacaoBaixo: {
        '0%': { transform: 'translateY(10vh) rotate(90deg)' },
        '100%': { transform: 'translateY(249vh) rotate(90deg)' },
      },
      digitando: {
        'from': { width: '0' }, // Começa com 0% de largura
        'to': { width: '100%' }, // Aumenta até 100% da largura
      },
      blink: {
        '0%': { borderColor: 'transparent' },
        '50%': { borderColor: 'rgba(255, 255, 255, 0.7)' }, // Ajuste para o efeito de piscar
        '100%': { borderColor: 'transparent' },
      },
      typewriter: {
        '0%': { width: '0vw' },
        '10%': { width: '0vw' },
        '25%': { width: '50vw' },
        '75%': { width: '50vw' },
        '90%': { width: '0vw' },
        '100%': { width: '0vw' },
      },
      blinkTextCursor: {
        'from': { borderColor: 'rgba(255, 255, 255, 0.75)' },
        'to': { borderColor: 'transparent' },
      },
      spacing: {
        'line-width': '160px', // Define a largura da linha para a animação
      },
      fontSize: {
        'large': '180%',
      },
    },
  },
  plugins: [require('tailwindcss-font-inter')],
};
