"use client";

import CourseCard from "../coursesCard/CourseCard";

const courses = [
  { 
    id: 1,
    title: "JavaScript Basics", 
    level: "Beginner",
    description: "Master the fundamentals of JavaScript with hands-on projects and real-world examples.",
    image: "📜",
    instructor: "Alex Johnson",
    rating: 4.7,
    students: 15420,
    price: 49.99,
    duration: "8 weeks",
    category: "Web Development",
    featured: true
  },
  { 
    id: 2,
    title: "React Mastery", 
    level: "Intermediate",
    description: "Build modern web applications with React, hooks, context, and advanced patterns.",
    image: "⚛️",
    instructor: "Sarah Miller",
    rating: 4.9,
    students: 8920,
    price: 79.99,
    duration: "10 weeks",
    category: "Frontend",
    featured: true
  },
  { 
    id: 3,
    title: "Next.js Pro", 
    level: "Advanced",
    description: "Server-side rendering, API routes, and full-stack applications with Next.js.",
    image: "▲",
    instructor: "Mike Chen",
    rating: 4.8,
    students: 6230,
    price: 89.99,
    duration: "12 weeks",
    category: "Full Stack",
    featured: false
  },
  { 
    id: 4,
    title: "Python for Data Science", 
    level: "Intermediate",
    description: "Data analysis, visualization, and machine learning with Python and popular libraries.",
    image: "🐍",
    instructor: "Dr. Emily Zhang",
    rating: 4.6,
    students: 11200,
    price: 69.99,
    duration: "9 weeks",
    category: "Data Science",
    featured: true
  },
  { 
    id: 5,
    title: "Node.js Backend Development", 
    level: "Intermediate",
    description: "Build scalable server-side applications with Node.js, Express, and MongoDB.",
    image: "🟢",
    instructor: "David Wilson",
    rating: 4.5,
    students: 7450,
    price: 74.99,
    duration: "11 weeks",
    category: "Backend",
    featured: false
  },
  { 
    id: 6,
    title: "Mobile Development with React Native", 
    level: "Advanced",
    description: "Create cross-platform mobile apps for iOS and Android using React Native.",
    image: "📱",
    instructor: "Jessica Brown",
    rating: 4.7,
    students: 5680,
    price: 84.99,
    duration: "14 weeks",
    category: "Mobile",
    featured: true
  }
];

export default function CourseList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {courses.map((course) => (
        <CourseCard 
          key={course.id} 
          course={course} 
        />
      ))}
    </div>
  );
}