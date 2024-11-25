import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

// Componente que protege as rotas
export default function PrivateRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  // Redireciona para "/" se o usuário não estiver autenticado
  return user ? children : <Navigate to="/" />;
}

// Validação de props
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
