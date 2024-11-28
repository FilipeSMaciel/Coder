import Modal from "react-responsive-modal";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import LoginModal from "../components/LoginModal";
import { useState } from "react";

export default function Projects() {
  const [open, setOpen] = useState(false);

  const handleLogoff = (username) => {
    localStorage.setItem("username", username);
    setOpen(false);
  };

  return (
    <>
      <Menu setOpen={setOpen} />
      <h1>Projetos</h1>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <LoginModal onLogin={handleLogoff} />
      </Modal>
      <Footer />
    </>
  );
}