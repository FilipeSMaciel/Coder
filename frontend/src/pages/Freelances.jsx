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

    return (
        <>
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
        </>
    )

}