import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { useState } from "react";
import Header from "../components/Header";
import HeroLogout from "../components/HeroLogout";
import LoginModal from "../components/LoginModal";
import Footer from "../components/Footer";

export default function HomeLogout() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Header setOpen={setOpen} />
            <main className="bg-background">
                <HeroLogout />
            </main>

            <Modal
                open={open}
                onClose={() => setOpen(false)}
                center 
                classNames={{
                    overlay: "customOverlay",
                    modal: "customModal",
                }}
            >
                <LoginModal />
            </Modal>
            <Footer /> 
        </>
    );
}
