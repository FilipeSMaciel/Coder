import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginButton from "./LoginButton";
import getInitials from "../utils/getInitials";

export default function Menu({ setOpen }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const homeLink = username && isLoggedIn ? '/home' : '/';
  const freelanceLink = username && isLoggedIn ? '/freelances' : '/';
  const projectsLink = username && isLoggedIn ? '/projects' : '/';
  const coursesLink = username && isLoggedIn ? '/courses' : '/';
  const profileLink = username && isLoggedIn ? '/profile' : '/';

  const isActive = (path) => {
    console.log(`Checking if ${location.pathname} matches ${path}`);
    return location.pathname === path ? 'bg-black/35 border-t-[0.2rem] border-l-[0.2rem] px-3 border-b-[0.2rem] border-r-[0.2rem] border-t-black/80 border-l-black/80 border-b-verde_botao border-r-verde_botao' : '';
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const openLoginModal = () => {
    setOpen(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername(null);
    navigate("/");
  };

  return (
    <header className="flex flex-col drop-shadow-3xl border-b-2 border-verde_principal bg-background w-full p-2 justify-center text-texto_header">
      <div className="flex w-full items-center h-20 container sm:ml-[18rem] mx-auto justify-between sm:relative">
        <img className="size-16" src="logo.png" alt="Logo Coder++" />
        <div className="flex items-center gap-10 sm:mr-[10vw]">
          <nav className="hidden gap-6 md:flex ">
            <Link to={homeLink}
              onClick={username ? () => setShowMobileMenu(false) : openLoginModal}
              className={isActive('/') || isActive('/home')}
            >
              Home
            </Link>
            <Link to={freelanceLink}
              onClick={username ? () => setShowMobileMenu(false) : openLoginModal}
              className={isActive('/freelances')}
            >
              Freelances
            </Link>
            <Link to={projectsLink}
              onClick={username ? () => setShowMobileMenu(false) : openLoginModal}
              className={isActive('/projects')}
            >
              Projetos
            </Link>
            <Link to={coursesLink}
              onClick={username ? () => setShowMobileMenu(false) : openLoginModal}
              className={isActive('/courses')}
            >
              Cursos
            </Link>
          </nav>

          <LoginButton
            openLoginModal={openLoginModal}
            handleLogout={handleLogout}
            className="ml-4 bg-bg_botao-login px-6 items-center justify-center rounded-md hover:scale-105 hover:border-neutral-700 hover:border-[0.1rem] transition-transform duration-100 ease-in-out"
          />

          <button
            className="flex items-center justify-center size-10 sm:hidden"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <img className=" size-10" src="Database.png" alt="" />
          </button>

          {username && (
            <Link
              to={profileLink}
              onClick={username ? () => setShowMobileMenu(false) : openLoginModal}
            >
              <div className="bg-bg_botao-login sm:flex items-center justify-center rounded-full size-11 text-center text-lg font-bold text-white hidden">
                {getInitials(username)}
              </div>
            </Link>
          )}
        </div>
      </div>

      <nav className={`${showMobileMenu ? 'flex flex-col' : 'hidden'} md:hidden gap-5 py-4`}>
        <Link to={homeLink}
          onClick={username ? () => setShowMobileMenu(false) : openLoginModal}
          className={`${isActive('/') || isActive('/home')} py-1`}
        >
          Home
        </Link>
        <Link to={freelanceLink}
          onClick={username ? () => setShowMobileMenu(false) : openLoginModal}
          className={isActive('/freelances')}
        >
          Freelances
        </Link>
        <Link to={projectsLink}
          onClick={username ? () => setShowMobileMenu(false) : openLoginModal}
          className={isActive('/projects')}
        >
          Projetos
        </Link>
        <Link to={coursesLink}
          onClick={username ? () => setShowMobileMenu(false) : openLoginModal}
          className={isActive('/courses')}
        >
          Cursos
        </Link>

        {username && (
          <Link
            to={profileLink}
            onClick={username ? () => setShowMobileMenu(false) : openLoginModal}
          >
            <div className="flex items-center justify-start gap-4">
              <div className="bg-bg_botao-login flex items-center justify-center rounded-full size-11 text-center text-lg font-bold text-white">
                {getInitials(username)}
              </div>
              {username}
            </div>
          </Link>
        )}
      </nav>
    </header>
  )
}

Menu.propTypes = {
  setOpen: PropTypes.func.isRequired,
};