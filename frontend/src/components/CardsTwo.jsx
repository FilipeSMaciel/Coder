import PropTypes from 'prop-types';

export default function CardsTwo({ project }) {
    return (
        <div className="lg:w-[50vw] lg:h-[20vh] h-[12vh] w-[77.5vw] bg-[#2C2C2C] border-[0.1vw] border-[#298C00] drop-shadow-3xl">
            <section className="flex flex-row p-4 gap-[8vw] lg:pl-10 lg:p-3">
                <div className="lg:w-[12vw] lg:h-[12vw] mt-[1vw] ml-[2vw] w-[100px] h-[100px] object-cover hidden lg:block">
                    <img src={project.image} alt={`Image of ${project.name}`} />
                </div>
                <div className="flex flex-col items-center ml-[24vw] lg:ml-2 text-[#B3B3B3] font-inter text-[2vw] lg:text-[1vw] mt-4">
                    <div>
                        <h1>{project.name}</h1>
                    </div>
                    <div className="mb-4">
                        <p>{project.description}</p>
                    </div>
                    <div className="flex flex-row gap-0 mt-[2vw]">
                        <h2 className="text-nowrap text-[#298C00] text-[2vw] lg:text-[0.8vw]">
                            Requisitos: {project.requisites}
                        </h2>
                        <div className="lg:w-[2vw] ml-4 w-[3vw] text-[#298C00] ">
                            <img src="pessoas.png" alt="People icon" />
                        </div>
                        {/* Replace 35 with dynamic candidate count if available */}
                        <p>{project.users ? project.users.length : 0}</p>
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