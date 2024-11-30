import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import Footer from "../components/Footer";
import HeroLogin from "../components/HeroLogin";
import LastProjects from "../components/LastProjects";
import MainProjects from "../components/MainProjects";
import MonthCourses from "../components/MonthCourses";
import LoginModal from "../components/LoginModal";
import { useState } from "react";
import Menu from "../components/Menu";

export default function HomeLogin() {
  const [open, setOpen] = useState(false);

  const handleLogoff = (username) => {
    localStorage.setItem("username", username);
    setOpen(false);
  };

  return (
    <>
      <Menu setOpen={setOpen} />
      <main className="flex flex-col gap-10 bg-background justify-center items-center overflow-hidden sm:pb-[6vh]">
        <HeroLogin />
        <LastProjects />
        <div className="sm:w-[76vw] h-[63rem] sm:h-[82vh] flex flex-col sm:flex-row items-center justify-between ">
          <MonthCourses />
          <MainProjects />
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
  );
}