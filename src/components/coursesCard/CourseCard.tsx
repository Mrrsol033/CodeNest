"use client";

import { motion } from 'framer-motion';

interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  instructor: string;
  rating: number;
  students: number;
  price: number;
  duration: string;
  level: string;
  category: string;
  featured: boolean;
}

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-sm ${
          i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'beginner':
        return 'bg-green-100 text-green-600';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-600';
      case 'advanced':
        return 'bg-red-100 text-red-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-100"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Course Header */}
      <div className="relative">
        {/* Course Icon/Image */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 text-center">
          <motion.span 
            className="text-4xl inline-block"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {course.image}
          </motion.span>
        </div>
        
        {/* Featured Badge */}
        {course.featured && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            Featured
          </div>
        )}
        
        {/* Category Tag */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-lg text-xs font-medium">
          {course.category}
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        {/* Level Badge */}
        <div className={`inline-block ${getLevelColor(course.level)} px-3 py-1 rounded-full text-xs font-semibold mb-3`}>
          {course.level}
        </div>

        {/* Course Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
          {course.title}
        </h3>

        {/* Course Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {course.description}
        </p>

        {/* Instructor */}
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">
            {course.instructor.split(' ').map(n => n[0]).join('')}
          </div>
          <span className="text-sm text-gray-600">By {course.instructor}</span>
        </div>

        {/* Rating and Students */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1">
            {renderStars(course.rating)}
            <span className="ml-1 text-sm font-semibold text-gray-700">
              {course.rating}
            </span>
            <span className="text-xs text-gray-500 ml-1">
              ({course.students.toLocaleString()})
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <span className="mr-1">⏱️</span>
            {course.duration}
          </div>
        </div>

        {/* Price and Enroll Button */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-bold text-gray-800">
              ${course.price}
            </span>
            <span className="text-sm text-gray-500 line-through">
              ${course.price + 20}
            </span>
          </div>
          <motion.button
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enroll Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}