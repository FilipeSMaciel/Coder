export default function Ops() {
  return (
    <>

      <div className="h-full w-full bg-background flex justify-center items-center">
        <div className="flex flex-col items-center">
          <div className="w-[20vw] h-[22vh] lg:mt-[-12vw] mt-32 lg:ml-12 ml-2">

            <img src="rd.png"></img>
          </div>
          <div className="absolute w-0 mx-auto text-center text-white text-[2vw] lg:mt-[6vw] mt-[52vw] font-jetbrains animate-typewriter animate-blink-cursor">
            <p className="whitespace-nowrap overflow-hidden border-r-2 border-text-cursor text-verde_principal drop-shadow-3xl">
              Ops! Você acabou caindo na página errada!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
