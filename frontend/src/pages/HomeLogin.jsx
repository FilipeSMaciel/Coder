import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroLogin from "../components/HeroLogin";
import LastProjects from "../components/LastProjects";
import MainProjects from "../components/MainProjects";
import MonthCourses from "../components/MonthCourses";

export default function HomeLogin() {

  return (
    <>
      <Header />
      <main className="flex flex-col gap-10 bg-background justify-center items-center">
        <HeroLogin />
        <LastProjects />
        <div>
          <MonthCourses />
          <MainProjects />
        </div>
      </main>
      <Footer />
    </>
  )
}