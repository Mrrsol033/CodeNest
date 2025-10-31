const stats = [
  { label: "Students", value: "12K+" },
  { label: "Courses", value: "85+" },
  { label: "Projects", value: "340+" },
];

export default function Stats() {
  return (
    <section className="bg-blue-50 py-12">
      <div className="container mx-auto grid grid-cols-3 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <h3 className="text-4xl font-bold text-blue-700">{s.value}</h3>
            <p className="text-gray-600">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
