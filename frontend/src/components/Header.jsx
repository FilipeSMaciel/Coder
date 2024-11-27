import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import LoginButton from "./LoginButton";

export default function Header({ setOpen }) {
    const navigate = useNavigate();
    const [username, setUsername] = useState(null);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const location = useLocation();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const homeLink = username && isLoggedIn ? '/home' : '/';
    const freelanceLink = username && isLoggedIn ? '/freelances' : '/';

    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        if (storedUsername) {
            setUsername(storedUsername);
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    useEffect(() => {
        console.log("Current Path:", location.pathname);
    }, [location]);

    const isActive = (path) => {
        console.log(`Checking if ${location.pathname} matches ${path}`);
        return location.pathname === path ? 'bg-black/35 border-t-[0.2rem] border-l-[0.2rem] px-3 border-b-[0.2rem] border-r-[0.2rem] border-t-black/80 border-l-black/80 border-b-verde_botao border-r-verde_botao' : '';
    };

    const openLoginModal = () => {
        setOpen(true);
    };

    const handleLogout = () => {
        localStorage.removeItem("username");
        setUsername(null);
        navigate("/");
    };

    const openMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    const getInitials = (name) => {
        const names = name.split(" ");
        const firstNameInitial = names[0][0].toUpperCase();
        const lastNameInitial = names.length > 1 ? names[names.length - 1][0].toUpperCase() : "";
        return `${firstNameInitial}${lastNameInitial}`;
    };

    return (
        <header className="flex justify-evenly drop-shadow-3xl border-b-2 border-verde_principal gap-32 lg:gap-[40rem] items-center bg-background w-full h-20 text-texto_header">

            <img className="size-16" src="logo.png" alt="Logo Coder++" />

            <div className="flex items-center gap-4">
                <nav className="gap-4 hidden sm:flex">
                    <ul className="flex gap-4">
                        <button>
                            <Link to={homeLink}>
                                <li className={isActive("/") || isActive("/home")}>
                                    Home
                                </li>
                            </Link>
                        </button>
                        <button>
                            <Link to={freelanceLink}>
                                <li className={isActive("/freelances")}>
                                    Freelances
                                </li>
                            </Link>
                        </button>
                        <button>
                            <li>Projetos</li>
                        </button>
                        <button>
                            <li>Cursos</li>
                        </button>
                    </ul>
                </nav>

                {/* Botão de Login / Logout para Mobile */}
                <button
                    onClick={openLoginModal}
                    className="flex items-center size-10 justify-center sm:hidden"
                >
                    <img className="h-12" src={username ? 'logoff.png' : "Login.png"} alt="" />
                </button>

                <button
                    className="flex items-center justify-center size-10 sm:hidden"
                    onClick={openMobileMenu}
                ><img className=" size-10" src="Database.png" alt="" /></button>

                {username && showMobileMenu && (
                    <div className="bg-background flex flex-col items-center justify-center gap-4 mt-40">
                        <ul className="flex flex-col gap-4">
                            <div className="ml-6 bg-bg_botao-login flex items-center justify-center rounded-full w-14 h-14 text-center text-lg font-bold text-white">
                                {getInitials(username)}
                            </div>
                            <button>
                                <Link to={homeLink}
                                    onClick={() => setShowMobileMenu(false)}
                                >
                                    <li className={isActive("/") || isActive("/home")}>
                                        Home
                                    </li>
                                </Link>
                            </button>
                            <button>
                                <Link to={freelanceLink}
                                    onClick={() => setShowMobileMenu(false)}
                                >
                                    <li className={isActive("/freelances")}>
                                        Freelances
                                    </li>
                                </Link>
                            </button>
                            <button>
                                <li>Projetos</li>
                            </button>
                            <button>
                                <li>Cursos</li>
                            </button>
                        </ul>
                    </div>
                )}

                {/* Botão de Login / Logout para Desktop */}
                <div className="hidden lg:flex items-center gap-4">
                    <LoginButton
                        openLoginModal={openLoginModal}
                        handleLogout={handleLogout}
                        className="ml-4 bg-bg_botao-login px-6 items-center justify-center rounded-md hover:scale-105 hover:border-neutral-700 hover:border-[0.1rem] transition-transform duration-100 ease-in-out"
                    />
                </div>
                {username && (
                    <div className="ml-6 bg-bg_botao-login flex items-center justify-center rounded-full w-14 h-14 text-center text-lg font-bold text-white">
                        {getInitials(username)}
                    </div>
                )}
            </div>
        </header>
    );
}

Header.propTypes = {
    setOpen: PropTypes.func.isRequired,
};