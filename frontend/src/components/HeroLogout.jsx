import HeroLogin from "./HeroLogin";

export default function HeroLogout() {
    return (
        <>
        <section className="flex flex-col items-center ">
            <div className="flex flex-col items-center w-[98.9vw] bg-bg_botao-login lg:h-[89vh]">

                <img className="w-[16rem] mt-16 mb-20 lg:w-[35rem] lg:mt-[9rem]" src="./coderforfree.png" alt="Coder++ Logo completo" />
            </div>

            <HeroLogin />
        </section>
        <section className="flex justify-around items-center flex-col">
            <img className="hidden" src="./notebookLogout.png" alt="" />
            <div className="w-[26.375rem]">
            <h4 className="">O sistema feito para programadores em busca de um projeto novo</h4>
            <p className="">Cursos, projetos, portfólios e vagas atualizadas 24 horas, todos os dias.</p>
            </div>
            <img className="lg:hidden scale-x-[-1] w-[10rem]" src="./notebook.png" alt="" />
        </section>
        </>
    )
}