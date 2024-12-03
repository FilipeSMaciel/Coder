import { useEffect, useState } from 'react';

export default function PerfilIconeEditar() {
const [username, setUsername] = useState('Loading...');
const [description, setDescription] = useState('');
const [isSaved, setIsSaved] = useState(false);
const [error, setError] = useState(null);

useEffect(() => {
    async function fetchUserData() {
        try {
            const storedUsername = localStorage.getItem('username');
            if (!storedUsername) {
                setError('No username found in local storage.');
                return;
            }

            const response = await fetch('http://localhost:3000/users');
            if (response.ok) {
                const users = await response.json();
                const user = users.find(u => u.username === storedUsername);

                if (user) {
                    setUsername(user.username);
                    setDescription(user.description || '');
                } else {
                    setError('User not found.');
                }
            } else {
                setError('Failed to fetch user data.');
                console.error('Erro ao buscar dados do usuário:', response.statusText);
            }
        } catch (error) {
            setError('An error occurred while fetching user data.');
            console.error('Erro ao processar a requisição:', error);
        }
    }

    fetchUserData();
}, []);

const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
};

const handleSave = async () => {
    try {
        const response = await fetch('http://localhost:3000/users');
        if (response.ok) {
            const users = await response.json();
            const user = users.find(u => u.username === username);

            if (user) {
                const updateResponse = await fetch(`http://localhost:3000/users/${user.id}`, {
                    method: 'PATCH', 
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        description: description,
                    }),
                });

                if (updateResponse.ok) {
                    console.log('Description saved:', description);
                    setIsSaved(true);
                    setTimeout(() => setIsSaved(false), 3000); 
                } else {
                    setError('Failed to save data.');
                    console.error('Erro ao salvar os dados:', updateResponse.statusText);
                }
            } else {
                setError('User not found for update.');
            }
        } else {
            setError('Failed to fetch users for update.');
            console.error('Erro ao buscar usuários para atualização:', response.statusText);
        }
    } catch (error) {
        setError('An error occurred while saving data.');
        console.error('Erro ao salvar os dados:', error);
    }
};

return (
    <div className="flex flex-col mb-[60vw] lg:mb-[38vw] lg:ml-[2vw] sm:ml-28 -mt-2">
        <section className="lg:w-[14rem] lg:h-[14rem] w-[80vw] h-[33vh] bg-slate-500 rounded-full border border-black z-20 relative ml-10 mb-16">
            <div className="flex flex-col items-center lg:mt-[15rem] sm:ml-[18vw] lg:ml-[-10vw] sm:mt-[20rem] sm:relative">
                <p className="text-verde_principal font-jetbrains tracking-widest text-nowrap text-3xl lg:mt-[1vw] lg:ml-[4vw] mb-6 absolute z-20 mt-[75vw] sm:ml-[-20vw]">
                    {username}
                </p>
                <button 
                    className="bg-[#1E1E1E] border-3 border-black drop-shadow-3xl text-lg text-verde_principal font-jetbrains tracking-widest text-nowrap sm:w-[18vw]  mt-[90vw] sm:h-[8vh] w-[48vw] h-[12vw] lg:w-[18vw] lg:h-[4vw] rounded lg:mt-[5.7vw] lg:ml-[12vw]"
                    onClick={handleSave}
                >
                    Salvar
                </button>
                <div className="bg-[#2C2C2C] w-[80vw] h-[50vw] lg:w-[25vw] border border-[#298C00] lg:h-[23.5vw] lg:ml-[19.5vw]  mt-[4vw] lg:mt-4">
                    <textarea
                        className="w-full h-full bg-transparent border-none text-verde_principal text-lg p-2 resize-none focus:outline-none"
                        placeholder="Digite seu texto aqui..."
                        value={description}
                        onChange={handleDescriptionChange}
                    />
                </div>
                {isSaved && (
                    <p className="text-verde_principal font-jetbrains mt-4 text-lg text-nowrap ml-[19vw]">
                        Dados salvos com sucesso!
                    </p>
                )}
                {error && (
                    <p className="text-red-500 font-jetbrains mt-4 text-lg text-nowrap ml-[19vw]">
                        {error}
                    </p>
                )}
            </div>
        </section>
    </div>
);
}