"use client";

import "../SytleFiles/Projects.css";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    tech: "Personal Portfolio",
    description:
      "A personal portfolio website to showcase my projects and skills.",
    imageUrl: "/images/portfolio.png",
    projectUrl: "https://myportfolio.com",
  },
  {
    id: 2,
    title: "Todo App",
    tech: "React + Node.js",
    description:
      "A simple task management app with authentication and API integration.",
    imageUrl: "/images/todo.png",
    projectUrl: "https://mytodoapp.com",
  },
];

export default function Projects() {
  return (
    <section>
      <div className="Project-section-full-area-container">
        <div className="project-heading-area">
          <h2 className="project-heading heading-sec__main">Projects</h2>
          <div className="underline"></div>
          <p className="project-subheading">
            Here you will find some of the personal and clients projects that I
            created, each containing its own case study.
          </p>
        </div>

        <div className="project-list">
        
        </div>
      </div>
    </section>
  );
}
