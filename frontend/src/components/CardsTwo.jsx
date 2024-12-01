export default function CardsTwo() {


    return (
        <>
            <div className="lg:w-[50vw] lg:h-[20vh] h-[12vh] w-[77.5vw] bg-[#2C2C2C] border-[0.1vw] border-[#298C00] drop-shadow-3xl">
                <section className="flex flex-row p-4 lg:pl-10 lg:p-3">
                    <div className="lg:w-[300px] lg:h-[250px] w-[100px] h-[100px] object-cover hidden lg:block">
                        <img src="/coca-cola.svg"></img>
                    </div>
                    <div className="flex flex-col items-center lg:ml-2 -ml- text-[#B3B3B3] font-inter text-[2vw] lg:text-[1vw] mt-4">
                        <div>
                            <h1>Procura-se programadores para Outubro/24.</h1>
                        </div>
                        <div className="mb-4">
                            <p>Você deseja participar da CokeJam de Outubro/24? </p>
                        </div>


                        <div className="flex flex-row gap-0 mt-[2vw]">

                            <h2 className="text-nowrap text-[#298C00] text-[2vw] lg:text-[0.8vw]">Requisitos: C#, C++, PYTHON, PHP, ORACLE, ANGULAR, JAVA</h2>
                            <div className="lg:w-[2vw] ml-4 w-[3vw] text-[#298C00] ">
                                <img src="pessoas.png"></img>
                            </div>
                            <p>35</p>

                        </div>

                    </div>
                </section>
            </div>
        </>
    )




}