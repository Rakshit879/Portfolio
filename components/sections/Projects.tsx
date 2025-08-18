"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import project from "../../data/projectsData";

export default function Projects() {
  return (
    
    <section id="project" className="px-6 md:px-12 lg:px-20 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-neutral-800">🚀 Projects</h2>
        <p className="mt-4 text-gray-800 max-w-2xl mx-auto">
          These are some of the projects I’ve built — from personal projects,
          freelance work, to hackathons. More projects live on my{" "}
          <a
            href="https://github.com/Rakshit879"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:underline"
          >
            GitHub page
          </a>
          .
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-8 max-w-4xl mx-auto ">
        {project.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 border border-gray-700 rounded-xl bg-black/40 backdrop-blur-md shadow-lg shadow-gray-400 hover:shadow-orange-500/20 transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Title */}
            <h3 className="text-xl font-bold text-neutral-800 mb-2">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-800 mb-4">{project.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-gray-800 text-gray-200 border border-gray-600 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              {/* GitHub link */}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-black rounded-md text-black hover:bg-gray-800 hover:text-white transition"
                >
                  <FaGithub /> GitHub
                </a>
              )}

              {/* Live link - show only if it exists */}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-orange-500 rounded-md text-orange-400 hover:bg-orange-500 hover:text-black transition"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
