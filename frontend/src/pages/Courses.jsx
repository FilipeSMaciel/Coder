import { useState } from "react";
import Menu from "../components/Menu";
import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import LoginModal from "../components/LoginModal";
import Footer from "../components/Footer";
import Ops from "../components/Ops";

export default function Courses() {
  const [open, setOpen] = useState(false);

  const handleLogoff = (username) => {
    localStorage.setItem("username", username);
    setOpen(false);
  };

  return (
    <>
    
    <Menu setOpen={setOpen} />
    <div className="bg-[#B3B3B3] w-full h-[116vw] lg:h-[50vw]">

        
    <Ops />

    </div>
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