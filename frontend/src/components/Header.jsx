export default function Header() {

  const selectedBtn = " bg-black/35 border-t-[0.2rem] border-l-[0.2rem] px-3 border-b-[0.2rem] border-r-[0.2rem] border-t-black/80 border-l-black/80 border-b-verde_botao border-r-verde_botao"

  function login() {
    console.log('No futuro vou abrir um modal, com uma pequena tela de login, para então, quando o funcionário estiver logado, liberar uma ou outra funcionalidade que estava antes bloqueada.');
  }
  function menuHamburger(){
    console.log("Menuuuuu");
    
  }

  return (
    <header className="flex justify-evenly gap-32 lg:gap-[40rem] items-center bg-background w-full h-20 text-texto_header">

      <img className="size-16" src="logo.png" alt="Logo Coder++" />


      
      <div className="flex">
        <nav className=" gap-4 hidden sm:flex">
          <ul className="flex gap-4">
            <li className={selectedBtn}>Home</li> 
            <li>Freelances</li>
            <li>Projetos</li>
            <li>Cursos</li>
          </ul>
        </nav>
      
      <button onClick={login} className="flex items-center size-10 justify-center  sm:hidden"><img className=" h-12" src="Login.png" alt="" /></button>
      
      <button onClick={menuHamburger} className="flex items-center justify-center size-10  sm:hidden"><img className=" size-10" src="Database.png" alt="" /></button>
     
      <button className="hidden sm:flex sm:ml-40" onClick={login}>Entrar</button>

      </div>
    </header>
  )
}
