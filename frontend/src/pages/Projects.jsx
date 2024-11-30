import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import LoginModal from "../components/LoginModal";
import { useState } from "react";
import MenuProjetos from "../components/MenuProjetos";
import ProfileAside from "../components/ProfileAside";

export default function Projects() {
  const [open, setOpen] = useState(false);

  const handleLogoff = (username) => {
    localStorage.setItem("username", username);
    setOpen(false);
  };

  return (
    <>
      <Menu setOpen={setOpen} />
      <MenuProjetos />

      <ProfileAside />

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