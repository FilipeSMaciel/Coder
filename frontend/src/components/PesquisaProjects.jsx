export default function PesquisaProjects() {

    const filtrosBotton = "bg-[#2C2C2C] uppercase border-[0.2vw] px-[1vw] border-black drop-shadow-3xl lg:text-[1vw] text-verde_principal font-jetbrains tracking-widest text-nowrap lg:w-[8.5vw] lg:h-[4.5vh] w-[32vw] h-[12vw]  p-2.5 pl-2.5 lg:p-1 lg:pl-3 rounded-[0.4vw] text-[4vw]"
    const newBotton = "bg-[#2C2C2C] uppercase border-[0.2vw] px-[1vw] border-[#298C00] drop-shadow-3xl lg:text-[1vw] text-verde_principal font-jetbrains tracking-widest text-nowrap lg:w-[12vw] lg:h-[4.5vh] w-[45vw] h-[12vw]  p-2.5 pl-2.5 lg:p-1 lg:pl-3 rounded-[0.4vw] text-[4vw]"

    return (
        <>
            <div className="flex flex-row gap-2 mb-2">
                <section className="flex flex-col lg:flex-row gap-2 justify-around">
                    <div className=" mt-1 2xl:-ml-[3vw] lg:ml-1.5 border-2 border-[#767676] lg:h-[2vw] 2xl:h-[3.1vh] w-[80vw] 2xl:w-[19.5vw] lg:w-[22.75vw] ml-0.5">
                        <input type="text" size={36} name="Pesquise pelo projeto" placeholder="Procure seu projeto.." id="Pesquise pelo projeto" className="bg-background pl-2 opacity-4 text-white" />

                    </div>
                    <div className="flex flex-row lg:gap-2 gap-4">

                        <div className={filtrosBotton}>
                            <button>
                                Filtros →
                            </button>
                        </div>
                        <div className={newBotton}>
                            <button>
                                Novo Projeto +
                            </button>
                        </div>

                    </div>
                </section>
            </div>
        </>
    )
}