import Navbar from "./components/Navbar";

import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Footer from "./pages/Footer";

// import BrowserRouter from "next/router";
// import { Route } from "next";

// import Forms from "./components/Forms";
// import StudentForm from "./components/StudentForms";
export default function Home() {
  return (
    <>
    {/* <BrowserRouter> */}
    <Navbar />
    <Profile/>
    <Projects/>
    <AboutMe/>
    <Contact/>
    <Footer/>
    {/* <Forms/> */}
    {/* <StudentForm/> */}
  {/* </BrowserRouter> */}

    </>
  );
}
