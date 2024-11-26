import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function LoginButton({ openLoginModal, handleLogout, className }) {
  const location = useLocation();

  // Verifica se o pathname é '/home'
  const isHomePage = location.pathname === '/home';

  return (
    <button
      onClick={isHomePage ? handleLogout : openLoginModal}
      className={className}
    >
      {isHomePage ? 'Sair' : 'Entrar'}
    </button>
  );
}

LoginButton.propTypes = {
  openLoginModal: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  className: PropTypes.string,
};
