import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./LoginModal.css"

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
      const response = await fetch(API_URL);
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
    <section className="flex items-center justify-center">
      <div className="flex w-full max-w-4xl items-center gap-8">
        <img
          src=""
          alt="Imagem abstrata da tela de Login"
          className={`w-1/2 hidden transition-transform duration-300 ease-in-out ${isRegistering ? "order-first" : "order-last"
            }`}
        />

        <div className="w-1/2 flex flex-col items-center">
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          {successMessage && <p className="text-green-500">{successMessage}</p>}

          {isLoggedIn ? (
            <div className="flex flex-col items-center aspect-auto">
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
                <h1 className="text-[8vw] w-[] font-bold mb-4 text-verde_principal">&#123; Cadastro &#125;</h1>
                <h2 className="mb-6 text-white text-[5vw]">
                   Ou se preferir,{" "}
                  <button
                    className="text-verde_principal underline text-[5vw]"
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
                  <input
                    type="email"
                    placeholder="Email"
                    className="border border-gray-300 rounded-md p-2 w-full"
                    required
                    {...register("email")}
                  />
                  <button
                    type="submit"
                    className="w-[65vw] bg-verde_principal/75 text-black rounded-md px-4 py-2 hover:bg-verde_botao cursor-pointer"
                  >
                    REGISTER
                  </button>
                </form>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <h1 className="text-[8vw] font-bold mb-4 text-verde_principal">&#123; Login &#125;</h1>
                <h2 className="mb-6 text-white text-[5vw]">
                  Ou se preferir,{" "}
                  <button
                    className="text-verde_principal underline text-[5vw]"
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
                    className="border border-gray-300 rounded-md p-2 w-[65vw]"
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
                  <button type="submit" className="w-full bg-verde_principal/75 text-black rounded-md px-4 py-2 hover:bg-verde_botao cursor-pointer">
                    ENTER
                  </button>
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