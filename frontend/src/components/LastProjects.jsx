export default function LastProjects() {

    const nameDiv = "hidden lg:flex items-center pl-3 lg:w-[13rem] lg:h-[7rem]  bg-fundo_lastProjects text-verde_principal font-jetbrains text-left text-[2rem] font-extralight"
    const iconsDiv = "border-[0.1rem] border-verde_principal w-20 h-20 p-2 lg:w-32 lg:h-32"
    const lastProjectDiv = "flex items-center"

    return (


        <section className="bg-bg_botao-login flex flex-col items-center justify-center gap-8 lg:gap-[5rem] py-[2rem] drop-shadow-3xl w-[90vw] lg:h-[28rem] border-t-[0.1rem] border-verde_principal">
            <h2 className="w-[20rem] lg:w-[60rem] text-verde_principal font-jetbrains text-left text-[1.5rem] lg:text-[3rem] font-extralight">Seus projetos mais recentes &gt;&gt;&gt;&gt;</h2>

            <div className="flex justify-evenly gap-10">
                <div className={lastProjectDiv}>
                    <img className={iconsDiv} src="./coca-cola.png" alt="Coca-Cola Logo" />

                    <div className={nameDiv}>
                        <p>Coca-Cola Inf.</p>
                    </div>

                </div>
                <div className={lastProjectDiv}>
                    <img className={iconsDiv} src="./trigold.png" alt="Trigold Logo" />
                    
                    <div className={nameDiv}>
                        <p>Trigold LTDA.</p>
                    </div>

                </div>
                <div className={lastProjectDiv}>
                    <img className={iconsDiv} src="./google.png" alt="Google Logo" />
                    <div className={nameDiv}>
                        <p>Google</p>
                    </div>
                </div>
            </div>
        </section>
    )
}