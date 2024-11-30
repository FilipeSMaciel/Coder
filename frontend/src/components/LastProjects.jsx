export default function LastProjects() {

    const nameDiv = "hidden sm:flex items-center pl-3 sm:w-[13vw] sm:h-[14vh]  bg-fundo_lastProjects text-verde_principal font-jetbrains text-left text-[2rem] sm:text-[2vw] font-extralight"
    const iconsDiv = "border-[0.1rem] border-verde_principal w-[12vw] h-[6vh] p-2 sm:w-[8vw] sm:h-[16vh]"
    const lastProjectDiv = "flex items-center"

    return (


        <section className="bg-bg_botao-login flex flex-col items-center justify-center gap-8 sm:gap-[5rem] py-[2rem] drop-shadow-3xl w-[90vw] sm:w-[76vw] sm:h-[28rem] border-t-[0.1rem] border-verde_principal">
            <h2 className="w-[20rem] sm:w-[60rem]  text-verde_principal font-jetbrains text-center text-[1.5rem] sm:text-[3vw] font-extralight">Seus projetos mais recentes &gt;&gt;&gt;&gt;</h2>

            <div className="flex justify-evenly gap-10">
                <div className={lastProjectDiv}>
                    <a href=""><img className={iconsDiv} src="./coca-cola.png" alt="Coca-Cola Logo" /></a>

                    <div className={nameDiv}>
                    <a href=""> <p>Coca-Cola Inf.</p></a>
                    </div>

                </div>
                <div className={lastProjectDiv}>
                <a href="">  <img className={iconsDiv} src="./trigold.png" alt="Trigold Logo" /></a>
                    
                    <div className={nameDiv}>
                    <a href="">  <p>Trigold LTDA.</p></a>
                    </div>

                </div>
                <div className={lastProjectDiv}>
                <a href="">  <img className={iconsDiv} src="./google.png" alt="Google Logo" /></a>
                    <div className={nameDiv}>
                    <a href="">   <p>Google</p></a>
                    </div>
                </div>
            </div>
        </section>
    )
}