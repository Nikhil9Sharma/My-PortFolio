import Navbar from "./components/Navbar";
import About from "./components/About";
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
    {/* <Forms/> */}
    <StudentForm/>
    </>
  );
}
