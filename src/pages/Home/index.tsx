import WhyChooseUs from '../../components/sections/WhyChooseUs';
import Footer from '../../components/Footer';
import About from '../../components/sections/About';
import TestimonialsSection from '../../components/sections/TestimonialsSections';
import Philosophy from '../../components/sections/Philosophy';
import CallToAction from '../../components/sections/CallToAction';
import IdentificationSituations from '../../components/sections/IdentificationSituations';
import Navbar from '../../components/Navbar';
import SEOMeta from '../../components/SEOMeta';
import StructuredData from '../../components/StructuredData';
import { usePageTitle } from '../../hooks/usePageTitle';
import { EnhancedHero } from '../../components/hero/EnhancedHero';
import ServicesOffering from '../../components/sections/ServicesOffering';
import WorkTools from '../../components/sections/WorkTools';

export default function Home() {
  usePageTitle({
    title: 'Inicio',
    description: 'Psicología infantil especializada en Madrid. Acompañamiento terapéutico para niños y familias con más de 15 años de experiencia. Consulta presencial y online.'
  });

  const handleGetStarted = () => {
    // Scroll to contact or services section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMore = () => {
    // Scroll to services section
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
 
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text)] hardware-acceleration"> 
      <SEOMeta 
        title="Inicio"
        description="Psicología infantil especializada en Madrid. Acompañamiento terapéutico para niños y familias con más de 15 años de experiencia. Consulta presencial y online."
        keywords="psicología infantil, terapia infantil, psicólogo niños Madrid, acompañamiento terapéutico, familia"
        url="https://piscologiainfantil.com"
      />
      <StructuredData 
        type="website" 
        data={{
          name: "Psicología Infantil - Llenia Monteagudo",
          url: "https://piscologiainfantil.com",
          description: "Psicología infantil especializada en Madrid. Acompañamiento terapéutico para niños y familias."
        }}
      />
      <StructuredData 
        type="person" 
        data={{
          name: "Llenia Monteagudo Rodríguez",
          jobTitle: "Psicóloga Infantil",
          email: "lleniavinculoycrecimiento@gmail.com",
          telephone: "+34641123622"
        }}
      />
      <Navbar />
      <main id="main-content">
        <EnhancedHero 
          onGetStarted={handleGetStarted}
          onLearnMore={handleLearnMore}
        />
        <IdentificationSituations />
        <ServicesOffering />
        <Philosophy />
        <WorkTools />
        <WhyChooseUs />
        <About />
        <CallToAction />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}