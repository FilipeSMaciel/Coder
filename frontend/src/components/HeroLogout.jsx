import AnimacaoCod from "./AnimacaoCod"
import HeroLogin from "./HeroLogin";

export default function HeroLogout() {
    return (
        <>
        <div className="hidden lg:block"><AnimacaoCod /></div>
            <section className="flex flex-col items-center relative">
                {/* Seção principal com a logo */}
                <div className="flex flex-col items-center w-full bg-bg_botao-login lg:h-[60vh] sm:pt-20 lg:">
                    <img
                        className="w-[16rem] mt-16 mb-20 lg:w-[22rem] lg:mt-[-2rem]"
                        src="./coderforfree.png"
                        alt="Coder++ Logo completo"
                    />
                </div>

                {/* Componente de login */}
                <HeroLogin />
            </section>

            {/* Segunda seção com conteúdo adicional */}
            <section className="sm:w-[90vw] flex justify-evenly items-center mt-16 lg:h-[60vh] drop-shadow-3xl pb-16 sm:ml-[4vw] lg:pb-[12rem] lg:mt-[10rem]">
                <div className="flex justify-around mx-9 items-center mt-16 lg:h-[35rem] drop-shadow-3xl">
                    {/* Imagem exibida apenas em telas grandes */}
                    <img
                        className="hidden lg:flex lg:w-[30vw] sm:p-12"
                        src="./notebookLogout.png"
                        alt="Notebook ilustrativo"
                    />

                    {/* Bloco de informações */}
                    <div className="w-[80vw] lg:w-[35vw] h-[35vh] lg:h-[22rem] p-10 flex flex-col items-center justify-evenly bg-bg_botao-login border-t-[0.1rem] border-verde_principal -mt-12 ">
                        <h4 className="w-[18rem] lg:w-[30vw] ml-4 lg:ml-0 font-jetbrains text-[1.8rem] lg:text-[2.3rem] text-verde_principal">
                            # Fácil, prático e veloz &#123;
                        </h4>
                        <p className="w-[16rem] lg:w-[30vw] font-jetbrains font-extralight text-[1rem] lg:text-[1.5vw] text-verde_botao">
                            Cursos, projetos, portfólios e vagas atualizadas 24 horas, todos os dias. &#125;
                        </p>
                        {/* Imagem adicional exibida apenas em telas menores */}
                        <img
                            className="lg:hidden scale-x-[-1] w-[10rem] ml-[10rem] mt-[-1rem]"
                            src="./notebook.png"
                            alt="Notebook ilustrativo"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
