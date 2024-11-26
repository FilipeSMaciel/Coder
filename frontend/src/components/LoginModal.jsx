import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function LoginModal({ onLogin }) {
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const API_URL = "http://localhost:3000/users";
  const navigate = useNavigate();

  const { register, handleSubmit, reset, setValue } = useForm();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setIsLoggedIn(true);
      setValue("username", storedUsername);
    }
  }, [setValue]);

  const onSubmitLogin = async (data) => {
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await fetch(`http://localhost:9000/users`);
      const users = await response.json();

      if (users.length > 0) {
        setSuccessMessage("Login bem-sucedido! Bem-vindo.");
        localStorage.setItem("username", data.username);
        setIsLoggedIn(true);
        onLogin(data.username);
        navigate("/home");
      } else {
        setErrorMessage("Usuário ou senha inválidos.");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("Erro ao tentar realizar o login. Tente novamente.");
    }
  };

  const onSubmitRegister = async (data) => {
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const existingUserResponse = await fetch(`${API_URL}?username=${data.username}`);
      const existingUsers = await existingUserResponse.json();

      if (existingUsers.length > 0) {
        setErrorMessage("Nome de usuário já cadastrado.");
        return;
      }

      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccessMessage("Cadastro realizado com sucesso! Agora você pode fazer login.");
        setIsRegistering(false);
        reset();
      } else {
        setErrorMessage("Erro ao tentar cadastrar. Tente novamente.");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("Erro ao tentar realizar o cadastro. Tente novamente.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    reset();
    navigate("/");
  };

  return (
    <section className="flex items-center justify-center h-screen">
      <div className="flex w-full max-w-4xl items-center gap-8">
        <img
          src=""
          alt="Imagem abstrata da tela de Login"
          className={`w-1/2 transition-transform duration-300 ease-in-out ${isRegistering ? "order-first" : "order-last"
            }`}
        />

        <div className="w-1/2 flex flex-col items-center">
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          {successMessage && <p className="text-green-500">{successMessage}</p>}

          {isLoggedIn ? (
            <div className="flex flex-col items-center">
              <h1 className="text-2xl font-bold mb-4">Bem-vindo, {localStorage.getItem("username")}!</h1>
              <button
                className="bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600 cursor-pointer"
                onClick={handleLogout}
              >
                Sair
              </button>
            </div>
          ) : (
            isRegistering ? (
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
                <form className="w-full flex flex-col items-center gap-4" onSubmit={handleSubmit(onSubmitRegister)}>
                  <input
                    type="text"
                    placeholder="Nome de usuário"
                    className="border border-gray-300 rounded-md p-2 w-full"
                    required
                    {...register("username")}
                  />
                  <input
                    type="password"
                    placeholder="Senha"
                    className="border border-gray-300 rounded-md p-2 w-full"
                    required
                    {...register("password")}
                  />
                  {/* <input
                    type="email"
                    placeholder="Email"
                    className="border border-gray-300 rounded-md p-2 w-full"
                    required
                    {...register("email")}
                  /> */}
                  <input
                    type="submit"
                    value="REGISTER"
                    className="bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-600 cursor-pointer"
                  />
                </form>
              </div>
            ) : (
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
                <form className="w-full flex flex-col items-center gap-4" onSubmit={handleSubmit(onSubmitLogin)}>
                  <input
                    type="text"
                    name="username"
                    placeholder="Nome de usuário"
                    className="border border-gray-300 rounded-md p-2 w-full"
                    required
                    {...register("username")}
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Senha"
                    className="border border-gray-300 rounded-md p-2 w-full"
                    required
                    {...register("password")}
                  />
                  <input
                    type="submit"
                    value="ENTER"
                    className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 cursor-pointer"
                  />
                </form>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

LoginModal.propTypes = {
  onLogin: PropTypes.func.isRequired,
};