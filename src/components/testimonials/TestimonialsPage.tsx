"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Frontend Developer",
    company: "TechCorp",
    image: "👩‍💻",
    content: "CodeNest completely transformed my career. The React course gave me the skills to land my dream job at TechCorp. The projects were so relevant to real-world applications!",
    rating: 5,
    course: "React Mastery"
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Full Stack Developer",
    company: "StartupXYZ",
    image: "👨‍💼",
    content: "I went from zero coding experience to a full-time developer in 6 months. The structured learning path and mentor support made all the difference. Best investment ever!",
    rating: 5,
    course: "Full Stack Development"
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Mobile Developer",
    company: "AppWorks",
    image: "👩‍🎨",
    content: "The React Native course was exceptional. I built my first mobile app during the course and now I'm working at a top mobile development agency. Thank you CodeNest!",
    rating: 5,
    course: "Mobile Development"
  },
  {
    id: 4,
    name: "Alex Rodriguez",
    role: "Data Scientist",
    company: "DataInsights",
    image: "👨‍🔬",
    content: "The Python for Data Science course covered everything I needed. The projects were challenging but incredibly rewarding. I use what I learned every day at work.",
    rating: 4,
    course: "Data Science"
  },
  {
    id: 5,
    name: "Jessica Wang",
    role: "DevOps Engineer",
    company: "CloudSystems",
    image: "👩‍💻",
    content: "The DevOps course was comprehensive and up-to-date with industry standards. The hands-on labs with AWS and Docker were particularly valuable for my current role.",
    rating: 5,
    course: "DevOps & Cloud"
  },
  {
    id: 6,
    name: "David Kim",
    role: "Backend Developer",
    company: "API Masters",
    image: "👨‍💻",
    content: "Node.js course was fantastic! The instructors were knowledgeable and the community support was amazing. I went from beginner to backend developer in months.",
    rating: 5,
    course: "Node.js Backend"
  }
];

export default function TestimonialsPage() {
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
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            scale: [1.1, 1, 1.1],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 15,
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
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
              💬 Student Success Stories
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent mb-6">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of successful graduates who transformed their careers with CodeNest
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative h-full flex flex-col">
                {/* Quote Icon */}
                <div className="text-4xl text-purple-200 mb-4">"</div>
                
                {/* Rating */}
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Content */}
                <p className="text-gray-700 text-lg leading-relaxed mb-6 flex-grow">
                  {testimonial.content}
                </p>

                {/* Course Taken */}
                <div className="mb-6">
                  <span className="text-sm text-purple-600 font-semibold">
                    Course: {testimonial.course}
                  </span>
                </div>

                {/* Student Info */}
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                  <div className="text-3xl">{testimonial.image}</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-purple-600 font-semibold">{testimonial.company}</p>
                  </div>
                </div>

                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500 -z-10"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-600 mb-6 text-lg">
            Join our community of successful learners
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
            Start Your Journey Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}