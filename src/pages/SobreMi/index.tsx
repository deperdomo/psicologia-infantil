import Navbar from "../../components/Navbar";
import HeroSection from "../../components/sobreMi/HeroSection";
import ApproachSection from "../../components/sobreMi/ApproachSection";
import PhilosophySection from "../../components/sobreMi/PhilosophySection";
import WorkMethodSection from "../../components/sobreMi/WorkMethodSection";
import CTASection from "../../components/sobreMi/CTASection";
import Footer from "../../components/Footer";
import { usePageTitle } from "../../hooks/usePageTitle";

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
        <PhilosophySection />
        <WorkMethodSection />
        <CTASection />        
        <Footer />
      </main>

    </div>
  );
}
      