import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import LoginModal from "../components/LoginModal";
import Footer from "../components/Footer";
import { useState } from "react";
import Menu from "../components/Menu";

export default function Companies() {
    const [open, setOpen] = useState(false);

    const handleLogoff = (username) => {
        localStorage.setItem("username", username);
        setOpen(false);
    };

    return (
        <>
            <Menu setOpen={setOpen} />

            <main>
                <h1>Empresas</h1>
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