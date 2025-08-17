"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

// Import dev icons
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaGitAlt, FaJava, FaPython, FaGithub, FaDatabase
} from "react-icons/fa";
import {
  SiMongodb, SiTailwindcss, SiNextdotjs,
  SiExpress, SiTypescript, SiBootstrap, SiMysql
} from "react-icons/si";

export default function AnimatedBackground({ children }: { children: ReactNode }) {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  // Parallax speeds
  const yFast = useTransform(scrollY, [0, 2000], [0, -200]);
  const yMedium = useTransform(scrollY, [0, 2000], [0, -100]);
  const ySlow = useTransform(scrollY, [0, 2000], [0, -50]);
  const ySlower = useTransform(scrollY, [0, 2000], [0, -25]);

  // Rotations
  const rotateFast = useTransform(scrollY, [0, 2000], [0, 360]);
  const rotateSlow = useTransform(scrollY, [0, 2000], [0, 180]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Base background with blur */}
      <div className="fixed inset-0 bg-gradient-to-br from-white via-gray-100 to-gray-200 backdrop-blur-lg" />
      <div className="fixed inset-0 bg-gradient-to-t from-transparent via-gray-200/40 to-transparent" />
      <div className="fixed inset-0 bg-gradient-to-r from-transparent via-gray-300/30 to-transparent" />

      {/* Floating Dev Icons */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden text-gray-500/70" style={{ filter: 'blur(1px)' }}>

        {/* ✅ Only key icons on mobile, more icons appear from md: breakpoint */}

        {/* Frontend */}
        <motion.div style={{ y: yFast, rotate: rotateFast }} className="absolute top-20 left-10 text-5xl text-gray-400">
          <FaHtml5 />
        </motion.div>

        <motion.div style={{ y: ySlow, rotate: rotateSlow }} className="absolute bottom-32 right-20 text-5xl text-gray-500">
          <FaCss3Alt />
        </motion.div>

        <motion.div style={{ y: yMedium }} className="absolute top-40 right-1/4 text-5xl text-gray-600">
          <FaJs />
        </motion.div>

        <motion.div style={{ y: yFast, rotate: rotateSlow }} className="absolute top-1/2 left-1/5 text-5xl text-gray-400">
          <FaReact />
        </motion.div>

        {/* These only show on md+ screens */}
        <motion.div style={{ y: ySlower }} className="hidden md:block absolute top-1/6 right-1/5 text-5xl text-gray-500">
          <SiNextdotjs />
        </motion.div>

        <motion.div style={{ y: yMedium, rotate: rotateFast }} className="block absolute bottom-40 left-1/4 text-5xl text-gray-400">
          <SiTailwindcss />
        </motion.div>

        <motion.div style={{ y: ySlow }} className="hidden md:block absolute top-2/3 left-2/3 text-5xl text-gray-600">
          <SiBootstrap />
        </motion.div>

        {/* Backend */}
        <motion.div style={{ y: yFast }} className="hidden md:absolute top-1/5 right-1/3 text-5xl text-gray-500">
          <FaNodeJs />
        </motion.div>

        <motion.div style={{ y: ySlower, rotate: rotateSlow }} className="hidden md:block absolute bottom-20 right-1/4 text-5xl text-gray-400">
          <SiExpress />
        </motion.div>

        {/* Databases */}
        <motion.div style={{ y: yMedium, rotate: rotateSlow }} className="absolute top-2/5 left-1/3 text-5xl text-gray-600">
          <SiMongodb />
        </motion.div>

        <motion.div style={{ y: ySlow }} className="block absolute bottom-28 left-1/2 text-5xl text-gray-500">
          <SiMysql />
        </motion.div>

        <motion.div style={{ y: yFast }} className="block absolute bottom-1/2 right-1/6 text-5xl text-gray-400">
          <FaDatabase />
        </motion.div>

        {/* Version Control */}
        <motion.div style={{ y: yMedium }} className="hidden md:block absolute top-1/2 right-1/5 text-5xl text-gray-600">
          <FaGitAlt />
        </motion.div>

        <motion.div style={{ y: ySlower }} className="hidden md:block absolute top-1/4 left-1/6 text-5xl text-gray-500">
          <FaGithub />
        </motion.div>

        {/* Other Skills */}
        <motion.div style={{ y: ySlow, rotate: rotateFast }} className="hidden md:block absolute top-1/3 right-1/2 text-5xl text-gray-400">
          <SiTypescript />
        </motion.div>

        <motion.div style={{ y: yMedium }} className="hidden md:block absolute bottom-1/3 left-1/4 text-5xl text-gray-500">
          <FaJava />
        </motion.div>

        <motion.div style={{ y: yFast, rotate: rotateSlow }} className="hidden md:block absolute bottom-1/6 left-1/3 text-5xl text-gray-600">
          <FaPython />
        </motion.div>
      </div>

      {/* Content area */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
