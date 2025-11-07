import Navbar from "./components/Navbar";

import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Profile from "./components/Profile";

import Forms from "./components/Forms";
import StudentForm from "./components/StudentForms";
export default function Home() {
  return (
    <>
    <Navbar />
    <Profile/>
    <Projects/>
    <AboutMe/>
    <Contact/>
    {/* <Forms/> */}
    {/* <StudentForm/> */}
    </>
  );
}
