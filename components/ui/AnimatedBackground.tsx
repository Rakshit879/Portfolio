"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ReactNode } from "react";

// Import dev icons from react-icons
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiNextdotjs } from "react-icons/si";

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
      {/* Base */}
      <div className="fixed inset-0 bg-white/95" /> 
      <div className="fixed inset-0 bg-gradient-to-t from-transparent via-rose-100/10 to-transparent dark:via-rose-200/10" />
      <div className="fixed inset-0 bg-gradient-to-r from-transparent via-orange-100/10 to-transparent dark:via-orange-200/10" />

      {/* Floating Dev Icons */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden text-red-600/60 dark:text-red-400/60">
        
        <motion.div style={{ y: yFast, rotate: rotateFast }} className="absolute top-1/4 left-1/5 text-6xl">
          <FaHtml5 />
        </motion.div>

        <motion.div style={{ y: ySlow, rotate: rotateSlow }} className="absolute bottom-1/3 right-1/4 text-6xl text-blue-600">
          <FaCss3Alt />
        </motion.div>

        <motion.div style={{ y: yMedium }} className="absolute top-1/3 right-1/3 text-6xl text-yellow-500">
          <FaJs />
        </motion.div>

        <motion.div style={{ y: yFast, rotate: rotateSlow }} className="absolute top-1/2 left-1/3 text-6xl text-cyan-500">
          <FaReact />
        </motion.div>

        <motion.div style={{ y: ySlower }} className="absolute top-1/5 right-1/6 text-6xl text-green-600">
          <FaNodeJs />
        </motion.div>

        <motion.div style={{ y: yMedium, rotate: rotateFast }} className="absolute bottom-1/4 left-1/4 text-6xl text-emerald-600">
          <SiMongodb />
        </motion.div>

        <motion.div style={{ y: ySlow }} className="absolute top-2/3 left-1/2 text-6xl text-sky-500">
          <SiTailwindcss />
        </motion.div>

        <motion.div style={{ y: yFast }} className="absolute top-1/6 right-1/2 text-6xl text-black dark:text-white">
          <SiNextdotjs />
        </motion.div>

        <motion.div style={{ y: ySlower, rotate: rotateSlow }} className="absolute bottom-1/6 right-1/3 text-6xl text-orange-600">
          <FaGitAlt />
        </motion.div>
      </div>

      {/* Content area */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
