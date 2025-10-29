"use client";
import "../SytleFiles/Navbar.css";
import MyImage from 'next/image';
import {useState } from "react";
import Link from 'next/link';
// import link from 'next/Link';

export default function Navbar() {
    // const [CheckStatus, ChangeStatus] = useState("true");
    // const toggleForm= (Check) => {
    //     if (CheckStatus === "true") {
    //         ChangeStatus("false");
    //         console.log("Clicked and change  by to false");
    //     }        else {
    //         ChangeStatus("true");
    //         console.log("Clicked and change by to true");
    //     }
    // }

    return (
        <>
            <header className="navbar-container-area">
                <div className="navbar-container">
                    <nav className="navbar-inner-container">
                        <div className="navbar-logo-container">
                            <img src="../Assets/NuserIcon.jpg" alt="Logo" />
                            <h2>Nikhil Sharma</h2>
                        </div>
                        <div className="navbar-content-container">
                            <div className="change-toggle-status-button-container">
                                <button className="three-line-bar-icon" > 3Line</button>
                                <button className="cross-icon" >Cross</button>
                            </div>
                            <div className="navbar-inner-content">
                                <button className=""><Link href="/">Home</Link></button>
                                <button className=""><Link href="/About">About</Link></button>
                                <button className=""><Link href="/Projects">Projects</Link></button>
                                <button className=""><Link href="/Contact">Contact</Link></button>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}