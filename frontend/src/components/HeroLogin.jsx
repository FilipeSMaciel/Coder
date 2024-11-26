import { useLocation } from "react-router-dom";

export default function HeroLogin() {
    const location = useLocation();

    const isHomePage = location.pathname === "/home";
    const leftGreen = "lg:h-[50vh] h-[16rem] w-[2rem] lg:w-[9rem] mt-12 bg-verde_botao";
    const rightGreen = "lg:h-[50vh] h-[16rem] w-[2rem] lg:w-[9rem] mx-0 mt-12 bg-verde_botao";
    const mainDivOnHome = "w-[100vw] h-[32vh] lg:h-[60vh] flex justify-between items-center font-jetbrains gap-3 bg-bg_botao-login border-t-[0.1rem] border-verde_principal";

    return (
        <>
            <section className="flex items-center justify-center drop-shadow-3xl max-w-[98.9vw]">
                {/* As divs serão ocultadas no path '/home' */}
                {!isHomePage && <div className={leftGreen}></div>}

                {/* Wrapper da main div com flex e condicional para a imagem */}
                <div
                    className={
                        isHomePage
                            ? mainDivOnHome
                            : "w-[80vw] h-[32vh] lg:h-[60vh] mt-12 flex justify-center items-center font-jetbrains gap-3 flex-col bg-bg_botao-login border-t-[0.1rem] border-verde_principal"
                    }
                >
                    {/* Conteúdo principal */}
                    <div className="flex flex-col justify-center items-start lg:mx-16 p-5">
                        <h1 className="text-verde_principal font-jetbrains text-left text-[1.5rem] lg:text-[3rem] font-extralight">
                            &lt; O sistema feito para programadores em busca de um projeto novo / &gt;
                        </h1>
                        <h2 className="text-verde_principal/60 text-[0.8rem] lg:text-[2rem] font-jetbrains font-extralight p-3">
                            E para empresas, criando novos desafios ...
                        </h2>
                    </div>

                    {/* A imagem é exibida somente no path '/home' */}
                    {isHomePage && (
                        <img
                            className="hidden lg:block w-[20%] h-auto lg:w-[10%] mx-5"
                            src="path-to-your-image" // Substitua pelo caminho correto da imagem
                            alt="Meio circulo à direita"
                        />
                    )}
                </div>

                {!isHomePage && <div className={rightGreen}></div>}
            </section>
        </>
    );
}
