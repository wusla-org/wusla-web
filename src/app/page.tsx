import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import TechStack from "../components/TechStack";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Stats from "../components/Stats";
import Process from "../components/Process";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "WUSLA",
    "url": "https://wusla.com",
    "description": "Custom software development agency building web apps, platforms, and digital products for businesses worldwide.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://wusla.com/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <main className="min-h-screen bg-background text-text-primary">
        <Navbar />
        <Hero />
        <Services />
        <TechStack />
        <Portfolio />
        <Testimonials />
        <Stats />
        <Process />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
