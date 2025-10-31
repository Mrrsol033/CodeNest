export default function CTASection() {
  return (
    <section className="bg-indigo-600 text-white py-16">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to level up your coding skills?
        </h2>
        <p className="mb-8 text-lg md:text-xl">
          Join CodeNest today and start building real projects while learning from experts.
        </p>
        <a
          href="/signup"
          className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Start Coding Now
        </a>
      </div>
    </section>
  );
}
