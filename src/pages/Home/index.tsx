import WhyChooseUs from '../../components/sections/WhyChooseUs';
import Footer from '../../components/Footer';
import About from '../../components/sections/About';
import TestimonialsSection from '../../components/sections/TestimonialsSections';
import ServicesSections from '../../components/sections/ServicesSections';
import Hero from '../../components/sections/Hero';
import Philosophy from '../../components/sections/Philosophy';
import WorkTools from '../../components/sections/WorkTools';
import CallToAction from '../../components/sections/CallToAction';
import ParentQuestions from '../../components/sections/ParentQuestions';
import Navbar from '../../components/Navbar';
import SEOMeta from '../../components/SEOMeta';
import StructuredData from '../../components/StructuredData';
import { usePageTitle } from '../../hooks/usePageTitle';

export default function Home() {
  usePageTitle({
    title: 'Inicio',
    description: 'Psicología infantil especializada en Madrid. Acompañamiento terapéutico para niños y familias con más de 15 años de experiencia. Consulta presencial y online.'
  });
 
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
          email: "llenia@psicologiainfantil.com",
          telephone: "+34123456789"
        }}
      />
      <Navbar />
      <main id="main-content">
        <Hero />
        <ParentQuestions />
        <ServicesSections />
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