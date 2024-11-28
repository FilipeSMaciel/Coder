import Modal from "react-responsive-modal";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroLogin from "../components/HeroLogin";
import LastProjects from "../components/LastProjects";
import MainProjects from "../components/MainProjects";
import MonthCourses from "../components/MonthCourses";
import LoginModal from "../components/LoginModal";
import { useState } from "react";

export default function HomeLogin() {
  const [open, setOpen] = useState(false);

  const handleLogoff = (username) => {
    localStorage.setItem("username", username);
    setOpen(false);
  };

  return (
    <div>
      <Header setOpen={setOpen} />
      <main className="flex flex-col gap-10 bg-background justify-center items-center pb-[2.5rem]">
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
      >
        <LoginModal onLogin={handleLogoff} />
      </Modal>
      <Footer />
    </div>
  );
}