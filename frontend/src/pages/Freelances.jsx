import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import LoginModal from "../components/LoginModal";
import Footer from "../components/Footer";
import { useState } from "react";
import Menu from "../components/Menu";

export default function Freelances() {
    const [open, setOpen] = useState(false);

    const handleLogoff = (username) => {
        localStorage.setItem("username", username);
        setOpen(false);
    };

    {/* Consts de Estilização */ }

    const iconProject = "size-[20vw] p-2 px-[0.09rem]  ";
    const projectDesc = "flex flex-col gap-2 text-center"


    return (
        <div className="bg-background">
            <Menu setOpen={setOpen} />

            <main>
                <section>
                    <h1>Procure um freelance {'>>'}</h1>
                    <h2>Pesquise o projeto perfeito para vocé</h2>

                    <div>
                        <p>Barra de pesquisa placeholder</p>
                        <button>Pesquisar</button>
                    </div>

                    <button>Filtros</button>
                    <button>Order By</button>
                </section>

                <section>
                    <h2>Mais vistos recentemente {'>>'}</h2>
                    <hr />
                    <h3>Com base nos projetos de mais destaque dessa semana</h3>

                    <div className="bg-bg_botao-login sm:w-[85vw] sm:h-[20vh] sm:m-auto flex justify-around items-center font-inter font-light border-[0.2vh] border[0.5vh] border-verde_botao py-6 drop-shadow-3xl">

                        <img className={iconProject} src="./coca-cola.svg" alt="Logo Projeto" />
                        <div className="flex flex-col items-center justify-center gap-5">

                            <div className={projectDesc}>
                                <h4 className="text-[3vw] sm:text-[1.5vw] text-texto_header">Procura-se programadores para Janeiro/25</h4>
                                <p className="text-[2.5vw] sm:text-[1.2vw] m-auto w-[40vw] text-center text-texto_header">Você deseja participar da CokeJam de Janeiro/25?</p>
                                <p className="hidden sm:flex  text-[2vw] sm:text-[1vw] m-auto mt-5 text-verde_botao">Requisitos: C#, C++, Python, PHP, ORACLE, ANGULAR, JAVA, SQL.</p>
                            </div>


                            <a className="text-verde_principal underline text-[3vw] sm:hidden" href="#">Saiba Mais...</a>

                        </div>

                        <div className="flex gap-1 mt-[7vh] sm:w-[8vw] sm:flex-wrap justify-end">
                            <img className="sm:size-5" src="./Group.svg" alt="Contador de devs icon" />
                            <p className="text-verde_principal font-extralight">15</p>
                            <a className="hidden text-verde_principal underline text-[1vw]" href="#">Saiba Mais...</a>
                        </div>
                    </div>
                </section>

                <section>
                    <h2>Para você {'>>'}</h2>
                    <hr />
                    <h3>Com base nas suas competências e preferências</h3>

                    <div>
                        <ul>
                            <li>
                                <img src="" alt="Logo Projeto" />
                                <div>
                                    <h4>Procura-se programadores para Janeiro/25</h4>
                                    <p>Você deseja participar da CokeJam de Janeiro/25?</p>
                                    <p>Requisitos: C#, C++, Python, PHP, ORACLE, ANGULAR, JAVA, SQL, Não ser corno</p>
                                </div>
                                <div>
                                    <div>
                                        <img src="" alt="Contador de devs icon" />
                                        <p>15</p>
                                    </div>
                                    <a href="#">Saiba Mais ...</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                <div>
                    <p>Próxima página placeholder</p>
                </div>
            </main>

            <Modal
                open={open}
                onClose={() => setOpen(false)}
                center
            >
                <LoginModal onLogin={handleLogoff} />
            </Modal>
            <Footer />
        </div>
    )

}