'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import '../stylesheets/navbar.css';

export default function Navbar(){

    const [scrolled,setscrolled] = useState(false);
    useEffect(()=>{
        const handleScroll = ()=>{
            setscrolled(window.scrollY>window.innerHeight-500);
        }

        window.addEventListener("scroll",handleScroll);
        return ()=>{window.removeEventListener("scroll",handleScroll)};
    })

    const navbarBackground = scrolled?'bg-white/10 backdrop-blur-md rounded-xl shadow-lg':'bg-transparent';

    return(
        <nav className={`fixed top-0 left-0 right-0 z-50 w-full px-9 py-4 flex flex-row justify-between items-center text-lg ${navbarBackground} transition-all ease-in-out duration-500`}>

            <Link className="text-2xl font-bold text-gray-900 hover:text-gray-500 transition hover:scale-105 duration-200" href={"/"}>Rakshit.Garg()</Link>

            {/* desktop code */}
            <div className="hidden md:flex flex-row items-center gap-6 text-gray-800 font-semibold ">
                <Link href="#about" className="link-underline hover:text-gray-400 transition">About</Link>
                <Link href="#experience" className="link-underline hover:text-gray-400 transition">Experience</Link>
                <Link href="#project" className="link-underline hover:text-gray-400 transition">Projects</Link>
                <Link href="#achievements" className="link-underline hover:text-gray-400 transition">Achievements</Link>
                <Link href="#contact" className="link-underline hover:text-gray-400 transition">Contact</Link>
            </div>

            {/* hamburger code */}
        </nav>
    )
}