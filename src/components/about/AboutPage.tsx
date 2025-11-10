import { AboutPageType } from "@/types/aboutPageType";
import Image from "next/image";

// Reusable section wrapper
const Section = ({ title, subtitle, children }: AboutPageType) => (
  <section className="max-w-6xl mx-auto px-6 py-20 space-y-10">
    {title && (
      <div className="text-center space-y-3">
        <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider">
          {subtitle || "CodeNest"}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          {title}
        </h2>
      </div>
    )}
    {children}
  </section>
);

// Optional Feature Card component
const FeatureCard = ({ icon, title, description }: AboutPageType) => (
  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
    <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
      <span className="text-xl">{icon}</span> {title}
    </h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f9f9fb] text-gray-800 font-inter">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider">
            About CodeNest
          </p>
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Crafting Spaces, <span className="text-purple-600">Singing Futures</span>
          </h1>
          <div className="space-y-4">
            <p className="text-lg font-medium text-gray-900">
              Built on Experience, Driven by Quality
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              CodeNest is a passion project built from the ground up by a solo
              developer dedicated to creating powerful, elegant solutions for the
              modern web.
            </p>
          </div>
          <button className="bg-purple-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-purple-700 transition-all">
            Learn More
          </button>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=400&q=80"
            alt="Team"
            width={400}
            height={400}
            className="rounded-xl object-cover"
          />
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80"
            alt="Workspace"
            width={400}
            height={400}
            className="rounded-xl object-cover"
          />
          <Image
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
            alt="Developer"
            width={800}
            height={400}
            className="rounded-xl col-span-2 object-cover"
          />
        </div>
      </section>

      {/* Navigation Links Section */}
      <section className="bg-white py-16 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-gray-900">Home</h3>
              <p className="text-gray-600">Start your journey with us</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-gray-900">About</h3>
              <p className="text-gray-600">Learn our story and values</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-gray-900">Meet the Experts</h3>
              <p className="text-gray-600">Behind our success</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-gray-900">Start Your Project</h3>
              <p className="text-gray-600">With us today</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <Section>
        <blockquote className="text-center text-2xl md:text-3xl italic text-gray-700 max-w-3xl mx-auto leading-relaxed">
          We believe great design starts with empathy and ends with impact.
          Our approach is simple — listen, test, solve creatively, and build
          with purpose.
        </blockquote>
        <p className="text-center text-gray-500 mt-4">
          — Rezz, Founder of CodeNest
        </p>
      </Section>

      {/* Testimonials Section */}
      <Section title="What Our Clients Say" subtitle="Testimonials">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              quote: "Exceptional quality and attention to detail. CodeNest delivered beyond our expectations.",
              author: "Sarah Johnson",
              company: "Tech Innovations"
            },
            {
              quote: "The team's expertise and dedication made our project a huge success.",
              author: "Michael Chen",
              company: "StartUp Ventures"
            },
            {
              quote: "Professional, creative, and reliable. Highly recommended for any web project.",
              author: "Emily Rodriguez",
              company: "Design Studio Co."
            }
          ].map((testimonial, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Team Section */}
      <Section title="Meet the Developer" subtitle="Team">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              name: "Rezz",
              role: "Full-Stack Developer",
              img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=80",
            },
            {
              name: "Marcus Silva",
              role: "UI/UX Designer",
              img: "https://images.unsplash.com/photo-1603415526960-f8f0a1f4e90b?auto=format&fit=crop&w=500&q=80",
            },
            {
              name: "Chloe Andersen",
              role: "Frontend Engineer",
              img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=80",
            },
            {
              name: "Isabelle Grant",
              role: "Project Manager",
              img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=500&q=80",
            },
          ].map((member, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all"
            >
              <Image
                src={member.img}
                alt={member.name}
                width={96}
                height={96}
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Awards Section */}
      <Section title="Awards" subtitle="Achievements">
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <table className="w-full text-left text-gray-700">
            <thead>
              <tr className="border-b border-gray-200 text-gray-500 uppercase text-sm">
                <th className="py-3">Name of the Award</th>
                <th className="py-3">Description</th>
                <th className="py-3 text-right">Year</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-4 font-medium">Best Developer Project</td>
                <td>Recognized for innovative web solutions and UX design</td>
                <td className="py-4 text-right">2024</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-4 font-medium">Clarity UX Impact</td>
                <td>Delivered a top-tier interface that enhanced engagement</td>
                <td className="py-4 text-right">2023</td>
              </tr>
              <tr>
                <td className="py-4 font-medium">Excellence in Frontend</td>
                <td>Awarded for refined, accessible, and modern design</td>
                <td className="py-4 text-right">2022</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="text-center bg-white border border-gray-200 rounded-2xl p-12 shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Build Your Vision?
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Have a Project in Mind? Let&apos;s Build it.
          </p>
          <a
            href="#"
            className="inline-block bg-purple-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 text-center py-10 text-gray-500 text-sm">
        <p>Built with ❤️ by a solo developer | © 2025 CodeNest</p>
      </footer>
    </div>
  );
}