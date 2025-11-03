"use client";
import {useState} from 'react';
export default function Projects() {
     const [isOpen, setIsOpen] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">My Website</h1>

      {/* Hamburger / Close Button */}
      <button onClick={toggleMenu} className="md:hidden text-2xl focus:outline-none">
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Menu Items */}
      {/* <ul
        className={`absolute md:static bg-blue-600 w-full left-0 top-16 md:flex md:w-auto md:space-x-6 
        transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <li className="p-4 hover:bg-blue-700">Home</li>
        <li className="p-4 hover:bg-blue-700">About</li>
        <li className="p-4 hover:bg-blue-700">Services</li>
        <li className="p-4 hover:bg-blue-700">Contact</li>
      </ul> */}
    </nav>
  );
};