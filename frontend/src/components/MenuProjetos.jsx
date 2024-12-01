import { Link, useLocation } from "react-router-dom";

export default function MenuProjetos() {
    const location = useLocation();
    const projectsLink = '/projects';
    const profileLink = '/profile';

    const isActive = (path) => {
        console.log(`Checking if ${location.pathname} matches ${path}`);
        return location.pathname === path
            ? 'bg-black/35 border-t-[0.2rem] border-l-[0.2rem] px-3 border-b-[0.2rem] border-r-[0.2rem] border-t-black/80 border-l-black/80 border-b-verde_botao border-r-verde_botao'
            : '';
    };

    return (
        <section className="p-3 bg-[#2C2C2C] border-b-2 border-[#298C00] text-[#B3B3B3]">
            <nav className="flex">
                <Link to={profileLink} className={`px-5 flex flex-row gap-4 border-none bg-[#1E1E1E] ml-1 pt-1.5 ${isActive('/profile')}`}>
                    <img src="./vitor.png" className="lg:w-[1.5vw] lg:h-[1.5vw] w-[4vw] h-[4vw] lg:mt-1 mt-2"></img>  Perfil
                </Link>
                <img src="linha.png" className="lg:ml-[2vw] ml-[4vw] pl-0"></img>
                <Link to={projectsLink} className={`px-5 lg:ml-[2vw] ml-[4vw] flex flex-row gap-4 pt-1.5 bg-[#2C2C2C] ${isActive('/projects')}`}>
                    <img src="book.svg" className="ml-[0vw] lg:w-[1.5vw] lg:h-[1.5vw] w-[6vw] h-[5vw] mt-0.5 "></img>    Projetos
                </Link>
            </nav>
        </section>
    );
}
