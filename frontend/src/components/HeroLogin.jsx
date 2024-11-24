export default function HeroLogin() {
    return (
        <>
        <section className="flex items-center justify-center drop-shadow-3xl">

        <div className="lg:h-[50vh] h-[16rem] w-[2rem] lg:w-[9rem] mt-12 bg-verde_botao"></div>

            <div className="w-[80vw] h-[32vh] lg:h-[60vh] mt-12 flex justify-center items-center font-jetbrains gap-3 flex-col bg-bg_botao-login border-t-[0.1rem] border-verde_principal">
                <h1 className="text-verde_principal text-left lg:mx-16 text-[1.5rem] lg:text-[3rem] font-extralight p-5">&lt; O sistema feito para programadores em busca de um projeto novo / &gt;</h1>

                <h2 className="text-verde_principal/60 text-[0.8rem] lg:text-[2rem] font-jetbrains font-extralight p-3">E para empresas, criando novos desafios ...</h2>
            </div>
        
        <div className="lg:h-[50vh] h-[16rem] w-[2rem] lg:w-[9rem] mx-0 mt-12 bg-verde_botao"></div>
        
        </section>

            <img className="hidden" src="" alt="Right-side half circle" />
        </>
    )
}