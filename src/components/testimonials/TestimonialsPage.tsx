const testimonials = [
  { name: "Sophia L.", text: "CodeNest helped me land my first dev job!" },
  { name: "Jake P.", text: "The challenges make learning fun and practical." },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">What Our Learners Say</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-white shadow rounded-xl p-6 max-w-sm mx-auto">
            <p className="italic text-gray-700">“{t.text}”</p>
            <h4 className="mt-4 font-semibold">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
