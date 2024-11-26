import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { useState } from "react";
import Header from "../components/Header";
import HeroLogout from "../components/HeroLogout";
import LoginModal from "../components/LoginModal";
import Footer from "../components/Footer";

export default function HomeLogout() {
    const [open, setOpen] = useState(false);

    const handleLogin = (username) => {
        localStorage.setItem("username", username);
        setOpen(false);
    };

    return (
        <>
            <Header setOpen={setOpen} />
            <main className="bg-background">
                <HeroLogout />
            </main>

            <Modal
                open={open}
                onClose={() => setOpen(false)}
            >
                <LoginModal onLogin={handleLogin} />
            </Modal>
            <Footer />
        </>
    );
}