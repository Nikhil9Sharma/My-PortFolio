"use client";
import MyImage from 'next/image';
import {useState } from "react";
import Link from 'next/link';
// import link from 'next/Link';

export default function Navbar() {
    const [count, setcount] = useState(0);
    const handleclick= () => {
        setcount(count + 1);
    }
    return (
        <>
            <header className="navbar-container-area">
                <div className="navbar-container">
                    <nav className="navbar-inner-container">
                        <div className="navbar-logo-container">
                            <img src={MyImage} alt="" />
                            <h2>Nikhil Sharma</h2>
                        </div>
                        <div className="navbar-content-container">
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