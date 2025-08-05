"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ReactNode } from "react";

export default function AnimatedBackground({ children }: { children: ReactNode }) {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  // Different parallax speeds for various elements
  const yFast = useTransform(scrollY, [0, 2000], [0, -200]);
  const yMedium = useTransform(scrollY, [0, 2000], [0, -100]);
  const ySlow = useTransform(scrollY, [0, 2000], [0, -50]);
  const ySlower = useTransform(scrollY, [0, 2000], [0, -25]);

  // Rotation transforms
  const rotateFast = useTransform(scrollY, [0, 2000], [0, 360]);
  const rotateSlow = useTransform(scrollY, [0, 2000], [0, 180]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Fixed background gradient */}
      <div className="fixed inset-0 bg-white/95" /> 

      {/* Subtle gradient overlays */}
      <div className="fixed inset-0 bg-gradient-to-t from-transparent via-pink-100/20 to-transparent dark:via-pink-200/10" />
      <div className="fixed inset-0 bg-gradient-to-r from-transparent via-indigo-100/20 to-transparent dark:via-indigo-200/10" />

      {/* Animated geometric shapes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Large background circles */}
        <motion.div
          style={{ y: ySlower }}
          className="absolute -top-32 -right-32 w-96 h-96 border border-slate-200/30 dark:border-slate-700/30 rounded-full"
        />
        <motion.div
          style={{ y: ySlow }}
          className="absolute -bottom-48 -left-48 w-[600px] h-[600px] border border-slate-200/20 dark:border-slate-700/20 rounded-full"
        />

        {/* Medium floating elements */}
        <motion.div
          style={{ y: yMedium, rotate: rotateSlow }}
          className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-slate-300/40 dark:border-slate-600/40 rotate-45"
        />

        <motion.div
          style={{ y: yFast }}
          className="absolute top-1/3 right-1/5 w-24 h-24 border border-slate-300/30 dark:border-slate-600/30 rounded-full"
        />

        <motion.div
          style={{ y: ySlow, rotate: rotateFast }}
          className="absolute bottom-1/3 left-1/3 w-16 h-16 border-2 border-slate-400/40 dark:border-slate-500/40 rotate-12"
        />

        {/* Small accent elements */}
        <motion.div
          style={{ y: yMedium }}
          className="absolute top-1/2 left-1/6 w-8 h-8 bg-slate-300/30 dark:bg-slate-600/30 rounded-full"
        />

        <motion.div
          style={{ y: yFast }}
          className="absolute bottom-1/4 right-1/3 w-6 h-6 bg-slate-400/40 dark:bg-slate-500/40 rotate-45"
        />

        <motion.div
          style={{ y: ySlower }}
          className="absolute top-3/4 right-1/4 w-12 h-12 border border-slate-300/30 dark:border-slate-600/30 rounded-full"
        />

        {/* Linear elements */}
        <motion.div
          style={{ y: yMedium }}
          className="absolute top-1/5 left-2/3 w-px h-32 bg-gradient-to-b from-transparent via-slate-300/40 to-transparent dark:via-slate-600/40"
        />

        <motion.div
          style={{ y: ySlow, rotate: rotateSlow }}
          className="absolute bottom-1/5 left-1/5 w-24 h-px bg-gradient-to-r from-transparent via-slate-300/40 to-transparent dark:via-slate-600/40"
        />

        {/* Triangular elements */}
        <motion.div
          style={{ y: yFast }}
          className="absolute top-2/3 right-1/6 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[25px] border-b-slate-300/30 dark:border-b-slate-600/30"
        />

        {/* Grid pattern overlay */}
        <motion.div
          style={{
            y: ySlower, backgroundImage: `
              linear-gradient(to right, #64748b 1px, transparent 1px),
              linear-gradient(to bottom, #64748b 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
        />

        {/* Floating dots */}
        <motion.div
          style={{ y: yMedium }}
          className="absolute top-1/6 right-2/5 w-2 h-2 bg-slate-400/50 dark:bg-slate-500/50 rounded-full"
        />

        <motion.div
          style={{ y: yFast }}
          className="absolute bottom-1/6 left-2/5 w-3 h-3 bg-slate-300/40 dark:bg-slate-600/40 rounded-full"
        />

        <motion.div
          style={{ y: ySlow }}
          className="absolute top-1/2 right-1/2 w-1.5 h-1.5 bg-slate-400/60 dark:bg-slate-500/60 rounded-full"
        />
      </div>

      {/* Content area */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}