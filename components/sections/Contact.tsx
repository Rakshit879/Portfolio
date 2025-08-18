"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="Contact" className="min-h-screen flex flex-col items-center justify-center bg-gray-50/90 py-24 px-6">
      
      {/* Section Header */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center mb-4"
      >
        Get in Touch
      </motion.h2>
      
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "120px" }}
        transition={{ duration: 0.6 }}
        className="h-1 bg-red-500 rounded-full mb-12"
      />

      {/* Contact Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full border border-gray-200 hover:shadow-2xl hover:scale-102 transition-transform duration-300"
      >
        <p className="text-center text-gray-700 mb-10">
          I'm always open to discussing new projects, opportunities, or collaborations. Feel free to reach out!
        </p>

        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          {/* Email */}
          <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-red-50 transition bg-gradient-to-r from-red-50 to-white shadow-inner">
            <div className="p-3 bg-red-500 rounded-full text-white flex-shrink-0 mt-1">
              <FaEnvelope />
            </div>
            <a
              href="mailto:rakshitgarg809@gmail.com"
              className="text-gray-800 font-medium hover:text-red-500 transition break-all min-w-0 flex-1"
            >
              rakshitgarg809@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-red-50 transition bg-gradient-to-r from-red-50 to-white shadow-inner">
            <div className="p-3 bg-red-500 rounded-full text-white flex-shrink-0">
              <FaPhone />
            </div>
            <a
              href="tel:+918791269049"
              className="text-gray-800 font-medium hover:text-red-500 transition"
            >
              +91 8791269049
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-red-50 transition bg-gradient-to-r from-red-50 to-white shadow-inner">
            <div className="p-3 bg-red-500 rounded-full text-white flex-shrink-0 mt-1">
              <FaLinkedin />
            </div>
            <a
              href="https://www.linkedin.com/in/rakshit-garg-768b2724b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 font-medium hover:text-red-500 transition break-words min-w-0 flex-1"
            >
              Rakshit Garg (LinkedIn)
            </a>
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-red-50 transition bg-gradient-to-r from-red-50 to-white shadow-inner">
            <div className="p-3 bg-red-500 rounded-full text-white flex-shrink-0">
              <FaGithub />
            </div>
            <a
              href="https://github.com/Rakshit879"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 font-medium hover:text-red-500 transition"
            >
              Rakshit Garg (GitHub)
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}