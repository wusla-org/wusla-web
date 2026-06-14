import Navbar  from "@/components/Navbar";
import HeroBuild from "@/components/hero-build/HeroBuild";
import Services from "@/components/Services";
import WhyUs   from "@/components/WhyUs";
import Work    from "@/components/Work";
import Contact from "@/components/Contact";
import Footer  from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroBuild />
        <Services />
        <WhyUs />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
