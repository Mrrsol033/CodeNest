"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useCallback } from "react";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "backOut" },
    },
  };

  // Smooth scroll handler
  const handleScroll = useCallback(() => {
    const target = document.getElementById("features");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden flex items-center justify-center">
      {/* === Background Effects === */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 23) % 100}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: (i % 5) * 0.5,
            }}
          />
        ))}

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 -left-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 right-0 w-[28rem] h-[28rem] bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ scale: [1.1, 1, 1.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* === Main Content === */}
      <div className="relative z-10 container mx-auto px-6 text-center mb-40">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div
            variants={scaleIn}
            className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
          >
            <motion.span
              className="w-2 h-2 bg-green-400 rounded-full mr-3"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-semibold text-white">
              🚀 Join 50,000+ Developers Learning Today
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight"
          >
            Learn to Code.{" "}
            <motion.span
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent inline-block"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 6, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Build Your Future.
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed"
          >
            Master in-demand tech skills with{" "}
            <span className="text-white font-semibold">interactive courses</span>,{" "}
            <span className="text-white font-semibold">real-world projects</span>, and{" "}
            <span className="text-white font-semibold">expert mentorship</span>.{" "}
            Start your coding journey today!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={scaleIn}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
          >
            <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
              <Link href="/courses" className={styles.heroButton}>
                <span className="relative z-10">Start Coding Now</span>
                <div className={styles.buttonBackground}></div>
              </Link>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white/30 text-white rounded-2xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm hover:border-white/50"
            >
              Browse Courses
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* === Scroll Indicator === */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 mb-20 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={handleScroll}
      >
        <div className="text-center text-white">
          <motion.div
            className="text-sm mb-3 text-gray-400"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Discover More
          </motion.div>
          <motion.div
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center mx-auto"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
