import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import Footer from "../components/Footer";
import HeroLogin from "../components/HeroLogin";
import LastProjects from "../components/LastProjects";
import MainProjects from "../components/MainProjects";
import MonthCourses from "../components/MonthCourses";
import LoginModal from "../components/LoginModal";
import { useState, useEffect } from "react";
import Menu from "../components/Menu";
import AnimacaoTwo from "../components/AnimacaoTwo";
import { getData } from "../utils/getData";

export default function HomeLogin() {
  const [open, setOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    
    const fetchProjectsAndCourses = async () => {
      try {
        const projectsData = await getData('projects');
        const coursesData = await getData('courses');

        if (projectsData) setProjects(projectsData);
        if (coursesData) setCourses(coursesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProjectsAndCourses();
  }, []);

  const handleLogoff = (username) => {
    localStorage.setItem("username", username);
    setOpen(false);
  };

  return (
    <>
      <div className="hidden lg:block"><AnimacaoTwo /></div>
      <Menu setOpen={setOpen} />
      <main className="flex flex-col gap-10 bg-background justify-center items-center overflow-hidden sm:pb-[6vh]">
        <HeroLogin />
        <LastProjects projects={projects} />
        <div className="sm:w-[76vw] h-[63rem] my-20 sm:h-[90vh] mb-32 lg:mb-0 flex flex-col sm:flex-row items-center justify-between ">
          <MonthCourses courses={courses} />
          <MainProjects projects={projects} />
        </div>
      </main>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        center
      >
        <LoginModal onLogin={handleLogoff} />
      </Modal>
      <Footer />
    </>
  );
}