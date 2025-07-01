export default function SkipNavigation() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[var(--primary)] text-[var(--text)] px-4 py-2 rounded-lg font-medium z-[10000] focus:outline-none focus:ring-2 focus:ring-[var(--highlight)] focus:ring-offset-2 transition-all duration-200"
      tabIndex={0}
    >
      Saltar al contenido principal
    </a>
  );
}
