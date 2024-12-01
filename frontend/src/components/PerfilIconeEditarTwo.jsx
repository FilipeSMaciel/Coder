import React, { useEffect, useState } from 'react';

export default function PerfilIconeEditar() {
    const [username, setUsername] = useState('Loading...');
    const [texto, setTexto] = useState('');
    const [salvo, setSalvo] = useState(false);

    // Função para carregar os dados da fake API
    useEffect(() => {
        async function fetchUserData() {
            try {
                // Alteração: certifique-se de acessar o array de 'users' corretamente
                const response = await fetch('http://localhost:3000/users/1'); // A URL correta é '/users/1'
                if (response.ok) {
                    const data = await response.json();
                    setUsername(data.username);  // Altera para acessar a chave 'username' do objeto
                    setTexto(data.texto);        // Carrega o texto salvo
                } else {
                    console.error('Erro ao buscar dados do usuário:', response.statusText);
                }
            } catch (error) {
                console.error('Erro ao processar a requisição:', error);
            }
        }

        fetchUserData();
    }, []);

    // Função para lidar com a mudança de texto no textarea
    const handleTextoChange = (event) => {
        setTexto(event.target.value);
    };

    // Função para salvar os dados na fake API
    const handleSalvar = async () => {
        try {
            const response = await fetch('http://localhost:3000/users/1', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: 1,            // Asegura que o ID está presente
                    username: username,  // Salva o username
                    texto: texto,       // Salva o texto
                }),
            });

            if (response.ok) {
                console.log('Texto salvo:', texto);
                setSalvo(true);
            } else {
                console.error('Erro ao salvar os dados:', response.statusText);
            }
        } catch (error) {
            console.error('Erro ao salvar os dados:', error);
        }
    };

    return (
        <>
            <div className="flex flex-col mb-8 lg:mb-[38vw] lg:ml-[2vw] sm:ml-28 -mt-2">
                <section className="lg:w-[14rem] lg:h-[14rem] w-[80vw] h-[33vh] bg-slate-500 rounded-[50%] border-[1px] border-black z-20 relative ml-10 mb-16">
                    <a href=""></a>
                    <div className="flex flex-col items-center lg:mt-[15rem] sm:ml-[18vw] lg:ml-[-10vw] sm:mt-[20rem] sm:relative">
                        <p className="text-verde_principal font-jetbrains tracking-widest text-nowrap text-3xl lg:mt-[1vw] lg:ml-[4vw] mb-6 absolute z-20 mt-[75vw] sm:ml-[-20vw]">
                            {username}
                        </p>
                        <div className="">
                            <button 
                                className="bg-[#1E1E1E] border-[3px] border-black drop-shadow-3xl text-[1vw] text-verde_principal font-jetbrains tracking-widest text-nowrap sm:w-[18vw] sm:h-[8vh] w-[10vw] h-[1vw] rounded-[4px] mt-[5.7vw] ml-[12vw]"
                                onClick={handleSalvar}  // Chama a função handleSalvar quando o botão for clicado
                            >
                                Salvar
                            </button>
                        </div>
                        <div className="bg-[#2C2C2C] w-[25vw] border-[0.1vw] border-[#298C00] h-[23.5vw] ml-[19.5vw] mt-4">
                            <section className="h-full">
                                <textarea
                                    className="w-full h-full bg-transparent border-none text-verde_principal text-lg p-2 resize-none focus:outline-none"
                                    placeholder="Digite seu texto aqui..."
                                    value={texto}  // O valor do textarea é controlado pelo estado texto
                                    onChange={handleTextoChange}  // Atualiza o estado com o texto digitado
                                />
                            </section>
                        </div>
                        {salvo && (
                            <p className="text-verde_principal font-jetbrains mt-4 text-lg text-nowrap ml-[19vw]">
                                Dados salvos com sucesso!
                            </p>
                        )}
                    </div>
                </section>
            </div>
        </>
    );
}
