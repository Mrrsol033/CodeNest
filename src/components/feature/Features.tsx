const featureList = [
  { title: 'Responsive Design', desc: 'Looks great on all devices.' },
  { title: 'Modern UI', desc: 'Clean and attractive interfaces.' },
  { title: 'Easy Integration', desc: 'Works with your favorite tools.' },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <h3 className="text-3xl font-bold text-center mb-12">Features</h3>
      <div className="flex flex-col md:flex-row justify-center gap-10">
        {featureList.map((feature, idx) => (
          <div key={idx} className="max-w-sm p-6 shadow-lg rounded-lg text-center">
            <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
