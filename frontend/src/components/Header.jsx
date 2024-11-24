import PropTypes from 'prop-types';

export default function Header({ setOpen }) {
  const selectedBtn = " bg-black/35 border-t-[0.2rem] border-l-[0.2rem] px-3 border-b-[0.2rem] border-r-[0.2rem] border-t-black/80 border-l-black/80 border-b-verde_botao border-r-verde_botao";

  const openLoginModal = () => {
      setOpen(true);
  };

  function menuHamburger() {
      console.log("Menuuuuu");
  }

  return (
      <header className="flex justify-evenly drop-shadow-3xl border-b-2 border-verde_principal gap-32 lg:gap-[40rem] items-center bg-background w-full h-20 text-texto_header">
          <img className="size-16" src="logo.png" alt="Logo Coder++" />
          <div className="flex">
              <nav className="gap-4 hidden sm:flex">
                  <ul className="flex gap-4">
                      <button>
                          <li className={selectedBtn}>Home</li>
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

              <button
                  onClick={openLoginModal}
                  className="flex items-center size-10 justify-center sm:hidden"
              >
                  <img className="h-12" src="Login.png" alt="Login" />
              </button>

              <button onClick={menuHamburger} className="flex items-center justify-center size-10 sm:hidden">
                  <img className="size-10" src="Database.png" alt="Database" />
              </button>

              <button
                  className="hidden lg:flex lg:ml-40 lg:bg-bg_botao-login lg:px-10 lg:items-center lg:justify-center lg:rounded-md hover:scale-105 hover:border-neutral-700 hover:border-[0.1rem] transition-transform duration-100 ease-in-out"
                  onClick={openLoginModal}
              >
                  Entrar
              </button>
          </div>
      </header>
  );
}

Header.propTypes = {
  setOpen: PropTypes.func.isRequired,
};
