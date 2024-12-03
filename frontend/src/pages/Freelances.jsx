import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import LoginModal from "../components/LoginModal";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import { getData } from "../utils/getData";
import { VerCandidatosModal } from "../components/VerCandidatosModal";


export default function Freelances() {
    const [open, setOpen] = useState(false);
    const [freelances, setFreelances] = useState([]);
    const [filteredFreelances, setFilteredFreelances] = useState([]);
    const [candidatesModalOpen, setCandidatesModalOpen] = useState(false);
    const [selectedProjectCandidates, setSelectedProjectCandidates] = useState([]);

    const { register, watch } = useForm();
    const searchQuery = watch("search", "");

    useEffect(() => {
        fetchFreelances();
    }, []);

    const fetchFreelances = async () => {
        try {
            const data = await getData('projects');
            if (data) {
                setFreelances(data);
                setFilteredFreelances(data);
            }
        } catch (error) {
            console.error('Error fetching freelances:', error);
        }
    };

    useEffect(() => {
        const filtered = freelances.filter(freelance =>
            freelance.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            freelance.requisites.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredFreelances(filtered);
    }, [searchQuery, freelances]);

    const handleLogoff = (username) => {
        localStorage.setItem("username", username);
        setOpen(false);
    };

    const handleApplyToProject = async (projectId) => {
        try {
            const username = localStorage.getItem("username");

            // Fetch the current project data to get the existing users
            const response = await fetch(`http://localhost:3000/projects/${projectId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch project data');
            }
            const projectData = await response.json();

            // Check if the user is already a candidate
            if (!projectData.users.includes(username)) {
                const updatedUsers = [...projectData.users, username];

                // Update the project with the new list of users
                const updateResponse = await fetch(`http://localhost:3000/projects/${projectId}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ users: updatedUsers }),
                });

                if (!updateResponse.ok) {
                    throw new Error('Failed to update project with new candidate');
                }

                console.log(`Applied to project: ${projectData.name}`);
            } else {
                console.log(`User ${username} is already a candidate for project: ${projectData.name}`);
            }
        } catch (error) {
            console.error('Error applying to project:', error);
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
            setCandidatesModalOpen(true);
        } catch (error) {
            console.error('Error fetching candidates:', error);
        }
    };

    {/* Consts de Estilização */ }

    const iconProject = "size-[22vw] sm:size-[12vw] mr-[-6vw] px-[0.09rem]";
    const projectDesc = "flex flex-col gap-2 text-center justify-center items-center";
    const filtrosBotton = "bg-[#1E1E1E] uppercase border-[2px] px-[1vw] border-black drop-shadow-x2l text-[4vw] text-verde_principal font-jetbrains tracking-widest text-nowrap sm:text-[1.3vw]";
    const candidatarButton = "w-full h-full flex items-center justify-center";
    const verCandidatosButton = "hidden sm:block px-[1vw]  text-[3vw] text-verde_principal font-jetbrains tracking-widest text-nowrap underline sm:text-[1.1vw]";

    return (
        <div className="bg-background">
            <Menu setOpen={setOpen} />

            <main className="font-jetbrains">
                <section className="h-[25vh] sm:h-[45vh] bg-bg_botao-login flex flex-col items-center justify-center gap-[1vh] sm:gap-[2vh] border-b-verde_principal  border-r-bg_botao-login border-l-bg_botao-login border-[0.1vh]">
                    <h1 className="text-[6vw] sm:text-[3vw] tracking-widest text-verde_principal">Procure um freelance {'>>'}</h1>
                    <h2 className="text-verde_botao text-[4vw] sm:text-[1.6vw] py-2">Pesquise o projeto perfeito para você</h2>

                    <div className="flex items-center gap-3 sm:gap-[6v] ml-[12.2vw]">
                        <div className="flex flex-col">
                            <label htmlFor="search"></label>
                            <input
                                {...register("search")}
                                className="rounded-[3px] sm:w-[40vw] sm:py-[1vh]"
                                type="text"
                                placeholder="Buscar por nome ou requisitos"
                            />
                        </div>

                        <div className="bg">
                            <button className="hidden sm:flex sm:py-[0.8vh] bg-[#1E1E1E] uppercase border-[2px] px-[1vw] rounded-[0.5rem] border-black drop-shadow-2xl text-[4vw] text-verde_principal font-jetbrains tracking-widest text-nowrap sm:text-[1.3vw]">Pesquisar</button>
                        </div>

                        <button className="bg-background p-1 rounded-full border border-black sm:hidden">
                            <img src="./Search.svg" alt="" />
                        </button>
                    </div>

                    <div className="flex gap-[10vw] mt-[1.5vh]">
                        <button className={filtrosBotton}>Filtros →</button>
                        <button className={filtrosBotton}>Order By ↓</button>
                    </div>
                </section>

                <section className="flex flex-col gap-[5vh] pt-[5vh]">
                    <h2 className="text-[5vw] sm:text-[2vw] ml-[4vw] text-verde_principal sm:w-[90vw] border-b-verde_principal border-[0.1rem] border-t-background border-r-background border-l-background ">Mais vistos recentemente {'>>'}</h2>
                    <h3 className="hidden sm:flex sm:text-[1.5vw] ml-[4vw] text-verde_botao">Com base nos projetos de mais destaque dessa semana</h3>

                    {filteredFreelances.map(freelance => (
                        <div key={freelance.id} className="bg-bg_botao-login sm:w-[85vw] h-full sm:h-[40vh] sm:m-auto flex justify-around items-center font-inter font-light border-[0.2vh] border[0.5vh] border-verde_botao py-6 drop-shadow-3xl">
                            <img className={iconProject} src={freelance.image} alt={`${freelance.name} Logo`} />
                            <div className="flex flex-col items-center justify-center gap-5">
                                <div className={projectDesc}>
                                    <h4 className="text-[3vw] sm:text-[1.5vw] text-texto_header">{freelance.name}</h4>
                                    <p className="text-[2.5vw] sm:text-[1.2vw] m-auto w-[40vw] text-center text-texto_header">{freelance.description}</p>
                                    <p className="hidden sm:flex text-[2vw] sm:text-[1vw] m-auto mt-5 text-verde_botao">Requisitos: {freelance.requisites}</p>
                                </div>
                                <div className="flex flex-col gap-2 lg:ml-[2vw] text-nowrap ml-[12vw] lg:text-[2vw] lg:mr-0 mr-12 font-jetbrains text-[2.5vw] bg-background lg:w-[24vw] w-[32vw] pl-2.5 lg:pl-6 text-verde_principal border-[0.01vw] border-verde_principal drop-shadow-3xl">
                                    <button className={candidatarButton} onClick={() => handleApplyToProject(freelance.id)}>
                                        Me candidatar
                                    </button>
                                </div>
                                <a className="text-verde_principal underline text-[3vw] sm:hidden" href="#">Saiba Mais...</a>
                                <button className={verCandidatosButton} onClick={() => handleViewCandidates(freelance.id)}>
                                    Ver Candidatos
                                </button>
                            </div>
                            <div className="flex gap-3 mt-[7vh] sm:w-[8vw] sm:flex-wrap justify-end">
                                <button className={candidatarButton} onClick={() => handleApplyToProject(freelance.id)}>
                                    <img className="sm:size-5" src="./Group.svg" alt="Contador de devs icon" />
                                    <p className="text-verde_principal font-extralight ml-2">{freelance.users ? freelance.users.length : 0}</p>
                                </button>
                                <a className="hidden text-verde_principal underline text-[1vw] sm:block" href="#">Saiba Mais...</a>
                            </div>
                        </div>
                    ))}
                </section>

                <section className="flex flex-col gap-[5vh] pt-[5vh]">
                    <h2 className="text-[5vw] sm:text-[2vw] ml-[4vw] text-verde_principal sm:w-[90vw] border-b-verde_principal border-[0.1rem] border-t-background border-r-background border-l-background">Para você {'>>'}</h2>
                    <h3 className="hidden sm:flex sm:text-[1.5vw] ml-[4vw] text-verde_botao">Com base nas suas competências e preferências</h3>

                    {filteredFreelances.map(freelance => (
                        <div key={freelance.id} className="bg-bg_botao-login sm:w-[85vw] h-full sm:h-[40vh] sm:m-auto flex justify-around items-center font-inter font-light border-[0.2vh] border[0.5vh] border-verde_botao py-6 drop-shadow-3xl">
                            <img className={iconProject} src={freelance.image} alt={`${freelance.name} Logo`} />
                            <div className="flex flex-col items-center justify-center gap-5">
                                <div className={projectDesc}>
                                    <h4 className="text-[3vw] sm:text-[1.5vw] text-texto_header">{freelance.name}</h4>
                                    <p className="text-[2.5vw] sm:text-[1.2vw] m-auto w-[40vw] text-center text-texto_header">{freelance.description}</p>
                                    <p className="hidden sm:flex text-[2vw] sm:text-[1vw] m-auto mt-5 text-verde_botao">Requisitos: {freelance.requisites}</p>
                                </div>
                                <div className="flex flex-col gap-2 lg:ml-[2vw] text-nowrap ml-[12vw] lg:text-[2vw] lg:mr-0 mr-12 font-jetbrains text-[2.5vw] bg-background lg:w-[24vw] w-[32vw] pl-2.5 lg:pl-6 text-verde_principal border-[0.01vw] border-verde_principal drop-shadow-3xl">
                                    <button className={candidatarButton} onClick={() => handleApplyToProject(freelance.id)}>
                                        Me candidatar
                                    </button>
                                </div>
                                <a className="text-verde_principal underline text-[3vw] sm:hidden" href="#">Saiba Mais...</a>
                                <button className={verCandidatosButton} onClick={() => handleViewCandidates(freelance.id)}>
                                    Ver Candidatos
                                </button>
                            </div>
                            <div className="flex gap-3 mt-[7vh] sm:w-[8vw] sm:flex-wrap justify-end">
                                <button className={candidatarButton} onClick={() => handleApplyToProject(freelance.id)}>
                                    <img className="sm:size-5" src="./Group.svg" alt="Contador de devs icon" />
                                    <p className="text-verde_principal font-extralight ml-2">{freelance.users ? freelance.users.length : 0}</p>
                                </button>
                                <a className="hidden text-verde_principal underline text-[1vw] sm:block" href="#">Saiba Mais...</a>
                            </div>
                        </div>
                    ))}
                </section>

                <div className="flex items-end mb-[2vh] justify-center h-[10vh] text-verde_principal">
                    <p>Próxima página placeholder</p>
                </div>
            </main>

            <Modal open={open} onClose={() => setOpen(false)} center>
                <LoginModal onLogin={handleLogoff} />
            </Modal>

            <Modal
                open={candidatesModalOpen}
                onClose={() => setCandidatesModalOpen(false)}
                center
                classNames={{
                    overlay: 'customOverlay',
                    modal: 'customModal'
                }}
                className="drop-shadow-3xl"
            >
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

            <Modal
                open={candidatesModalOpen}
                onClose={() => setCandidatesModalOpen(false)}
                center
                classNames={{
                    overlay: 'candidatesOverlay',
                    modal: 'candidatesModal'
                }}
                className="drop-shadow-3xl"
            >

                <VerCandidatosModal
                    candidates={selectedProjectCandidates}
                />

            </Modal>

            <Footer />
        </div>
    );
}