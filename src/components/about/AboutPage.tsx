import { AboutPageType } from "@/types/aboutPageType";

// Reusable components
const SectionCard = ({ children, className = "" }) => (
  <section
    className={`bg-white rounded-2xl p-10 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 ${className}`}
  >
    {children}
  </section>
);

const FeatureCard = ({icon, title, description}: AboutPageType ) => (
  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
    <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
      <span className="text-xl">{icon}</span> {title}
    </h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const aboutConfig = {
  siteName: "CodeNest",
  brandColor: "purple",
  hero: {
    title: "We take pride in delivering",
    subtitle: "Exceptional results",
    description:
      "We’re a digital agency focused on crafting high-performing websites and marketing strategies that fuel growth.",
  },
  introduction: {
    title: "Welcome to CodeNest",
    content: `CodeNest is a passion project built from the ground up by a solo developer 
      dedicated to creating powerful, elegant solutions for the modern web.`,
  },
  features: {
    title: "What Makes CodeNest Different",
    items: [
      {
        icon: "⚡",
        title: "Built with Passion",
        description: "Every feature is crafted with care and attention to detail.",
      },
      {
        icon: "🎯",
        title: "User-Focused",
        description: "Designed with your needs and experience in mind.",
      },
      {
        icon: "🚀",
        title: "Always Evolving",
        description: "Continuously improved and updated with new features.",
      },
      {
        icon: "💡",
        title: "Innovation First",
        description: "Pushing boundaries and exploring new possibilities.",
      },
    ],
  },
  story: {
    title: "The Story",
    paragraphs: [
      `Every great project starts with an idea. CodeNest began as a personal 
        challenge to create something meaningful—a place where code meets creativity, 
        and functionality meets design.`,
      `As a solo developer, I've poured my heart into every line of code, every 
        design decision, and every feature.`,
    ],
  },
  developer: {
    title: "Meet the Developer",
    paragraphs: [
      `Hi! I'm a full-stack developer passionate about building beautiful, 
        functional web applications.`,
      `When I’m not coding, I’m exploring new technologies or improving CodeNest.`,
    ],
  },
  cta: {
    title: "Join the Journey",
    description:
      "CodeNest is constantly growing. Be part of something special today.",
    buttonText: "Get Started",
    buttonLink: "#",
  },
  footer: {
    text: "Built with ❤️ by a solo developer",
    copyright: "© 2025 CodeNest",
  },
};

export default function AboutPage({ config = aboutConfig }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">

        {/* Hero Section */}
        <header className="text-center space-y-6">
          <p className="text-sm uppercase tracking-widest text-purple-600 font-semibold">
            About {config.siteName}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            {config.hero.title} <br />
            <span className="text-purple-600">{config.hero.subtitle}</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {config.hero.description}
          </p>
        </header>

        {/* Introduction */}
        <SectionCard>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            {config.introduction.title}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {config.introduction.content}
          </p>
        </SectionCard>

        {/* The Story */}
        <SectionCard>
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            {config.story.title}
          </h2>
          <div className="space-y-4">
            {config.story.paragraphs.map((p, i) => (
              <p key={i} className="text-gray-600 leading-relaxed text-lg">
                {p}
              </p>
            ))}
          </div>
        </SectionCard>

        {/* Features */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-gray-900 text-center">
            {config.features.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.features.items.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </section>

        {/* Developer */}
        <SectionCard>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            {config.developer.title}
          </h2>
          {config.developer.paragraphs.map((p, i) => (
            <p key={i} className="text-gray-600 leading-relaxed text-lg mb-4">
              {p}
            </p>
          ))}
        </SectionCard>

        {/* CTA */}
        <section className="text-center bg-white border border-gray-200 rounded-2xl p-12 shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {config.cta.title}
          </h2>
          <p className="text-gray-600 text-lg mb-6">{config.cta.description}</p>
          <a
            href={config.cta.buttonLink}
            className="inline-block bg-purple-600 text-white font-medium px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200"
          >
            {config.cta.buttonText}
          </a>
        </section>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-gray-200 text-gray-500 text-sm">
          <p>
            {config.footer.text} | {config.footer.copyright}
          </p>
        </footer>
      </div>
    </div>
  );
}
