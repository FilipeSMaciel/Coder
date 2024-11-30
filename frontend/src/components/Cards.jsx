export default function Cards () {


    return (
        <>
        <div className="w-[55vw] h-[16vh] bg-background border-4 border-[#298C00]">
            <section className="flex flex-row p-2 pl-4">
                <div className="w-[300px] h-[250px] object-cover">
                <img src="/logo coca.png"></img>
                </div>
                <div className="flex flex-col items-center ml-28 text-[#B3B3B3] font-inter">
                <div>
                <h1>NOME DO PROJETO</h1>
                </div>
                <div className="mb-12">
                <p>DESCRIÇÃO DO PROJETO</p>
                </div>


                <div className="flex flex-row gap-12">

                <h2 className="text-sm text-nowrap text-[#298C00]">Requisitos: C#, C++, PYTHON, PHP, ORACLE, ANGULAR, JAVA</h2>
                <picture src="" className="w-[60px] ml-4 text-[#298C00]">35</picture>

                </div>
                
                </div>
            </section>
        </div>
        </>
    )




}