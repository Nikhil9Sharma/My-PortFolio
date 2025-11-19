    "use client";

    import { FaLinkedin } from "react-icons/fa6";
    import { FaXTwitter } from "react-icons/fa6";
    import { FaGithub } from "react-icons/fa";
    import { FaDev } from "react-icons/fa";
    import "../SytleFiles/Footer.css";

    export default function Footer() {
        return (
            <footer className="footer-main-area">
            <div className="footer-main-area-big-container">
                <h3>About Me</h3>
                <div className="footer-content-container">
                    <h3 className="Name">Nikhil Sharma.</h3>
                    <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
                </div>
                <div className="footer-social-media-container">
                    <h3 className="heading-of-footer-social-media">Social Media</h3>
                    <ul>
                        <li><FaLinkedin/></li>
                        <li><FaXTwitter/></li>
                        <li><FaGithub/></li>
                        <li><FaDev/></li>
                    </ul>
                </div>
            </div>
            <div className="copy-write-claim-area"><h3>© Copyright 2025 . Made by NIKHIL SHARMA</h3></div>
            </footer>
        );
    }