import { useEffect, useState } from 'react';

export default function AnimacaoTwo() {

  const [frases, setFrases] = useState([]);

  const frasesAlternativas = [
    "import random numero",
    "from math import pi ",
    "def saudacao(nome): ",
    "import time tempo '"
  ];


  const gerarFraseAleatoria = () => {
    const numeroAleatorioFrase = Math.floor(Math.random() * frasesAlternativas.length);
    return frasesAlternativas[numeroAleatorioFrase];
  };


  const gerarPosicaoHorizontal = () => {
    const maxLeft = 80; 
    const minLeft = 6; 
    const left = Math.random() * (maxLeft - minLeft) + minLeft + '%';
    return left;
  };


  const adicionarNovaFrase = () => {
    const novaFrase = gerarFraseAleatoria();
    const left = gerarPosicaoHorizontal(); 
    setFrases(prevFrases => [
      ...prevFrases,
      { frase: novaFrase, posicao: { left, top: '50%' } } 
    ]);
  };

  useEffect(() => {
 
    const numeroDeFrasesIniciais = 5;

   
    const intervalos = [];

    for (let i = 0; i < numeroDeFrasesIniciais; i++) {
      const intervalo = Math.random() * 10000 + 5000; 
      const idIntervalo = setInterval(adicionarNovaFrase, intervalo);
      intervalos.push(idIntervalo); 
    }

    
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
            left: item.posicao.left, 
            top: item.posicao.top,   
            whiteSpace: 'nowrap',    
            transformOrigin: 'center', 
            width: 'max-content',    
            height: 'max-content',   
          }}
        >
          <h1 className="z-1">{item.frase}</h1>
        </div>
      ))}
    </div>
  );
}
