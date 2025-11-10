"use client";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";

import { useState } from "react";


// import Forms from "./components/Forms";
// import StudentForm from "./components/StudentForms";

export default function Home() {
  const [activePage, setActivePage] = useState("about");

  const renderPage = () => {
    switch (activePage) {
      case "about":
        return <AboutMe />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <AboutMe />;
    }
  };
  return (
    <>
    <Profile/>
    <Projects/>
    <AboutMe/>
    <Contact/>
    </>
  );
}
