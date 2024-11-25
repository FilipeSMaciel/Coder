import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header({ setOpen }) {
    const navigate = useNavigate();
    const [username, setUsername] = useState(null);

    useEffect(() => {
        // Recupera o username armazenado no localStorage ao carregar o componente
        const storedUsername = localStorage.getItem("username");
        if (storedUsername) setUsername(storedUsername);
    }, []);

    const openLoginModal = () => {
        setOpen(true);
    };

    const handleLogout = () => {
        // Remove o username do localStorage e redireciona para a página inicial
        localStorage.removeItem("username");
        setUsername(null);
        navigate("/"); // Substitua "/" pela rota desejada
    };

    const getInitials = (name) => {
        const [firstName, lastName] = name.split(" ");
        return `${firstName[0].toUpperCase()}${lastName ? lastName[0].toUpperCase() : ""}`;
    };

    return (
        <header className="flex justify-evenly drop-shadow-3xl border-b-2 border-verde_principal gap-32 lg:gap-[40rem] items-center bg-background w-full h-20 text-texto_header">
            <img className="size-16" src="logo.png" alt="Logo Coder++" />
            <div className="flex">
                <nav className="gap-4 hidden sm:flex">
                    <ul className="flex gap-4">
                        <button>
                            <li className="bg-black/35 border-t-[0.2rem] border-l-[0.2rem] px-3 border-b-[0.2rem] border-r-[0.2rem] border-t-black/80 border-l-black/80 border-b-verde_botao border-r-verde_botao">
                                Home
                            </li>
                        </button>
                        <button>
                            <li>Freelances</li>
                        </button>
                        <button>
                            <li>Projetos</li>
                        </button>
                        <button>
                            <li>Cursos</li>
                        </button>
                    </ul>
                </nav>

                {/* Botão de Login / Logout */}
                {username ? (
                    <div className="flex items-center gap-4">
                        {/* Botão de logout */}
                        <button
                            className="hidden lg:flex lg:ml-40 lg:bg-bg_botao-login lg:px-10 lg:items-center lg:justify-center lg:rounded-md hover:scale-105 hover:border-neutral-700 hover:border-[0.1rem] transition-transform duration-100 ease-in-out"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>

                        {/* Círculo com as iniciais */}
                        <div className="ml-6 lg:bg-bg_botao-login lg:flex lg:items-center lg:justify-center lg:rounded-full lg:w-14 lg:h-14 lg:text-center lg:text-lg lg:font-bold lg:text-white">
                            {getInitials(username)}
                        </div>

                    </div>
                ) : (
                    <button
                        className="hidden lg:flex lg:ml-40 lg:bg-bg_botao-login lg:px-10 lg:items-center lg:justify-center lg:rounded-md hover:scale-105 hover:border-neutral-700 hover:border-[0.1rem] transition-transform duration-100 ease-in-out"
                        onClick={openLoginModal}
                    >
                        Entrar
                    </button>
                )}
            </div>
        </header>
    );
}

Header.propTypes = {
    setOpen: PropTypes.func.isRequired,
};
