import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import LastProjects from "../components/LastProjects";
import MainProjects from "../components/MainProjects";
import MonthCourses from "../components/MonthCourses";

export default function Home() {

  return (
    <>
      <Header />
      <main>
        <Hero />
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