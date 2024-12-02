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
import { getData } from "../utils/getData";
// import { fetchData } from '../utils/dataUtils'; // Adjust the path as necessary

export default function Projects() {
const [open, setOpen] = useState(false);
const [openProject, setOpenProject] = useState(false);
const [myProjects, setMyProjects] = useState([]);

useEffect(() => {
  // Fetch myProjects using the imported fetch function
  const fetchMyProjects = async () => {
    const data = await getData('myProjects');
    if (data) {
      setMyProjects(data);
    }
  };

  fetchMyProjects();
}, []); // Empty dependency array means this effect runs once on mount

const handleAddProject = async (project) => {
  try {
    // Post to myProjects
    const responseMyProjects = await fetch('http://localhost:3000/myProjects', {
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
    const responseProjects = await fetch('http://localhost:3000/projects', {
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
};

const handleLogoff = (username) => {
  localStorage.setItem("username", username);
  setOpen(false);
};

const handleNewButtonClick = () => {
  // Define what happens when the new button is clicked
  console.log('New button clicked!');
  // For example, you might open a modal or perform another action
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

      {/* New Button */}
      <button onClick={handleNewButtonClick} className="new-button-class">
        New Button
      </button>

      {/* Modal de Login */}
      <Modal open={open} onClose={() => setOpen(false)} center>
        <LoginModal onLogin={handleLogoff} />
      </Modal>

      {/* Modal de Novo Projeto */}
      <Modal open={openProject} onClose={() => setOpenProject(false)} center>
        <ProjectModal open={openProject} setOpen={setOpenProject} onAddProject={handleAddProject} />
      </Modal>
    </div>
    <Footer />
  </div>
);
}