import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { useState } from "react";
import HeroLogout from "../components/HeroLogout";
import LoginModal from "../components/LoginModal";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

export default function HomeLogout() {
    const [open, setOpen] = useState(false);

    const handleLogin = (username) => {
        localStorage.setItem("username", username);
        setOpen(false); // Close the modal after successful login
    };

    return (
        <>
            <Menu setOpen={setOpen} />
            <main className="bg-background">
                <HeroLogout />
            </main>

            <Modal
                open={open}
                onClose={() => setOpen(false)}
                center
                classNames={{
                    overlay: 'customOverlay',
                    modal: 'customModal'
                }}
                className="drop-shadow-3xl"
            >
                <LoginModal onLogin={handleLogin} />
            </Modal>

            <Footer />
        </>
    );
}