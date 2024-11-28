import { useState } from "react";
import Menu from "../components/Menu";
import Modal from "react-responsive-modal";
import LoginModal from "../components/LoginModal";
import Footer from "../components/Footer";

export default function Profile() {
  const [open, setOpen] = useState(false);

  const handleLogoff = (username) => {
    localStorage.setItem("username", username);
    setOpen(false);
  };

  return (
    <>
    <Menu setOpen={setOpen} />
    <h1>Prerfil</h1>
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