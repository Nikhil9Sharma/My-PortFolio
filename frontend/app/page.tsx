"use client";
import AboutMe from "./pages/AboutMe/page";
import Projects from "./pages/Projects/page";
import Contact from "./pages/Contact/page";
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
    <div>
      <Profile/>
    <Projects/>
    <AboutMe/>
    <Contact/>
      {activePage}</div>
    </>
  );
}
