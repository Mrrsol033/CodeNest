"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import styles from "./style.module.css";

const features = [
  {
    title: "Interactive Coding Challenges",
    description:
      "Practice real-world coding problems designed to help you master algorithms and data structures.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Structured Learning Paths",
    description:
      "Follow guided roadmaps that take you from beginner to advanced step by step.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Community Support",
    description:
      "Join a passionate community of learners to share ideas, solve problems, and grow together.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
  },
];

/* -------------------------------------------------
   REUSABLE CARD
------------------------------------------------- */
type CardProps = {
  index: number;
  total: number;
  feature: typeof features[number];
};

function FeatureCard({ index, total, feature }: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  return (
    <motion.div
      ref={ref}
      className={styles.cardWrapper}
      style={{ zIndex: index }}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div
        className={`${styles.glassCard} ${
          index % 2 === 1 ? styles.reverse : ""
        }`}
      >
        {/* Image */}
        <motion.div
          className={styles.imageContainer}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={feature.image}
            alt={feature.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className={styles.imageOverlay} />
        </motion.div>

        {/* Text */}
        <motion.div
          className={styles.textContainer}
          initial={{ opacity: 0, x: index % 2 === 1 ? -80 : 80 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3 className={styles.title}>{feature.title}</h3>
          <p className={styles.description}>{feature.description}</p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.heroButton}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------
   MAIN SECTION – Scroll-Driven Sticky Effect (Framer Motion)
------------------------------------------------- */
export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // We'll create a smooth step for each card
  const cardProgress = useTransform(
    scrollYProgress,
    (p) => {
      const step = 1 / (features.length - 1);
      const current = Math.floor(p / step);
      const local = (p % step) / step;
      return { current, local };
    }
  );

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      ref={containerRef}
      className={styles.section}
      style={{ height: isMobile ? "auto" : `${features.length * 100}vh` }}
    >
      {/* Glass Background */}
      <motion.div
        className={styles.glassBg}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* Sticky Wrapper */}
      <div
        ref={stickyRef}
        className={`${isMobile ? "static" : "sticky top-0"} ${styles.stickyWrapper}`}
      >
        {features.map((f, i) => {
          const isActive = i === cardProgress.get().current;
          const local = cardProgress.get().local;

          // Only apply scroll animation on desktop
          const shouldAnimate = !isMobile && features.length > 1;

          const scale = shouldAnimate
            ? isActive
              ? 1
              : 0.82
            : 1;

          const rotate = shouldAnimate
            ? isActive
              ? 0
              : (i % 2 === 0 ? -12 : 12) * (1 - local)
            : 0;

          const y = shouldAnimate
            ? isActive
              ? 0
              : (i > cardProgress.get().current ? 120 : -120) * (1 - local)
            : 0;

          const opacity = shouldAnimate
            ? isActive || Math.abs(i - cardProgress.get().current) === 1
              ? 1
              : 0
            : 1;

          return (
            <motion.div
              key={i}
              className={styles.cardWrapper}
              style={{
                scale,
                rotate,
                y: `${y}%`,
                opacity,
                zIndex: i,
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <FeatureCard index={i} total={features.length} feature={f} />
            </motion.div>
          );
        })}
      </div>

      {/* Mobile Fallback */}
      {isMobile && (
        <div className={styles.mobileStack}>
          {features.map((f, i) => (
            <FeatureCard key={i} index={i} total={features.length} feature={f} />
          ))}
        </div>
      )}
    </section>
  );
}