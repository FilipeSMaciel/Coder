import Modal from "react-responsive-modal";
import Header from "../components/Header";
// import HeroLogin from "../components/HeroLogin";
// import LastProjects from "../components/LastProjects";
// import MainProjects from "../components/MainProjects";
// import MonthCourses from "../components/MonthCourses";
import LoginModal from "../components/LoginModal";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Freelances() {
    const [open, setOpen] = useState(false);

    const handleLogoff = (username) => {
        localStorage.setItem("username", username);
        setOpen(false);
    };

    return (
        <>
            <Header setOpen={setOpen} />
            {/* <main className="flex flex-col gap-10 bg-background justify-center items-center">
                <HeroLogin />
                <LastProjects />
                <div>
                    <MonthCourses />
                    <MainProjects />
                </div>
            </main> */}

            <Modal
                open={open}
                onClose={() => setOpen(false)}
            >
                <LoginModal onLogin={handleLogoff} />
            </Modal>
            <Footer />
        </>
    )

}