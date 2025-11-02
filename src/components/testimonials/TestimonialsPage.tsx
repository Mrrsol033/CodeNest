"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Type definitions
type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
};

type TestimonialCardProps = {
  testimonial: Testimonial;
  index: number;
};

type StarRatingProps = {
  rating: number;
};

// Props for the main component (empty for now, but can be extended)
// type TestimonialsPageProps = {};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Pitfield Neurobiol",
    role: "UX Manager",
    company: "Superhabits",
    image: "👨‍💼",
    content: "The lovely team at DesignMe has provided our startup with significant leverage. Their work is exceptionally professional, and Adrian is always attentive to our needs, taking the time to understand our briefs and offer valuable direction. Additionally, their turnaround times are impressively fast!",
    rating: 5,
  },
  {
    id: 2,
    name: "Rib Wat",
    role: "CEO",
    company: "Kingdom Advisors",
    image: "👩‍💼",
    content: "DesignMe has greatly exceeded our expectations. The communication is always excellent, the turnaround is extremely quick, and the designs are fresh, innovative, and spot on!",
    rating: 5,
  },
  {
    id: 3,
    name: "CEO",
    role: "CEO",
    company: "KI",
    image: "👨‍💼",
    content: "The low provided leverage, accessible to the attractive valuable turnaround.",
    rating: 4,
  },
  {
    id: 4,
    name: "Sarah Johnson",
    role: "Frontend Developer",
    company: "TechCorp",
    image: "👩‍💻",
    content: "DesignMe completely transformed our digital presence. The attention to detail and creative solutions exceeded all our expectations!",
    rating: 5,
  },
  {
    id: 5,
    name: "Mike Chen",
    role: "Product Manager",
    company: "StartupXYZ",
    image: "👨‍💼",
    content: "Outstanding service and incredible designs. They understood our vision perfectly and delivered beyond what we imagined.",
    rating: 5,
  },
];

// Star Rating Component
const StarRating: React.FC<StarRatingProps> = ({ rating }) => (
  <>
    {Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
      >
        ★
      </span>
    ))}
  </>
);

// Individual Testimonial Card Component
const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => (
  <motion.div
    key={`${testimonial.id}-${index}`}
    variants={{
      hidden: { opacity: 0, y: 60, scale: 0.95 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
      },
    }}
    className="group shrink-0 w-80 lg:w-96"
  >
    <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative h-full flex flex-col">
      {/* Quote Icon */}
      <div className="text-4xl text-purple-200 mb-4"></div>

      {/* Rating */}
      <div className="flex mb-4">
        <StarRating rating={testimonial.rating} />
      </div>

      {/* Content */}
      <p className="text-gray-700 text-lg leading-relaxed mb-6 flex-grow">
        {testimonial.content}
      </p>

      {/* Student Info */}
      <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
        <div className="text-3xl">{testimonial.image}</div>
        <div className="flex-1">
          <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">{testimonial.role}</p>
          <p className="text-sm text-purple-600 font-semibold">
            {testimonial.company}
          </p>
        </div>
      </div>

      {/* Hover Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500 -z-10"></div>
    </div>
  </motion.div>
);

export default function TestimonialsPage({}: TestimonialsPageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials: Testimonial[] = [...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    const scrollSpeed = 1; // pixels per frame

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;
        
        // Reset to beginning when reaching the end of original content
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 3) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] relative overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3, scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3, scale: [1.1, 1, 1.1], y: [0, -40, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
              💬 Testimonials
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent mb-6">
            Don't take our word for it!
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear it from our partners.
          </p>
        </motion.div>

        {/* Infinite Scrolling Testimonials */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-hidden py-8 cursor-grab active:cursor-grabbing"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <div className="flex space-x-8 min-w-max">
              {duplicatedTestimonials.map((testimonial, index) => (
                <TestimonialCard 
                  key={`${testimonial.id}-${index}`} 
                  testimonial={testimonial} 
                  index={index} 
                />
              ))}
            </div>
          </div>

          {/* Gradient Overlays for Smooth Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#fdfbfb] to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#fdfbfb] to-transparent pointer-events-none"></div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-600 mb-6 text-lg">
            Join our community of satisfied partners
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
            Start Your Project Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}