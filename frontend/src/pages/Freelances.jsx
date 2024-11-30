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
                <h1>Procure um freelance {'>>'}</h1>
                <h2>Pesquise o projeto perfeito para vocé</h2>

                <div>
                    <p>Barra de pesquisa placeholder</p>
                    <button>Pesquisar</button>
                </div>

                <button>Filtros</button>
                <button>Order By</button>
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