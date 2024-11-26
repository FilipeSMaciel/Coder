import { useLocation } from 'react-router-dom';

function LoginButton({ openLoginModal, handleLogout, className }) {
  const location = useLocation();

  // Verifica se o pathname é '/home'
  const isHomePage = location.pathname === '/home';

  return (
    <button
      onClick={isHomePage ? handleLogout : openLoginModal}
      className={className}
    >
      {isHomePage ? 'Logoff' : 'Entrar'}
    </button>
  );
}

export default LoginButton;