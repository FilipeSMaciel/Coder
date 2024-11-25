import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importando o hook useNavigate

export default function LoginModal() {
  const [isRegistering, setIsRegistering] = useState(false); // Alterna entre login e cadastro
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "", // Só será usado no cadastro
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para verificar login

  const API_URL = "http://localhost:3000/users"; // Endpoint da API JSON Server
  const navigate = useNavigate(); // Inicializando o useNavigate

  // Atualiza os valores dos inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Verifica se o usuário já está logado ao montar o componente
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setIsLoggedIn(true);
      setFormData((prev) => ({ ...prev, username: storedUsername }));
    }
  }, []);

  // Handler para login
  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await fetch(`${API_URL}?username=${formData.username}&password=${formData.password}`);
      const users = await response.json();

      if (users.length > 0) {
        setSuccessMessage("Login bem-sucedido! Bem-vindo.");
        localStorage.setItem("username", formData.username); // Salva o nome de usuário no localStorage
        setIsLoggedIn(true);
        navigate("/home"); // Redireciona para a página /home após o login
      } else {
        setErrorMessage("Usuário ou senha inválidos.");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("Erro ao tentar realizar o login. Tente novamente.");
    }
  };

  // Handler para cadastro
  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    try {
      // Verifica se o nome de usuário já existe
      const existingUserResponse = await fetch(`${API_URL}?username=${formData.username}`);
      const existingUsers = await existingUserResponse.json();

      if (existingUsers.length > 0) {
        setErrorMessage("Nome de usuário já cadastrado.");
        return;
      }

      // Realiza o cadastro do usuário
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
          email: formData.email,
        }),
      });

      if (response.ok) {
        setSuccessMessage("Cadastro realizado com sucesso! Agora você pode fazer login.");
        setIsRegistering(false); // Alterna para o formulário de login
      } else {
        setErrorMessage("Erro ao tentar cadastrar. Tente novamente.");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("Erro ao tentar realizar o cadastro. Tente novamente.");
    }
  };

  // Handler para logout
  const handleLogout = () => {
    localStorage.removeItem("username"); // Remove o usuário do localStorage
    setIsLoggedIn(false);
    setFormData({ username: "", password: "", email: "" }); // Limpa os campos
    navigate("/"); // Redireciona para a página inicial
  };

  return (
    <section className="flex items-center justify-center h-screen">
      <div className="flex w-full max-w-4xl items-center gap-8">
        {/* Imagem abstrata */}
        <img
          src=""
          alt="Imagem abstrata da tela de Login"
          className={`w-1/2 transition-transform duration-300 ease-in-out ${
            isRegistering ? "order-first" : "order-last"
          }`}
        />

        {/* Formulário de Login, Cadastro ou Logout */}
        <div className="w-1/2 flex flex-col items-center">
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          {successMessage && <p className="text-green-500">{successMessage}</p>}

          {isLoggedIn ? (
            <div className="flex flex-col items-center">
              <h1 className="text-2xl font-bold mb-4">Bem-vindo, {formData.username}!</h1>
              <button
                className="bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600 cursor-pointer"
                onClick={handleLogout}
              >
                Sair
              </button>
            </div>
          ) : (
            <>
              {!isRegistering && (
                <div className="flex flex-col items-center">
                  <h1 className="text-2xl font-bold mb-4">Login</h1>
                  <h2 className="mb-6">
                    Ou se preferir,{" "}
                    <button
                      className="text-blue-600 underline"
                      onClick={() => setIsRegistering(true)}
                    >
                      cadastre-se.
                    </button>
                  </h2>
                  <form className="w-full flex flex-col items-center gap-4" onSubmit={handleLogin}>
                    <input
                      type="text"
                      name="username"
                      placeholder="Nome de usuário"
                      className="border border-gray-300 rounded-md p-2 w-full"
                      required
                      value={formData.username}
                      onChange={handleInputChange}
                    />
                    <input
                      type="password"
                      name="password"
                      placeholder="Senha"
                      className="border border-gray-300 rounded-md p-2 w-full"
                      required
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                    <input
                      type="submit"
                      value="ENTER"
                      className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 cursor-pointer"
                    />
                  </form>
                </div>
              )}

              {isRegistering && (
                <div className="flex flex-col items-center">
                  <h1 className="text-2xl font-bold mb-4">Cadastro</h1>
                  <h2 className="mb-6">
                    Ou se preferir,{" "}
                    <button
                      className="text-blue-600 underline"
                      onClick={() => setIsRegistering(false)}
                    >
                      faça login.
                    </button>
                  </h2>
                  <form className="w-full flex flex-col items-center gap-4" onSubmit={handleRegister}>
                    <input
                      type="text"
                      name="username"
                      placeholder="Nome de usuário"
                      className="border border-gray-300 rounded-md p-2 w-full"
                      required
                      value={formData.username}
                      onChange={handleInputChange}
                    />
                    <input
                      type="password"
                      name="password"
                      placeholder="Senha"
                      className="border border-gray-300 rounded-md p-2 w-full"
                      required
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="border border-gray-300 rounded-md p-2 w-full"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    <input
                      type="submit"
                      value="REGISTER"
                      className="bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-600 cursor-pointer"
                    />
                  </form>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
