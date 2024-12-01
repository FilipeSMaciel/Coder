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
                    setUsername('Error');
                }
            } catch (error) {
                setUsername('Error');
            }
        }

        fetchUsername();
    }, []);

    return (
        <>
            <div className="flex flex-col mb-8 lg:mb-52 lg:ml-[2vw] sm:ml-28 mt-6 gap-12">
                <section className="lg:w-[14rem] lg:h-[14rem] w-[80vw] h-[33vh] bg-slate-500 rounded-[50%] border-[1px] border-black z-20 relative ml-10 mb-16">
                    <a href=""></a>
                    <div className="flex flex-col items-center lg:mt-[15rem] sm:ml-[18vw] lg:ml-[-10vw] sm:mt-[20rem] sm:relative">
                        <p className="text-verde_principal font-jetbrains tracking-widest text-nowrap text-3xl lg:mt-[1vw] lg:ml-[4vw] mb-6 absolute z-20 mt-[75vw] sm:ml-[-20vw]">
                            {username}
                        </p>
                        <button className="bg-[#1E1E1E] border-[3px] border-black drop-shadow-3xl text-2xl text-verde_principal font-jetbrains tracking-widest text-nowrap w-[75vw] h-[8vh] lg:w-[20rem] lg:mt-[4.5vw] lg:ml-[18vw] lg:h-[4rem] rounded-[4px] absolute z-20 mt-[40vh] ml-[1vw]">
                            Editar Perfil
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
}
