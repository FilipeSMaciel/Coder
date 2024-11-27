import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function LoginButton({ openLoginModal, handleLogout, className }) {
  const location = useLocation();

  const isHomePage = location.pathname === '/home';
  const isFreelancePage = location.pathname === '/freelances';

  return (
    <button
      onClick={isHomePage | isFreelancePage ? handleLogout : openLoginModal}
      className={className}
    >
      {isHomePage | isFreelancePage ? 'Sair' : 'Entrar'}
    </button>
  );
}

LoginButton.propTypes = {
  openLoginModal: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  className: PropTypes.string,
};
