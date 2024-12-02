import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import LoginModal from "../components/LoginModal";
import { useState, useEffect } from "react";
import MenuProjetos from "../components/MenuProjetos";
import PesquisaProjects from "../components/PesquisaProjects";
import CardsTwo from "../components/CardsTwo";
import ProjectModal from "../components/ProjectModal";
import PerfilIconeEditar from "../components/PerfilIconeEditar";

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [openProject, setOpenProject] = useState(false);
  const [myProjects, setMyProjects] = useState([]);

  useEffect(() => {
    // Fetch myProjects from json-server
    const fetchMyProjects = async () => {
      try {
        const response = await fetch('http://localhost:3005/myProjects');
        if (!response.ok) {
          throw new Error('Failed to fetch myProjects');
        }
        const data = await response.json();
        setMyProjects(data);
      } catch (error) {
        console.error('Error fetching myProjects:', error);
      }
    };

<<<<<<< HEAD

=======
    fetchMyProjects();
  }, []); // Empty dependency array means this effect runs once on mount

  const handleAddProject = async (project) => {
    try {
      // Post to myProjects
      const responseMyProjects = await fetch('http://localhost:3005/myProjects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(project),
      });

      if (!responseMyProjects.ok) {
        throw new Error('Failed to add project to myProjects');
      }

      const newProjectMyProjects = await responseMyProjects.json();
      console.log('Added project to myProjects:', newProjectMyProjects);

      // Update local state with the new project
      setMyProjects((prevMyProjects) => [...prevMyProjects, newProjectMyProjects]);

      // Post to projects
      const responseProjects = await fetch('http://localhost:3001/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(project),
      });

      if (!responseProjects.ok) {
        throw new Error('Failed to add project to projects');
      }

      const newProjectProjects = await responseProjects.json();
      console.log('Added project to projects:', newProjectProjects);

    } catch (error) {
      console.error('Error adding project:', error);
    }
>>>>>>> 49db1fdcfecd408e89b6cf50075f3cfb7a6b9cb4
  };

  const handleLogoff = (username) => {
    localStorage.setItem("username", username);
    setOpen(false);
  };

  return (
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
          {myProjects.map((project) => (
            <CardsTwo key={project.id} project={project} />
          ))}
          <img src="linhagrande.png" className="mr-10 lg:mr-0"></img>
        </div>
<<<<<<< HEAD

        {/* Modal de Login */}
        <Modal open={open} onClose={() => setOpen(false)} center  >
          <LoginModal onLogin={handleLogoff} />
        </Modal>

        {/* Modal de Novo Projeto */}
        <Modal open={openProject} onClose={() => setOpenProject(false)} center classNames={{
          overlay: 'customOverlay',
          modal: 'customModal',
        }}>
          <ProjectModal open={openProject} setOpen={setOpenProject} onAddProject={handleAddProject} />
        </Modal>
=======
>>>>>>> 49db1fdcfecd408e89b6cf50075f3cfb7a6b9cb4
      </div>

      {/* Modal de Login */}
      <Modal open={open} onClose={() => setOpen(false)} center>
        <LoginModal onLogin={handleLogoff} />
      </Modal>

      {/* Modal de Novo Projeto */}
      <Modal open={openProject} onClose={() => setOpenProject(false)} center>
        <ProjectModal open={openProject} setOpen={setOpenProject} onAddProject={handleAddProject} />
      </Modal>
      <Footer />
    </div>
  );
}