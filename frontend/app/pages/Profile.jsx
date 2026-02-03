"use client";

import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaDev } from "react-icons/fa";
import Link from "next/link";
import "../SytleFiles/Profile.css";
export default function Profile() {
    return (
        <>
        <section>
            <div className="main-profile-full-area">
                <div className="social-media-profile-area">
                    <div className="social-media-profile-area-container">
                    <Link
                        href="https://www.linkedin.com/in/nikhilsharma906/"
                        target="_blank"
                    >
                        <FaLinkedin size={29} />
                    </Link>

                    <Link
                        href="https://twitter.com/your_username"
                        target="_blank"
                    >
                        <FaXTwitter size={29} />
                    </Link>

                    <Link
                        href="https://github.com/Nikhil9Sharma"
                        target="_blank"
                    >
                        <FaGithub size={29} />
                    </Link>

                    <Link
                        href="https://dev.to/your_username"
                        target="_blank"
                    >
                        <FaDev size={29} />
                    </Link>
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