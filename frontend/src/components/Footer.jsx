export default function Footer() {
    return (
        <div className="relative">
            <footer className=" flex lg:flex-row lg:justify-center gap-10 lg:gap-20 lg:items-start items-center flex-col justify-center p-10 pb-8 border-t-[0.3rem] border-verde_principal bg-background ">
                <div className="flex gap-10 items-center font-jetbrains">
                    <a href="">  <img src="./LogoX.png" alt="Logo do X" /> </a>
                    <a href="">  <img src="./LogoInstagram.png" alt="Logo do Instagram" /> </a>
                    <a href="">   <img src="./LogoYouTube.png" alt="Logo do Youtube" /> </a>
                    <a href=""> <img src="./LogoLinkedIn.png" alt="Logo do Linkedin" /> </a>
                </div>

                <div className="flex text-texto_header text-[0.8rem] gap-20 ">
                    <div className="flex flex-col gap-5">
                        <h3 className="font-semibold text-[0.9rem] ">Constitucional</h3>
                        <ul className="flex flex-col gap-1">
                            <a href=""> <li>Quem somos</li> </a>
                            <a href=""> <li>Trabalhe conosco</li> </a>
                            <a href=""> <li>Direitos legais</li> </a>
                            <a href=""> <li>Pesquisas</li> </a>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h3 className="font-semibold text-[0.9rem]">Explorar</h3>
                        <ul className="flex flex-col gap-1">
                            <a href="">  <li>Redes sociais</li> </a>
                            <a href="">   <li>Empresas</li> </a>
                            <a href="">   <li>Associados</li> </a>
                            <a href="">   <li>Projetos</li> </a>
                            <a href="">   <li>Colaboração direta</li> </a>
                        </ul>
                    </div>
                    <div className="hidden lg:flex flex-col gap-5 ">
                        <h3 className="font-semibold text-[0.9rem]">Recursos</h3>
                        <ul className="flex flex-col gap-1">
                            <a href="">   <li>Blog</li> </a>
                            <a href="">   <li>Melhores Práticas</li> </a>
                            <a href="">   <li>Cores</li> </a>
                            <a href="">   <li>Paleta de Cores</li> </a>
                            <a href="">   <li>Suporte</li> </a>
                            <a href="">   <li>Desenvolvedores</li> </a>
                            <a href="">   <li>Biblioteca de recursos</li> </a>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>

    )
}
