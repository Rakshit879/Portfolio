'use client';

import Link from "next/link";
import { FaGithub, FaLinkedin, FaFileAlt, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import "../stylesheets/navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // IntersectionObserver to track active section
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // Trigger when 60% of section is visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#project" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full px-9 py-4 flex flex-row justify-between items-center text-lg bg-black transition-all ease-in-out duration-500">

      {/* Logo */}
      <Link
        className="text-xl lg:text-2xl font-bold text-white hover:text-gray-400 transition hover:scale-105 duration-200"
        href={"/"}
      >
        Rakshit.Garg()
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex text-sm lg:text-lg flex-row items-center gap-6 font-semibold">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`link-underline transition ${
              activeSection === link.href.substring(1)
                ? "text-orange-500"
                : "text-gray-300 hover:text-gray-400"
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Social Icons (desktop only) */}
      <div className="hidden md:flex items-center gap-5 ml-6">
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
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes />
            </button>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`transition ${
                  activeSection === link.href.substring(1)
                    ? "text-orange-500 underline underline-offset-4"
                    : "hover:text-gray-400"
                }`}
              >
                {link.name}
              </a>
            ))}

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
