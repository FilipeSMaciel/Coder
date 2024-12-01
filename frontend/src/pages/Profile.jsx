import { useState } from "react";
import Menu from "../components/Menu";
import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import LoginModal from "../components/LoginModal";
import Footer from "../components/Footer";
import PerfilIconeEditar from "../components/PerfilIconeEditar";
import Cards from "../components/Cards";
import Information from "../components/Information";
import MenuProjetos from "../components/MenuProjetos";

export default function Profile() {
const [open, setOpen] = useState(false);

// Retrieve user ID from localStorage
const userId = localStorage.getItem("userId");

const handleLogoff = () => {
  localStorage.removeItem("userId");
  setOpen(false);
};

return (
  <div className="bg-background">
    <Menu setOpen={setOpen} />
    <MenuProjetos />
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="mt-12">
        {/* Pass userId as a prop to PerfilIconeEditar */}
        <PerfilIconeEditar userId={userId} />
      </div>
      <div className="lg:ml-[15vw] lg:mt-[5vh] sm:mt-[18vh] p-12 flex flex-col gap-4">
        <div className="text-4xl relative font-jetbrains text-verde_principal">
          <h1 className="mb-2"> Último acesso </h1>
          <div className="bg-background border-2 border-[#61B41394] opacity-20">
            <hr></hr>
          </div>
        </div>
        <div>
          <Cards />
        </div>
        <div>
          <div>
            <h1 className="text-4xl relative font-jetbrains text-verde_principal mt-12 mb-2">Informações</h1>
            <div className="bg-background border-2 border-[#61B41394] opacity-20">
              <hr />
            </div>
            <div className="mt-4">
              <Information />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal open={open} onClose={() => setOpen(false)} center>
      <LoginModal onLogin={handleLogoff} />
    </Modal>
    <Footer />
  </div>
);
}