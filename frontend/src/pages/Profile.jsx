import { useState } from "react";
import Menu from "../components/Menu";
import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import LoginModal from "../components/LoginModal";
import Footer from "../components/Footer";
import MenuProjetos from "../components/MenuProjetos";

export default function Profile() {
  const [open, setOpen] = useState(false);

  const handleLogoff = (username) => {
    localStorage.setItem("username", username);
    setOpen(false);
  };

  return (
    <>
    <Menu setOpen={setOpen} />
      <MenuProjetos />
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