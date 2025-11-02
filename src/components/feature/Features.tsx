"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: "🚀",
    title: "Interactive Learning",
    description: "Hands-on coding exercises with instant feedback and real-time collaboration.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: "💻",
    title: "Real Projects",
    description: "Build portfolio-worthy projects that simulate real-world development scenarios.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: "👨‍🏫",
    title: "Expert Mentors",
    description: "Learn from industry professionals with years of practical experience.",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: "📊",
    title: "Progress Tracking",
    description: "Monitor your learning journey with detailed analytics and milestones.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: "🤝",
    title: "Community Support",
    description: "Join a vibrant community of learners and get help when you need it.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: "🎯",
    title: "Career Paths",
    description: "Structured learning paths designed to get you job-ready in months.",
    color: "from-yellow-500 to-orange-500",
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="features" className="py-20  bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
            Why Learn With CodeNest?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the features that make CodeNest the most effective platform for mastering programming skills
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <motion.div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl mb-6 mx-auto relative overflow-hidden`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-white opacity-10"></div>
                  <span>{feature.icon}</span>
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Border Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}>
                  <div className="absolute inset-[2px] bg-white rounded-2xl"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}