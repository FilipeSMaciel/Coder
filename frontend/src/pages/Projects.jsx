import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import LoginModal from "../components/LoginModal";
import { useState } from "react";
import MenuProjetos from "../components/MenuProjetos";
import PerfilIconeEditar from "../components/PerfilIconeEditar";
import PesquisaProjects from "../components/PesquisaProjects";
import CardsTwo from "../components/CardsTwo";

export default function Projects() {
  const [open, setOpen] = useState(false);

  const handleLogoff = (username) => {
    localStorage.setItem("username", username);
    setOpen(false);
  };

  return (
    <>
    <div className="bg-background">
      <Menu setOpen={setOpen} />
      <MenuProjetos />
      <div className="ml-[43vw] mt-12 hidden lg:block mb-8">

      <PesquisaProjects />
      </div>
<div className="flex flex-col lg:flex-row gap-[18.5vw] ml-12">
  <div className="hidden lg:block">

      <PerfilIconeEditar/>
  </div>
      {/* [<ProfileAside />] */}
      <div className="-ml-[2vw] mt-12  lg:hidden">

      <PesquisaProjects />
      </div>
<div className="flex flex-col gap-10 mb-10">
<img src="linhagrande.png" className="mr-10 lg:mr-0"></img >
      <CardsTwo/>
      <img src="linhagrande.png" className="mr-10 lg:mr-0"></img>
      <CardsTwo/>
      <img src="linhagrande.png" className="mr-10 lg:mr-0"></img>
      <CardsTwo/>
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