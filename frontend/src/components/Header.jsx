export default function Header() {

  function login() {
    console.log('No futuro vou abrir um modal, com uma pequena tela de login, para então, quando o funcionário estiver logado, liberar uma ou outra funcionalidade que estava antes bloqueada.');
  }

  return (
    <>
      <div>
        <img src="" alt="Logo Coder++" />
      </div>

      <div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Freelances</li>
            <li>Projetos</li>
            <li>Cursos</li>
          </ul>
        </nav>
        <button onClick={login}>Entrar</button>
      </div>
    </>
  )
}
