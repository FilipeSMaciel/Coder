export default function Footer() {
    return (
        <footer className=" flex lg:flex-row lg:justify-center gap-10 lg:gap-20 lg:items-start items-center flex-col justify-center p-10 pb-8 border-t-[0.3rem] border-verde_principal bg-background ">
            <div className="flex gap-10 items-center font-jetbrains">
                <img src="./LogoX.png" alt="Logo do X" />
                <img src="./LogoInstagram.png" alt="Logo do Instagram" />
                <img src="./LogoYouTube.png" alt="Logo do Youtube" />
                <img src="./LogoLinkedIn.png" alt="Logo do Linkedin" />
            </div>

            <div className="flex text-texto_header text-[0.8rem] gap-20 ">
                <div className="flex flex-col gap-5">
                    <h3 className="font-semibold text-[0.9rem] ">Constitucional</h3>
                    <ul className="flex flex-col gap-1">
                        <li>Quem somos</li>
                        <li>Trabalhe conosco</li>
                        <li>Direitos legais</li>
                        <li>Pesquisas</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-5">
                    <h3 className="font-semibold text-[0.9rem]">Explorar</h3>
                    <ul className="flex flex-col gap-1">
                        <li>Redes sociais</li>
                        <li>Empresas</li>
                        <li>Associados</li>
                        <li>Projetos</li>
                        <li>Colaboração direta</li>
                    </ul>
                </div>
                <div className="hidden lg:flex flex-col gap-5 ">
                    <h3 className="font-semibold text-[0.9rem]">Recursos</h3>
                    <ul className="flex flex-col gap-1">
                        <li>Blog</li>
                        <li>Melhores Práticas</li>
                        <li>Cores</li>
                        <li>Paleta de Cores</li>
                        <li>Suporte</li>
                        <li>Desenvolvedores</li>
                        <li>Biblioteca de recursos</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}