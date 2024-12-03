import PropTypes from 'prop-types';

export default function LastProjects({ projects }) {
    const nameDiv = "hidden sm:flex items-center pl-3 sm:w-[13vw] sm:h-[14vh] bg-fundo_lastProjects text-verde_principal font-jetbrains text-left text-[2rem] sm:text-[2vw] font-extralight";
    const iconsDiv = "border-[0.1rem] border-verde_principal w-[12vw] h-[6vh] p-2 sm:w-[8vw] sm:h-[16vh]";
    const lastProjectDiv = "flex items-center";

    
    const lastThreeProjects = projects.slice(-3);

    return (
        <section className="bg-bg_botao-login flex flex-col items-center justify-center gap-8 sm:gap-[5rem] py-[2rem] drop-shadow-3xl w-[90vw] sm:w-[76vw] sm:h-[28rem] border-t-[0.1rem] border-verde_principal -mb-20 lg:-mb-0">
            <h2 className="w-[20rem] sm:w-[60rem] text-verde_principal font-jetbrains text-center text-[1.5rem] sm:text-[3vw] font-extralight">Projetos mais recentes &gt;&gt;&gt;&gt;</h2>

            <div className="flex justify-evenly gap-10">
                {lastThreeProjects.map(project => (
                    <div key={project.id} className={lastProjectDiv}>
                        <a href="#">
                            <img className={iconsDiv} src={project.image} alt={`${project.name} Logo`} />
                        </a>
                        <div className={nameDiv}>
                            <a href="#">
                                <p>{project.name}</p>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

LastProjects.propTypes = {
    projects: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
};