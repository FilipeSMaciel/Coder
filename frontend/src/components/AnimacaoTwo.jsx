import { useEffect, useState } from 'react';

export default function AnimacaoTwo() {
  // Estado para armazenar as frases
  const [frases, setFrases] = useState([]);

  // Array com frases alternativas
  const frasesAlternativas = [
    "import random numero",
    "from math import pi ",
    "def saudacao(nome): ",
    "import time tempo '"
  ];

  // Função para gerar frase aleatória
  const gerarFraseAleatoria = () => {
    const numeroAleatorioFrase = Math.floor(Math.random() * frasesAlternativas.length);
    return frasesAlternativas[numeroAleatorioFrase];
  };

  // Função para gerar uma posição horizontal aleatória com espaçamento
  const gerarPosicaoHorizontal = () => {
    const maxLeft = 80; // 80% da largura da tela para a posição horizontal
    const minLeft = 6; // Garantir um mínimo de 6% de distância
    const left = Math.random() * (maxLeft - minLeft) + minLeft + '%';
    return left;
  };

  // Função para adicionar uma nova frase
  const adicionarNovaFrase = () => {
    const novaFrase = gerarFraseAleatoria();
    const left = gerarPosicaoHorizontal(); // Posição horizontal gerada aleatoriamente
    setFrases(prevFrases => [
      ...prevFrases,
      { frase: novaFrase, posicao: { left, top: '50%' } } // Posição fixa vertical no meio (50%)
    ]);
  };

  useEffect(() => {
    // Definir o número de frases iniciais (por exemplo, 5 frases)
    const numeroDeFrasesIniciais = 5;

    // Gerar as frases iniciais com intervalo aleatório para cada uma delas
    const intervalos = [];

    for (let i = 0; i < numeroDeFrasesIniciais; i++) {
      const intervalo = Math.random() * 10000 + 5000; // Intervalo aleatório entre 5 e 15 segundos
      const idIntervalo = setInterval(adicionarNovaFrase, intervalo);
      intervalos.push(idIntervalo); // Salva os IDs dos intervalos
    }

    // Limpa os intervalos quando o componente for desmontado
    return () => {
      intervalos.forEach(id => clearInterval(id));
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      {frases.map((item, index) => (
        <div
          key={index}
          className="animate-animacaoSubir opacity-50 text-verde_principal absolute"
          style={{
            left: item.posicao.left, // Posição horizontal aleatória
            top: item.posicao.top,   // Posição vertical fixa (50%)
            whiteSpace: 'nowrap',    // Impede a quebra de linha do texto
            transformOrigin: 'center', // Gira o texto a partir do centro
            width: 'max-content',    // Impede que o texto se expanda além do necessário
            height: 'max-content',   // Impede que o texto se expanda além do necessário
          }}
        >
          <h1 className="z-1">{item.frase}</h1>
        </div>
      ))}
    </div>
  );
}
