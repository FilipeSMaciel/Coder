import { useState } from "react";
import Menu from "../components/Menu";
import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import LoginModal from "../components/LoginModal";
import Footer from "../components/Footer";
import MenuProjetos from "../components/MenuProjetos";
import PerfilIconeEditar from "../components/PerfilIconeEditar";
import Cards from "../components/Cards";


export default function Profile() {
  const [open, setOpen] = useState(false);

  const handleLogoff = (username) => {
    localStorage.setItem("username", username);
    setOpen(false);
  };

  return (
    <>
    <div className="bg-background">

      <Menu setOpen={setOpen} />
      <div className="flex flex-row gap-6">
        <div className="mt-12">

      <PerfilIconeEditar />

        </div>
      <div className="ml-[15vw] mt-[12vh] p-12 flex flex-col gap-4">
      <Cards />
      </div>

      </div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        center
        >
        <LoginModal onLogin={handleLogoff} />
      </Modal>
        </div>
      <Footer />
    </>
  );
}