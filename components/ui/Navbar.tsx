'use client';

import Link from "next/link";
import { FaGithub, FaLinkedin, FaFileAlt, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import "../stylesheets/navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full px-9 py-4 flex flex-row justify-between items-center text-lg bg-black transition-all ease-in-out duration-500">

      {/* Logo */}
      <Link
        className=" text-xl lg:text-2xl font-bold text-white hover:text-gray-400 transition hover:scale-105 duration-200"
        href={"/"}
      >
        Rakshit.Garg()
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex text-sm lg:text-lg flex-row items-center gap-6 text-gray-300 font-semibold">
        <Link href="#about" className="link-underline hover:text-gray-400 transition">About</Link>
        <Link href="#experience" className="link-underline hover:text-gray-400 transition">Experience</Link>
        <Link href="#project" className="link-underline hover:text-gray-400 transition">Projects</Link>
        <Link href="#achievements" className="link-underline hover:text-gray-400 transition">Achievements</Link>
        <Link href="#contact" className="link-underline hover:text-gray-400 transition">Contact</Link>
      </div>

      {/* Social Icons (desktop only) */}
      <div className="hidden md:flex items-center gap-5 ml-6">
        {/* GitHub */}
        <div className="relative group">
          <Link
            href="https://github.com/Rakshit879"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition"
          >
            <FaGithub size={22} />
          </Link>
          <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
            GitHub
          </span>
        </div>

        {/* LinkedIn */}
        <div className="relative group">
          <Link
            href="https://www.linkedin.com/in/rakshit-garg-768b2724b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition"
          >
            <FaLinkedin size={22} />
          </Link>
          <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
            LinkedIn
          </span>
        </div>

        {/* Resume */}
        <div className="relative group">
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition"
          >
            <FaFileAlt size={22} />
          </Link>
          <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
            Resume
          </span>
        </div>
      </div>

      {/* Hamburger Button (mobile only) */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setIsOpen(true)}
      >
        <FaBars />
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex justify-end z-40">
          <div className="relative w-3/4 sm:w-1/2 md:w-1/3 bg-black h-full flex flex-col items-start px-8 py-10 space-y-6 text-white text-lg">

            {/* Close Button inside the drawer */}
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes />
            </button>

            {/* Links */}
            <Link onClick={() => setIsOpen(false)} href="#about" className="hover:text-gray-400 transition">About</Link>
            <Link onClick={() => setIsOpen(false)} href="#experience" className="hover:text-gray-400 transition">Experience</Link>
            <Link onClick={() => setIsOpen(false)} href="#project" className="hover:text-gray-400 transition">Projects</Link>
            <Link onClick={() => setIsOpen(false)} href="#achievements" className="hover:text-gray-400 transition">Achievements</Link>
            <Link onClick={() => setIsOpen(false)} href="#contact" className="hover:text-gray-400 transition">Contact</Link>

            {/* Social Icons inside menu */}
            <div className="flex gap-6 mt-6">
              <Link href="https://github.com/Rakshit879" target="_blank"><FaGithub size={22} /></Link>
              <Link href="https://www.linkedin.com/in/rakshit-garg-768b2724b/" target="_blank"><FaLinkedin size={22} /></Link>
              <Link href="/resume.pdf" target="_blank"><FaFileAlt size={22} /></Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
