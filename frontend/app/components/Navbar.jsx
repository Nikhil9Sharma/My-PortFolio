"use client";

import {useState } from "react";
// import link from 'next/Link';

export default function Navbar() {
    const [count, setcount] = useState(0);
    const handleclick= () => {
        setcount(count + 1);
    }
    return (
        <>
            <header>
                <div><h1>Hello World !</h1>
                <h2>{count}</h2>
                <button onClick={handleclick}> press button for increase number</button>
                </div>
            </header>
        </>
    );
}