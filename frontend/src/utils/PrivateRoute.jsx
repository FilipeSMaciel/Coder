import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

// Componente que protege as rotas
export default function PrivateRoute({ children }) {
  let user = null;
  
  try {
    user = JSON.parse(localStorage.getItem("user"));
  } catch (error) {
    console.error("Erro ao verificar o usuário:", error);
  }

  // Redireciona para "/home" se o usuário estiver autenticado
  return user ? <Navigate to="/home" /> : children;
}

// Validação de props
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
