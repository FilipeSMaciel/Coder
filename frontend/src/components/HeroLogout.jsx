import HeroLogin from "./HeroLogin";

export default function HeroLogout() {
    return (
        <section className="flex flex-col items-center ">
            <div className="flex flex-col items-center w-[98.9vw] bg-bg_botao-login lg:h-[89vh]">

                <img className="w-[16rem] mt-16 mb-20 lg:w-[35rem] lg:mt-[9rem]" src="./coderforfree.png" alt="Coder++ Logo completo" />
            </div>

            <HeroLogin />
        </section>
    )
}