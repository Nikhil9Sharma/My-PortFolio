"use Cient";

import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaDev } from "react-icons/fa";

import "../SytleFiles/Profile.css";
export default function Profile() {
    return (
        <>
        <section>
            <div className="main-profile-full-area">
                <div className="social-media-profile-area">
                    <div className="social-media-profile-area-container">
                        <button><FaLinkedin size={29}/></button>
                        <button><FaXTwitter size={29}/></button>
                        <button><FaGithub size={29}/></button>
                        <button><FaDev size={29}/></button>
                    </div>
                </div>
                <div className="my-profile-area">
                    <div className="my-profile-area-container">
                        {/* <h1>hello</h1> */}
                        <div className="profile-area-section">
                            <h2 className="my-name">HEY, I{"'"}M NIKHIL SHARMA.</h2>
                            <p>A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product</p>
                        </div>
                        <div className="projects-button-area">
                            <button>Projects</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}