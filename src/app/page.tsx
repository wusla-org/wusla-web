import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProcessSection from "@/components/ProcessSection";
import WhySection from "@/components/WhySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does WUSLA do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WUSLA acts as your dedicated tech team — building web apps, mobile apps, and business systems, then staying involved long-term.",
        },
      },
      {
        "@type": "Question",
        name: "How is WUSLA different from hiring developers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No recruitment, no onboarding, no context loss. WUSLA plugs in from day one and stays as long as you need.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <ServicesSection />
        <ProjectsSection />
        <ProcessSection />
        <WhySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
