"use client";

import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";

const achievements = [
  {
    title: "Dean’s List Award",
    description: "Achieved twice consecutively for excellence and consistency in core technical courses.",
    issuer: "Bennett University",
    year: "May 2024 & December 2024",
    icon: <FaAward className="text-red-500 text-2xl" />,
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-20 text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 bg-white/70 py-10 shadow-gray-400 shadow-2xl rounded-2xl">
        
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold text-center text-neutral-800"
        >
           <span className="text-red-500">Achievements</span>
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          transition={{ duration: 0.5 }}
          className="h-1 bg-red-500 mx-auto mt-4 mb-12"
        />

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 gap-8 justify-center">
          {achievements.map((achieve, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative border border-gray-700 rounded-xl p-6 hover:shadow-lg hover:shadow-red-500/20 transition duration-300 bg-black/50 shadow-gray-400 shadow-2xl"
            >
              {/* Icon */}
              <div className="mb-4">{achieve.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-red-400">
                {achieve.title}
              </h3>

              {/* Description */}
              <p className="text-gray-200 mt-2">{achieve.description}</p>

              {/* Issuer & Year */}
              <p className="text-sm text-gray-800 mt-3">
                {achieve.issuer} • {achieve.year}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
