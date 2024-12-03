import PropTypes from "prop-types";

export default function PesquisaProjects({ setOpenProject }) {
    const openProjectModal = () => {
        setOpenProject(true); // Agora acessa corretamente o estado do modal.
    };

    const filtrosBotton = "bg-[#2C2C2C] uppercase border-[0.2vw] px-[1vw] border-black drop-shadow-3xl lg:text-[1vw] text-verde_principal font-jetbrains tracking-widest text-nowrap lg:w-[8.5vw] lg:h-[4.5vh] w-[32vw] h-[12vw] p-2.5 pl-2.5 lg:p-1 lg:pl-3 rounded-[0.4vw] text-[4vw]";
    const newBotton = "bg-[#2C2C2C] uppercase border-[0.2vw] px-[1vw] border-[#298C00] drop-shadow-3xl lg:text-[1vw] text-verde_principal font-jetbrains tracking-widest text-nowrap lg:w-[12vw] lg:h-[4.5vh] w-[45vw] h-[12vw] p-2.5 pl-2.5 lg:p-1 lg:pl-3 rounded-[0.4vw] text-[4vw]";

    return (
        <>
            <div className="flex flex-row gap-2 mb-2 ">
                <section className="flex flex-col lg:flex-row gap-2">
                    <div className="relative w-full sm:w-[60vw] md:w-[40vw] lg:w-[22.75vw] mt-1">
                        <input
                            type="text"
                            placeholder="Procure seu projeto..."
                            id="searchProject"
                            className="
      w-full h-full
      bg-background text-white placeholder-gray-400
      border-2 border-[#767676] rounded-md
      py-2 px-3
      text-sm lg:text-base
      focus:outline-none focus:ring-2 focus:ring-verde_principal focus:border-verde_principal
    "
                        />
                    </div>
                    <div className="flex flex-row lg:gap-2 gap-4 items-center">
                        <div className={filtrosBotton}>
                            <button>Filtros →</button>
                        </div>
                        <div className={newBotton}>
                            <button onClick={openProjectModal}>Novo Projeto +</button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

PesquisaProjects.propTypes = {
    setOpenProject: PropTypes.func.isRequired,
};
