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
        <section className="p-3">
            <nav className="flex">
                <Link to={profileLink} className={`px-5 ${isActive('/profile')}`}>
                    Perfil
                </Link>
                <Link to={projectsLink} className={`px-5 ${isActive('/projects')}`}>
                    Projetos
                </Link>
            </nav>
        </section>
    );
}
