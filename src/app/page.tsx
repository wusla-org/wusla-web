import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import MouseSpotlight from "../components/MouseSpotlight";

export default function Home() {
  // AEO: Structured Data definitions
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "WUSLA",
    "url": "https://wusla.com",
    "description": "Premium digital agency for web and mobile development.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-background text-text-primary selection:bg-white/20 selection:text-white overflow-x-hidden">
        <MouseSpotlight />
        <Navbar />
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </>
  );
}