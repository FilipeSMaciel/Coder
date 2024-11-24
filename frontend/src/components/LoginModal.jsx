import { useForm } from "react-hook-form";

export default function LoginModal() {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <section>
        <h1>Login</h1>
        <h2>Ou se preferir, cadastre-se.</h2>

        <img src="" alt="Logo Coder++" />

        <form>
          <input type="text" placeholder="Nome de usuário" required />

          <input type="password" placeholder="Senha" required />

          <p className='flex justify-evenly gap-2 '>
            <input type="submit" value="ENTER" />
            <input type="reset" value="Limpar" />
          </p>

          <div>
            <img src="" alt="Logo do Google" />
            <img src="" alt="Logo do Github" />
            <img src="" alt="Logo do Linkedin" />
          </div>
        </form>

        <img src="" alt="Imagem abstrata da tela de Login" />

        <h1>Cadastro</h1>
        <h2>Ou se preferir, faça login.</h2>

        <form>
          <input type="text" placeholder="Nome de usuário" required />

          <input type="password" placeholder="Senha" required />

          <input type="email" placeholder="Email" />

          <div>
            <img src="" alt="Logo do Google" />
            <img src="" alt="Logo do Github" />
            <img src="" alt="Logo do Linkedin" />
            <input type="submit" value="ENTER" />
          </div>
        </form>
      </section>
    </>
  )
}