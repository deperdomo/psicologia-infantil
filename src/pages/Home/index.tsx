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



export default function Home() {
 
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      <Navbar />
      <Hero />
      <ParentQuestions />
      <ServicesSections />
      <Philosophy />
      <WorkTools />
      <WhyChooseUs />
      <About />
      <CallToAction />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}