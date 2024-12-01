import React, { useEffect, useState } from 'react';

export default function PerfilIconeEditar() {
    const [username, setUsername] = useState('Loading...');

    useEffect(() => {
        // Simulação de fetch do username
        async function fetchUsername() {
            try {
                const response = await fetch('/backend/user.json'); // Atualize para o endpoint correto
                if (response.ok) {
                    const data = await response.json();
                    setUsername(data.username || 'Default Username');
                } else {
                    setUsername('Error 505-12');
                }
            } catch (error) {
                setUsername('Error 505-12'); // Error 505-12 (pra futuramente sabermos como codificar os bugs: 505-12 = Error Fetching Username)
            }
        }

        fetchUsername();
    }, []);

    return (
        <>
            <div className="flex flex-col lg:mb-52 lg:ml-[-0.01vw] sm:ml-28 mt-8 gap-12">
                <section className="lg:w-[14rem] lg:h-[14rem] sm:w-[40vw] sm:h:[80vh] bg-slate-500 rounded-[50%] border-[1px] border-black z-20 sm:relative sm:ml-28">
                    <a href=""></a>
                    <div className="flex flex-col items-center lg:mt-[15rem] sm:ml-[18vw] lg:ml-[-10vw] sm:mt-[20rem] sm:relative">
                        <p className="text-verde_principal font-jetbrains tracking-widest text-nowrap text-3xl lg:ml-[10vw] mb-6 sm:absolute z-20 sm:mt-12 sm:ml-[-20vw]">
                            {username}
                        </p>
                        <button className="bg-[#1E1E1E] border-[3px] border-black drop-shadow-3xl text-2xl text-verde_principal font-jetbrains tracking-widest text-nowrap w-[80vw] h-[8vh] lg:w-[20rem] lg:ml-[12vw] lg:h-[4rem] rounded-[4px] sm:absolute z-20 sm:mt-24 sm:ml-[-20vw]">
                            Editar Perfil
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
}
