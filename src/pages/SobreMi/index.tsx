import Navbar from "../../components/Navbar";
import HeroSection from "./HeroSection";
import ApproachSection from "./ApproachSection";
import CTASection from "./CTASection";
import Footer from "../../components/Footer";
import { usePageTitle } from "../../hooks/usePageTitle";
import ApproachAndMethodSection from "./ApproachAndMethodSection";

export default function SobreMi() {
  usePageTitle({
    title: 'Sobre mí',
    description: 'Conoce a Llenia Monteagudo Rodríguez, psicóloga especializada en infancia y familias con más de 15 años de experiencia. Enfoque sistémico, humanista e integrador.'
  });

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar />

      <main>
        <HeroSection />
        <ApproachSection />
        {/* <PhilosophySection /> */}
        {/* <WorkMethodSection /> */}
        <ApproachAndMethodSection />
        <CTASection />        
        <Footer />
      </main>

    </div>
  );
}
      