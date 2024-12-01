export default function Cards () {


    return (
        <>
        <div className="lg:w-[55vw] h-[20vh] w-[85vw] bg-background border-4 border-[#298C00] drop-shadow-3xl">
            <section className="flex flex-row p-4 lg:pl-12">
                <div className="lg:w-[300px] lg:h-[250px] w-[100px] h-[100px] object-cover hidden lg:block">
                <img src="/logo coca.png"></img>
                </div>
                <div className="flex flex-col items-center lg:ml-28 ml-16 text-[#B3B3B3] font-inter">
                <div>
                <h1>NOME DO PROJETO</h1>
                </div>
                <div className="mb-12">
                <p>DESCRIÇÃO DO PROJETO</p>
                </div>


                <div className="flex flex-row gap-12">

                <h2 className="text-sm text-nowrap text-[#298C00]">Requisitos: C#, C++, PYTHON, PHP, ORACLE, ANGULAR, JAVA</h2>
                <picture src="" className="lg:w-[60px] ml-4 text-[#298C00]">35</picture>

                </div>
                
                </div>
            </section>
        </div>
        </>
    )




}