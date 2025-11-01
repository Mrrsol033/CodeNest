import HeroSection from "@/components/heroSection/HeroSection";
import Features from "@/components/feature/Features";
import TestimonialsPage from "@/components/testimonials/TestimonialsPage";
import Stats from "@/components/stats/Stats";


export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* Features / Courses */}
      <Features />

      {/* Testimonials */}
      <TestimonialsPage />

      {/* Quick Stats */}
      <Stats />

    </main>
  ); 
}
