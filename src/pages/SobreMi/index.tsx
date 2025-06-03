import Navbar from "../../components/Navbar";
import HeroSection from "./components/HeroSection";
import ApproachSection from "./components/ApproachSection";
import PhilosophySection from "./components/PhilosophySection";
import WorkMethodSection from "./components/WorkMethodSection";
import CTASection from "./components/CTASection";
import SharedStyles from "./components/SharedStyles";
import Footer from "../../components/Footer";

export default function SobreMi() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar />

      <main>
        <HeroSection />
        <ApproachSection />
        <PhilosophySection />
        <WorkMethodSection />
        <CTASection />        
        <SharedStyles />
        <Footer />
      </main>

    </div>
  );
}
      