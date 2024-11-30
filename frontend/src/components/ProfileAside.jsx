export default function ProfileAside() {
  return (
    <section>
      <div>
        <img src="" alt="Avatar do Perfil" />
        <h2>Nome do Perfil</h2>
        <button>Editar Perfil</button>
        <div>Descrição</div>
        <hr />
      </div>

      <div>
        <div>
          Barra Pesquisa placeholder
          <button>Filtros</button>
          <button>Novo Projeto</button>
        </div>
        <ul>
          <li>
            <img src="" alt="Logo do Projeto" />
            <div>
              <h2>
                Resumo do projeto
              </h2>
              <p>
                Descricao do projeto
              </p>
              <hr />
              <img src="" alt="Ícone contador de devs" />
              <p>Contador</p>
            </div>
          </li>
        </ul>
      </div>

    </section>
  )
}