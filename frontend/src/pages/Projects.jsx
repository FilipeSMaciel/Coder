import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import LoginModal from "../components/LoginModal";
import { useState } from "react";
import MenuProjetos from "../components/MenuProjetos";
// import PerfilIconeEditarTwo from "../components/PerfilIconeEditarTwo";
import PesquisaProjects from "../components/PesquisaProjects";
import CardsTwo from "../components/CardsTwo";
import ProjectModal from "../components/ProjectModal";
import PerfilIconeEditar from "../components/PerfilIconeEditar";

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [openProject, setOpenProject] = useState(false);

  const handleAddProject = (project) => {
    console.log('Adding project:', project);

    
  };

  const handleLogoff = (username) => {
    localStorage.setItem("username", username);
    setOpen(false);
  };

  return (
    <>
      <div className="bg-background">
        <Menu setOpen={setOpen} />
        <MenuProjetos />
        <div className="ml-[45vw] mt-12 hidden lg:block mb-8">
          <PesquisaProjects setOpenProject={setOpenProject} />
        </div>
        <div className="flex flex-col lg:flex-row 2xl:ml-[3.55vw] 2xl:mt-[-2.56vw] lg:gap-[20vw] ml-12 -mt-[3.5vw]">
          <div className="hidden lg:block p-1">
            <PerfilIconeEditar />
          </div>
          <div className="-ml-[2vw] mt-12 lg:hidden">
            <PesquisaProjects setOpenProject={setOpenProject} />
          </div>
          <div className="flex flex-col gap-10 mb-10 2xl:ml-[-0.8vw]">
            <img src="linhagrande.png" className="mr-10 lg:mr-0 lg:mt-12"></img>
            <CardsTwo />
            <img src="linhagrande.png" className="mr-10 lg:mr-0"></img>
            <CardsTwo />
            <img src="linhagrande.png" className="mr-10 lg:mr-0"></img>
            <CardsTwo />
          </div>
        </div>

        {/* Modal de Login */}
        <Modal open={open} onClose={() => setOpen(false)} center>
          <LoginModal onLogin={handleLogoff} />
        </Modal>

        {/* Modal de Novo Projeto */}
        <Modal open={openProject} onClose={() => setOpenProject(false)} center classNames={{
          overlay: 'customOverlay',
          modal: 'customModal',
        }}>
          <ProjectModal open={openProject} setOpen={setOpenProject} onAddProject={handleAddProject} />
        </Modal>
      </div>
      <Footer />
    </>
  );
}