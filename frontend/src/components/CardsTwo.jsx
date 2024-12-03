import PropTypes from 'prop-types';

export default function CardsTwo({ project }) {
    const iconProject = "ml-[1.5vw] w-[14vw] object-fit mr-[7.5vw] hidden sm:block";

    return (
        <div className="flex flex-row justify-center items-center h-[18.5vh] w-[77.5vw] lg:h-[37.5vh] lg:w-[57.5vw] bg-[#2C2C2C] border-[0.1vw] border-[#298C00] drop-shadow-3xl">
            <section className="flex flex-row p-4">
                <img src={project.image} alt={`Image of ${project.name}`} className={iconProject} />
                <div className="flex flex-col gap-2 text-center justify-center items-center text-[#B3B3B3] font-inter my-auto">
                    <div className='font-jetbrains sm:text-[1.8vw] text-[3.5vw]'>
                        <h1>{project.name}</h1>
                    </div>
                    <div className="text-[1.8vw] sm:text-[1.2vw] w-[30vw]">
                        <p>{project.description}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center items-center mt-[3vw]">
                        <h2 className="text-nowrap text-[#298C00] text-[2vw] lg:text-[0.8vw]">
                            Requisitos: {project.requisites}
                        </h2>
                        <div className="flex gap-2 justify-center items-center mt-4 ml-4 text-[#298C00] ">
                            <img src="pessoas.png" alt="People icon" className='size-[2.5vw] sm:size-[1.5vw]' />
                            <p className="text-[3vw] sm:text-[1.8vw]">{project.users ? project.users.length : 0}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

CardsTwo.propTypes = {
    project: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        requisites: PropTypes.string.isRequired,
        users: PropTypes.arrayOf(PropTypes.string), // Add users prop type
    }).isRequired,
};