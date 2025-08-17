"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="mt-22 md:mt-12 relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 ">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center md:items-center justify-between gap-12">
        
        {/* Left Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-center md:text-start text-gray-900">
            Hi, I’m{" "}
            <span className="text-red-700"> {/* deep red for name */}
              Rakshit Garg
            </span>
            <br />
            <span className="text-2xl text-orange-600"> {/* warm orange-red for roles */}
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer",
                    "MERN Stack Specialist",
                    "Data Science Enthusiast",
                    "Hackathon Innovator",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 70,
                }}
              />
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-md">
            I craft clean, responsive, and modern web experiences that blend performance with aesthetics. 
            Let’s build something amazing together.
          </p>

          <div className="mt-8 flex flex-wrap gap-6">
            {/* GitHub Button */}
            <Link
              href="https://github.com/Rakshit879"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-2 px-6 py-3 rounded-lg bg-[#333] text-white font-semibold shadow-md hover:bg-black transition
               after:content-[''] after:absolute after:inset-0 after:rounded-lg after:border-4 after:border-black after:translate-x-2 after:translate-y-2 after:-z-10 hover:after:translate-x-0 hover:after:translate-y-0 after:transition-all after:duration-300"
            >
              <FaGithub size={20} /> GitHub
            </Link>

            {/* LinkedIn Button */}
            <Link
              href="https://www.linkedin.com/in/rakshit-garg-768b2724b/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0077B5] text-white font-semibold shadow-md hover:bg-[#005582] transition
               after:content-[''] after:absolute after:inset-0 after:rounded-lg after:border-4 after:border-black after:translate-x-2 after:translate-y-2 after:-z-10 hover:after:translate-x-0 hover:after:translate-y-0 after:transition-all after:duration-300"
            >
              <FaLinkedin size={20} /> LinkedIn
            </Link>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <Image
              src="/profile.jpg" // Replace with your image
              alt="Profile"
              fill
              className="rounded-full object-cover border-4 border-red-600 shadow-xl"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-red-500/20 to-orange-400/20 blur-xl animate-pulse"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
