import Navbar from "../../components/Navbar";
import { RecursosHero, CollectionsGrid, NewsletterCTA } from "../../components/recursos";
import { collectionsData } from "../../data/collections";

export default function Recursos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] relative overflow-hidden">
      <Navbar />
      <RecursosHero />
      <CollectionsGrid collections={collectionsData} />
      <NewsletterCTA />
    </div>
  );
}