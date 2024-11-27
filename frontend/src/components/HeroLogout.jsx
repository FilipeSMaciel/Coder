import AnimacaoCod from "./AnimacaoCod";
import HeroLogin from "./HeroLogin";

export default function HeroLogout() {
    return (
        <>
        
            <section className="flex flex-col items-center relative">
                <div className="flex flex-col items-center w-[98.9vw] bg-bg_botao-login lg:h-[89vh]">

                    <img className="w-[16rem] mt-16 mb-20 lg:w-[35rem] lg:mt-[9rem]" src="./coderforfree.png" alt="Coder++ Logo completo" />
                </div>
              
                     {/*<AnimacaoCod /> 
                     
                     componente das animações dos textos de fundo, tem que dar hidden pra mobile pois não vou deixar aparecendo no mobile :)

                     */}  
             
                
                <HeroLogin />
                
            </section>
            
            <section className="flex justify-around mx-9 items-center mt-16 lg:h-[35rem] drop-shadow-3xl">

                <img className="hidden lg:flex lg:w-[40rem]" src="./notebookLogout.png" alt="" />

                <div className="">

                    <div className=" w-[80vw] lg:w-[35rem] h-[18.4375rem] lg:h-[22rem] flex items-center justify-evenly flex-col  bg-bg_botao-login border-t-[0.1rem] border-verde_principal">
                        <h4 className="w-[18rem] lg:w-[30rem] font-jetbrains text-[1.8rem] lg:text-[2.3rem]  text-verde_principal/60"># Fácil, prático e veloz &#123;</h4>
                        <p className="w-[16rem] lg:w-[30rem] font-jetbrains font-extralight text-[1rem] lg:text-[1.5rem] text-verde_botao ">Cursos, projetos, portfólios e vagas atualizadas 24 horas, todos os dias. &#125;</p>
                    </div>

                    <img className="lg:hidden scale-x-[-1] w-[10rem] ml-[10rem] mt-[-5rem]" src="./notebook.png" alt="" />

                </div>

            </section>
        </>
    )
}