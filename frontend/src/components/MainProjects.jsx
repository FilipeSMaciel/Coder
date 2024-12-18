import { useState } from 'react';
import PropTypes from 'prop-types';

export default function MainProjects({ projects }) {
    const [hoveredProjectId, setHoveredProjectId] = useState(null);

    const titulo = "text-verde_principal font-jetbrains text-center sm:p-6 text-[1.5rem] sm:text-[2.3vw] font-light";
    const projectItem = "w-[18rem] sm:w-[30vw] text-wrap capitalize p-2 text-verde_principal border-[0.2rem] border-background font-jetbrains text-center text-[1rem] sm:text-[1.2vw] font-extralight hover:border-texto_header hover:bg-neutral-600/20 hover:scale-x-105";

    function limitarCarac(string, maxCaracteres) {
        return string.length > maxCaracteres ? string.substring(0, maxCaracteres) + "..." : string;
    }

    return (
        <div className="pb-6 sm:pb-0 mt-12 lg:mt-0">
            <section className="w-[90vw] sm:w-[34vw] h-[30rem] sm:h-full flex flex-col justify-start items-center gap-3 bg-bg_botao-login p-8 drop-shadow-3xl ">
                <h2 className={titulo}>&#123; Projetos em destaque &#125;</h2>

                {projects.map(project => (
                    <div
                        key={project.id}
                        className={projectItem}
                        onMouseEnter={() => setHoveredProjectId(project.id)}
                        onMouseLeave={() => setHoveredProjectId(null)}
                    >
                        <p>
                            {hoveredProjectId === project.id ? project.name : limitarCarac(project.name, 16)}
                        </p>
                    </div>
                ))}
            </section>
        </div>
    );
}

MainProjects.propTypes = {
    projects: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
};