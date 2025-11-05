"use client";
import "../SytleFiles/Navbar.css";
import MyImage from 'next/image';
import userImage from "../Assets/NewUserImage.png";
import {useState } from "react";
import Link from 'next/link';
// import link from 'next/Link';

export default function Navbar() {
    const [ismenuOpen, setmenuOpen] = useState(true);
    const togglemenu =() => { setmenuOpen(!ismenuOpen)
        console.log("Menu status:", ismenuOpen);
     };


    return (
        <>
            <header className="navbar-container-area">
                <div className="navbar-container">
                    <nav className="navbar-inner-container">
                        <div className="navbar-logo-container">
                            <MyImage
                                src={userImage} // Pass the imported image object
                                alt="Logo"
                                width={50}     // 🟢 REQUIRED: Must set width
                                height={50}    // 🟢 REQUIRED: Must set height
                            />
                            <h2>Nikhil Sharma</h2>
                        </div>
                        <div className="navbar-content-container">
                            <div className="navbar-inner-content">
                                <button className=""><Link href="/">Home</Link></button>
                                <button className=""><Link href="/About">About</Link></button>
                                <button className=""><Link href="/Projects">Projects</Link></button>
                                <button className=""><Link href="/Contact">Contact</Link></button>
                            </div>
                            <div className="change-toggle-status-button-container">
                                {ismenuOpen ? (
                                     <button className="three-line-bar-icon"
                                        onClick={togglemenu}
                                     > ☰</button>
                                     ) : (
                                     <button className="cross-icon" 
                                            onClick={togglemenu}>✕</button>
                                )}

                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}