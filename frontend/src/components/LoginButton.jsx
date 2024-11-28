import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function LoginButton({ openLoginModal, handleLogout, className }) {
  const location = useLocation();

  const isHomePage = location.pathname === '/home';
  const isFreelancePage = location.pathname === '/freelances';
  const isProjectsPage = location.pathname === '/projects';
  const isCoursesPage = location.pathname === '/courses';
  const isProfilePage = location.pathname === '/profile';

  return (
    <button
      onClick={isHomePage | isFreelancePage | isProjectsPage | isCoursesPage | isProfilePage ? handleLogout : openLoginModal}
      className={className}
    >
      {isHomePage | isFreelancePage | isProjectsPage | isCoursesPage | isProfilePage ? 'Sair' : 'Entrar'}
    </button>
  );
}

LoginButton.propTypes = {
  openLoginModal: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  className: PropTypes.string,
};
