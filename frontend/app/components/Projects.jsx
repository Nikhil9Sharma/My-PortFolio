"use client";

import "../SytleFiles/Projects.css";
import Image from "next/image";
import projectImage from "../Assets/desktop.png";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    tech: "Personal Portfolio",
    description:"A personal portfolio website to showcase my projects and skills.",
    imageUrl: projectImage,
    projectUrl: "https://myportfolio.com",
  },
  {
    id: 2,
    title: "Todo App",
    tech: "React + Node.js",
    description:"A simple task management app with authentication and API integration.",
    imageUrl: projectImage,
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
          {projects.map((project) => (
            <div key = {project.id} className="project-card" >
              <div className="project-view-card-area">
                <img src={project.imageUrl}
                  alt={project.title} />
                </div>
              <div className="project-detail-content">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-tech">{project.tech}</p>
                <p className="project-description">{project.description}</p>
                  <div className=""><button className="">Case Study</button></div>
                  <div className=""><button className="">Live View</button></div>
              </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
