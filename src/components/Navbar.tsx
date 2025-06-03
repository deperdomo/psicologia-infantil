import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { to: '/', label: 'Inicio' },
    { to: '/sobre-mi', label: 'Sobre mí' },
    { to: '/servicios', label: 'Servicios' },
    { to: '/recursos', label: 'Recursos' },
    { to: '/blog', label: 'Blog' },
    { to: '/testimonios', label: 'Testimonios' },
    { to: '/preguntas-frecuentes', label: 'FAQ' },
    { to: '/contacto', label: 'Contacto' },
  ];

  return (
    <nav className="bg-[var(--background)] shadow-sm border-b border-[var(--nav-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-[var(--highlight)] tracking-tight">
              Psicología
            </h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`nav-link nav-transition px-3 py-2 rounded-md text-sm font-medium ${
                    isActive(to)
                      ? 'text-[var(--highlight)] bg-[var(--hover-bg)]'
                      : 'text-[var(--text)] hover:text-[var(--highlight)] hover:bg-[var(--hover-bg)]'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/reserva-cita"
                className="nav-button nav-transition ml-4 px-4 py-2 rounded-md text-sm font-semibold bg-[var(--accent)] text-[var(--button-text)] hover:bg-[var(--button-hover)] shadow-sm"
              >
                Reservar Cita
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="hamburger-button text-[var(--text)] hover:text-[var(--highlight)] focus:outline-none"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-100 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden mobile-menu`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-[var(--card-background)] rounded-b-lg mt-1">
            {navItems.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`nav-transition block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(to)
                    ? 'text-[var(--highlight)] bg-[var(--hover-bg)]'
                    : 'text-[var(--text)] hover:text-[var(--highlight)] hover:bg-[var(--hover-bg)]'
                }`}
                onClick={closeMenu}
              >
                {label}
              </Link>
            ))}
            <div className="pt-4 pb-2 border-t border-[var(--nav-border)]">
              <Link
                to="/reserva-cita"
                className="nav-button nav-transition block w-full text-center px-4 py-3 rounded-md text-base font-semibold bg-[var(--accent)] text-[var(--button-text)] hover:bg-[var(--button-hover)]"
                onClick={closeMenu}
              >
                Reservar Cita
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}