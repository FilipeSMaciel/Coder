import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
// import HeroLogin from "../components/HeroLogin";
// import LastProjects from "../components/LastProjects";
// import MainProjects from "../components/MainProjects";
// import MonthCourses from "../components/MonthCourses";
import LoginModal from "../components/LoginModal";
import Footer from "../components/Footer";
import { useState } from "react";
import Menu from "../components/Menu";
// import BarraPesquisa from "../components/BarraPesquisa";

export default function Freelances() {
    const [open, setOpen] = useState(false);

    const handleLogoff = (username) => {
        localStorage.setItem("username", username);
        setOpen(false);
    };

    return (
        <>
            <Menu setOpen={setOpen} />
            {/* <main className="flex flex-col gap-10 bg-background justify-center items-center">
                <HeroLogin />
                <LastProjects />
                <div>
                    <MonthCourses />
                    <MainProjects />
                </div>
            </main> 
            PEDRO<<<
            */}

            <main>
                {/*<BarraPesquisa />
                ERIC<<<
                */}
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