export default function MonthCourses() {

    const nextGen = "Nextgen:Futuro da programação"
    const texto = "OpenAI e humanização da inteligência artificial"
    const titulo = "text-verde_principal font-jetbrains sm:p-6 text-[1.5rem] sm:text-[2.3vw] font-light"
    const cursosItem = "w-[18rem] sm:w-[30vw] sm:h-26 text-wrap capitalize p-2 text-verde_principal border-[0.2rem] border-background font-jetbrains text-center text-[1.3rem] sm:text-[2.2vw] font-extralight hover:border-texto_header hover:bg-neutral-600/20 hover:scale-x-105"

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
        <section className="w-[90vw] sm:w-[34vw] h-[30rem] sm:h-[80vh] flex flex-col justify-around items-center gap-3 bg-bg_botao-login p-8 drop-shadow-3xl mb-10px">
            <h2 className={titulo}>&lt; Cursos do Mês /&gt;</h2>

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
                {limitarCarac(nextGen, 14)}
            </div>
            <div className={cursosItem}>
                <p>HTML & CSS:Início</p>
            </div>
        </section>
    )
}