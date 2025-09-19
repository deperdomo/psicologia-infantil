import Navbar from "../../components/Navbar";
import HeroSection from "./HeroSection";
import ApproachSection from "./ApproachSection";
import CTASection from "./CTASection";
import Footer from "../../components/Footer";
import { usePageTitle } from "../../hooks/usePageTitle";
import ApproachAndMethodSection from "./ApproachAndMethodSection";
import WorkTools from "../../components/sections/WorkTools";

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
        <ApproachAndMethodSection />
        <WorkTools />
        <CTASection />        
        <Footer />
      </main>

    </div>
  );
}
      