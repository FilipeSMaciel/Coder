import { useState, useEffect } from "react";
import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import LoginModal from "../components/LoginModal";
import MenuProjetos from "../components/MenuProjetos";
import PesquisaProjects from "../components/PesquisaProjects";
import CardsTwo from "../components/CardsTwo";
import ProjectModal from "../components/ProjectModal";
import PerfilIconeEditar from "../components/PerfilIconeEditar";
import { getData } from "../utils/getData";

export default function Projects() {
const [loginModalOpen, setLoginModalOpen] = useState(false);
const [projectModalOpen, setProjectModalOpen] = useState(false);
const [candidatesModalOpen, setCandidatesModalOpen] = useState(false);
const [myProjects, setMyProjects] = useState([]);
const [selectedProjectCandidates, setSelectedProjectCandidates] = useState([]);

useEffect(() => {
    fetchUserProjects();
}, []);

const fetchUserProjects = async () => {
    try {
        const data = await getData('projects');
        if (data) {
            const currentUser = localStorage.getItem("username");
            const userProjects = data.filter(project => project.users && project.users.includes(currentUser));
            setMyProjects(userProjects);
        }
    } catch (error) {
        console.error('Error fetching projects:', error);
    }
};

const handleViewCandidates = async (projectId) => {
    try {
        const response = await fetch(`http://localhost:3000/projects/${projectId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch project data');
        }
        const projectData = await response.json();
        setSelectedProjectCandidates(projectData.users || []);
        setCandidatesModalOpen(true); // Open modal to view candidates
    } catch (error) {
        console.error('Error fetching candidates:', error);
    }
};

const handleAddProject = async (project) => {
    try {
        const username = localStorage.getItem("username");
        project.users = [username];

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
        setMyProjects((prevMyProjects) => [...prevMyProjects, newProjectMyProjects]);

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
    setLoginModalOpen(false);
};

return (
    <div className="bg-background">
        <Menu setOpen={setLoginModalOpen} />
        <MenuProjetos />
        <div className="ml-[45vw] mt-12 hidden lg:block mb-8">
            <PesquisaProjects setOpenProject={setProjectModalOpen} />
        </div>
        <div className="flex flex-col lg:flex-row 2xl:ml-[3.55vw] 2xl:mt-[-2.56vw] lg:gap-[20vw] ml-12 -mt-[3.5vw]">
            <div className="hidden lg:block p-1">
                <PerfilIconeEditar />
            </div>
            <div className="-ml-[2vw] mt-12 lg:hidden">
                <PesquisaProjects setOpenProject={setProjectModalOpen} />
            </div>
            <div className="flex flex-col gap-10 mb-10 2xl:ml-[-0.8vw]">
                <img src="linhagrande.png" className="mr-10 lg:mr-0 lg:mt-12"></img>
                {myProjects.map((project) => (
                    <div key={project.id}>
                        <CardsTwo project={project} />
                        <button onClick={() => handleViewCandidates(project.id)} className="ver-candidatos-button">
                            Ver Candidatos
                        </button>
                    </div>
                ))}
                <img src="linhagrande.png" className="mr-10 lg:mr-0"></img>
            </div>

            {/* New Button */}
            <button onClick={() => setProjectModalOpen(true)} className="new-button-class">
                New Button
            </button>

            {/* Modal de Login */}
            <Modal open={loginModalOpen} onClose={() => setLoginModalOpen(false)} center>
                <LoginModal onLogin={handleLogoff} />
            </Modal>

            {/* Modal de Novo Projeto */}
            <Modal open={projectModalOpen} onClose={() => setProjectModalOpen(false)} center>
                <ProjectModal open={projectModalOpen} setOpen={setProjectModalOpen} onAddProject={handleAddProject} />
            </Modal>

            {/* Candidates Modal */}
            <Modal open={candidatesModalOpen} onClose={() => setCandidatesModalOpen(false)} center>
                <h2 className="text-2xl font-bold mb-4">Candidatos</h2>
                <ul className="list-disc pl-5">
                    {selectedProjectCandidates.length > 0 ? (
                        selectedProjectCandidates.map((candidate, index) => (
                            <li key={index} className="mb-2">{candidate}</li>
                        ))
                    ) : (
                        <li>Nenhum candidato ainda.</li>
                    )}
                </ul>
            </Modal>
        </div>
        <Footer />
    </div>
);
}