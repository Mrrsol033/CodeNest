"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const statsData = [
  {
    id: 1,
    number: 50000,
    suffix: "+",
    label: "Students Enrolled",
    description: "Join our growing community of learners",
    icon: "👨‍🎓",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    number: 95,
    suffix: "%",
    label: "Completion Rate",
    description: "Students who finish our courses",
    icon: "🎯",
    color: "from-green-500 to-teal-500"
  },
  {
    id: 3,
    number: 1200,
    suffix: "+",
    label: "Hours of Content",
    description: "Comprehensive learning materials",
    icon: "📚",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 4,
    number: 89,
    suffix: "%",
    label: "Career Advancement",
    description: "Students who report career growth",
    icon: "🚀",
    color: "from-orange-500 to-red-500"
  }
];

const Counter = ({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start > target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="font-bold">
      {count}{suffix}
    </span>
  );
};

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            By The Numbers
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            See why thousands of students trust CodeNest for their coding education
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {statsData.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden">
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <motion.div
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {stat.icon}
                </motion.div>

                {/* Animated Number */}
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  <Counter target={stat.number} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-blue-200 text-sm">
                  {stat.description}
                </p>

                {/* Pulse Effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/30"
                  animate={{
                    scale: [1, 1.02, 1],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="inline-flex items-center space-x-8 text-white/80">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🏆</span>
              <span>Industry-Recognized Certificates</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">💼</span>
              <span>Career Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🔄</span>
              <span>Lifetime Access</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}