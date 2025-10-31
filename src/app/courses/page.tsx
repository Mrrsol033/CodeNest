import CoursesList from "../../components/coursesList/CourseList";



export default function CoursesPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">All Courses</h1>
      <CoursesList />
    </main>
  );
}
