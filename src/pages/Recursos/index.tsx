import Navbar from "../../components/Navbar";
import { RecursosHero, CollectionsGrid, NewsletterCTA } from "../../components/recursos";
import { collectionsData } from "../../data/collections";
import { usePageTitle } from "../../hooks/usePageTitle";

export default function Recursos() {
  usePageTitle({
    title: 'Recursos Educativos',
    description: 'Accede a nuestra biblioteca de recursos educativos sobre psicología infantil. Guías, artículos y herramientas para padres y profesionales.'
  });
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] relative overflow-hidden">
      <Navbar />
      <RecursosHero />
      <CollectionsGrid collections={collectionsData} />
      <NewsletterCTA />
    </div>
  );
}