"use client";
import "../SytleFiles/Navbar.css";
import Image from "next/image";
import userImage from "../Assets/NewUserImage.png";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false); 
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    console.log("Menu status:", !isMenuOpen);
  };

  return (
    <>
      <header className="navbar-container-area">
        <div className="navbar-container">
          <nav className="navbar-inner-container">
            {/* --- Logo --- */}
            <div className="navbar-logo-container">
              <Image
                src={userImage}
                alt="Logo"
                width={50}
                height={50}
                className="navbar-logo-img"
              />
              <h2>Nikhil Sharma</h2>
            </div>

            {/* --- Desktop Nav --- */}
            <div className="navbar-inner-content desktop-menu">
              <button><Link href="/">Home</Link></button>
                <button><Link href="/Projects">Projects</Link></button>
              <button><Link href="#/About">About</Link></button>
                <button><Link href="#/Contact">Contact</Link></button>
            </div>

            {/* --- Mobile Toggle --- */}
            <div className="change-toggle-status-button-container">
              {isMenuOpen ? (
                <button className="cross-icon" onClick={toggleMenu}>
                  ✕
                </button>
              ) : (
                <button className="three-line-bar-icon" onClick={toggleMenu}>
                  ☰
                </button>
              )}
            </div>
          </nav>
        </div>
      </header>

      {/* 🟢 UPDATED: Mobile Menu Panel */}
      <div className={`navbar-mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <button className="navbar-mobile-close" onClick={toggleMenu}>
          ✕
        </button>
        <div className="navbar-inner-content">
          <Link href="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="#/Projects" onClick={toggleMenu}>
            Projects
          </Link>
          <Link href="#/About" onClick={toggleMenu}>
            About
          </Link>
          <Link href="#/Contact" onClick={toggleMenu}>
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
