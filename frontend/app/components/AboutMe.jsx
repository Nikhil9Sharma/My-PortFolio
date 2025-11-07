"use client";
import "../SytleFiles/AboutMe.css";

export default function AboutMe () {
    return (
        <section className="">
            <div className="aboutme-section-full-area">
                <div className="about-me-section-heading-area">
                    <h1 className="project-heading heading-sec__main">About Me</h1>
                    <div className="underline"></div>
                    <p className="sub-heading">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
                </div>
                <div className="aboutme-section-full-area-container">
                    <div className="know-about-me-container">
                        <h2 className=""> Get to know me !</h2>
                        <p className="">I{"'"}m a <span className="bold-font-span">Frontend Focused Web Developer</span> building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <span className="bold-font-span">Projects</span> section.
                                        I also like sharing content related to the stuff that I have learned over the years in <span className="bold-font-span">Web Development</span> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <span className="change-color-span">Linkedin</span> and <span className="change-color-span">Instagram</span> where I post useful content related to Web Development and Programming</p>
                        <p className="">I{"'"}m open to <span className="bold-font-span">Job</span> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don{"'"}t hesitate to <span className="bold-font-span">contact</span> me.</p>
                        <button className="">Contact</button>
                    </div>
                    <div className="know-about-my-skill">
                        <h2> My Skills</h2>
                        <ul className="">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>ReactJS</li>
                            <li>NextJS</li>
                            <li>Git</li>
                            <li>GitHub</li>
                            <li>Bootstrap</li>
                            <li>Tailwind CSS</li>
                            <li>Responsive Design</li>
                            <li>JAVA</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}