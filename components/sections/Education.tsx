"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Education() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section
      id="about"
      className="px-6 md:px-12 lg:px-20 py-20 "
    >
      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-12">
        {["skills", "education"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full font-semibold border-2 shadow-sm transition-all duration-300 ${
              activeTab === tab
                ? "bg-gradient-to-r from-orange-500 to-red-500 text-white border-transparent scale-105 shadow-md"
                : "bg-transparent border-gray-400 text-gray-700 hover:text-black hover:border-orange-400"
            }`}
          >
            {tab === "skills" ? "💻 Skills" : "🎓 Education"}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto border border-gray-200 shadow-xl rounded-2xl p-10 bg-white/70 backdrop-blur">
        <AnimatePresence mode="wait">
          {activeTab === "skills" ? (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Languages</h3>
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "C++",
                  "Java",
                  "JavaScript",
                  "TypeScript",
                  "HTML",
                  "CSS",
                  "SQL",
                ].map((lang) => (
                  <span
                    key={lang}
                    className="px-5 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-full shadow hover:scale-105 transition-transform duration-300"
                  >
                    {lang}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "React JS",
                  "Next.js",
                  "TailwindCSS",
                  "Bootstrap",
                  "Node.js",
                  "Express.js",
                  "SQL",
                  "MySQL",
                  "MongoDB",
                  "Git/GitHub",
                  "Vercel",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-5 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded-full shadow-sm hover:scale-105 hover:bg-gray-200 transition-transform duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
              <ul className="relative border-l-4 border-orange-400 pl-6 space-y-8">
                <li className="relative">
                  <span className="absolute -left-3 top-1 w-6 h-6 bg-orange-500 rounded-full border-4 border-white"></span>
                  <h4 className="font-semibold text-lg text-gray-900">
                    🎓 B.Tech in Computer Science & Engineering
                  </h4>
                  <p className="text-gray-700">Bennett University, 2022 – 2026</p>
                  <p className="text-sm text-gray-500">
                    Coursework: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks
                  </p>
                </li>
                <li className="relative">
                  <span className="absolute -left-3 top-1 w-6 h-6 bg-red-400 rounded-full border-4 border-white"></span>
                  <h4 className="font-semibold text-lg text-gray-900">
                    📖 Class XII (CBSE)
                  </h4>
                  <p className="text-gray-700">Completed in 2022 – Science Stream (PCM + CS)</p>
                </li>
                <li className="relative">
                  <span className="absolute -left-3 top-1 w-6 h-6 bg-yellow-400 rounded-full border-4 border-white"></span>
                  <h4 className="font-semibold text-lg text-gray-900">
                    📘 Class X (CBSE)
                  </h4>
                  <p className="text-gray-700">Completed in 2020</p>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
