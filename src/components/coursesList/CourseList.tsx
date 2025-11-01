import CourseCard from "../coursesCard/CourseCard";


const courses = [
  { title: "JavaScript Basics", level: "Beginner" },
  { title: "React Mastery", level: "Intermediate" },
  { title: "Next.js Pro", level: "Advanced" },
];

export default function CourseList() {
  return (
    <div className="grid md:grid-cols-3 gap-6 bg-gray-50">
      {courses.map((c) => (
        <CourseCard key={c.title} {...c} />
      ))}
    </div>
  );
}
