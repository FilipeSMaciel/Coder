import { func } from "prop-types"

export default function MonthCourses() {

    const nextGen = "Nextgen: Futuro da programação"
    const texto = "OpenAI e humanização da inteligência artificial"
    const titulo = "text-verde_principal font-jetbrains  text-[1.5rem] lg:text-[3rem] font-light"
    const cursosItem = "w-[18rem] p-2 text-verde_principal border-[0.2rem] border-background font-jetbrains text-center text-[1.3rem] lg:text-[3rem] font-extralight drop-Shadow-4xl"

    function limitarCarac(string, maxCaracteres){
        if(string.length > maxCaracteres){
            return (
                <p>{string.substring(0, maxCaracteres)+"..."}</p>) 
        }
        return (
            <p>{string}</p>
        )
    }

    return (
        <section className=" flex flex-col justify-around items-center gap-3 bg-bg_botao-login p-8 drop-shadow-3xl">
            <h2 className={titulo}>&lt; Cursos do Mês/&gt;</h2>

            <div className={cursosItem}>
                <p>Banco de Dados</p>
            </div>
            <div className={cursosItem}>
                {limitarCarac(texto, 16)}
            </div>
            <div className={cursosItem}>
                <p>NextJS & VueJS</p>
            </div>
            <div className={cursosItem}>
                {limitarCarac(nextGen, 15)}
            </div>
            <div className={cursosItem}>
                <p>HTML & CSS: Início</p>
            </div>
        </section>
    )
}