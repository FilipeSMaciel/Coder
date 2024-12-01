export default function Information() {
 
    const visualizaDados = 'border-b border-r border-verde_principal w-[32vw] lg:w-[28vw] h-[5vh] ml-[36vw] lg:ml-[18vw] bg-background absolute mt-12'
    const textosDados = 'lg:text-[1.3vw] lg:ml-8 mt-12 text-[#298C00] font-jetbrains text-[3vw]'
    const button = 'text-[3.5vw] lg:text-[1vw] text-verde_principal bg-background border-2 border-verde_principal drop-shadow-4xl lg:w-[12vw] w-[24vw] h-[8vh] font-jetbrains sm:justify-evenly sm:ml-4'

    return (
        <>
            <div className="">
                <section>
                    <div className="border-2 border-verde_principal lg:w-[50vw] w-[77.5vw] lg:h-[500px] h-[52vh] drop-shadow-3xl bg-[#2C2C2C]">
                    <div className="flex flex-row lg:ml-[1vw] ml-[4vw]">
                    <h1 className={textosDados}>E-mail cadastrado:</h1>
                        <p className={visualizaDados}></p>
                    </div>
                    <div className="flex flex-row lg:ml-[1vw] ml-[4vw]">
                    <h1 className={textosDados}>Nome de Usuário:</h1>
                    <p className={visualizaDados}></p>
                    </div>
                    <div className="flex flex-row lg:ml-[1vw] ml-[4vw] ">
                    <label htmlFor="" className={textosDados}>Alterar senha:</label>
                    <input type="password" name="senha" className={visualizaDados}/>
                    </div>
                    <div className="flex flex-row lg:ml-[1vw] ml-[4vw]">
                    <h1 className={textosDados}>Data de cadastro:</h1>
                    <p className={visualizaDados}></p>
                    </div>

                    <div className="flex flex-row gap-12 lg:ml-[9vw] ml-[8vw] mt-[8vh]">
                       
                        <button type="submit" className={button}>Enviar</button>
                        <button type="reset"  className={button}>Apagar</button>
                        
                    </div>


                    </div>
                </section>
            </div>
        </>
    )
}