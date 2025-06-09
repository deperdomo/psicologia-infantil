import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'glass-card shadow-lg'
        : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="group flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-lg font-bold text-[var(--text)]">🌱</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-[var(--text)] group-hover:text-[var(--highlight)] transition-colors duration-300">
                  Psicología Infantil
                </h1>
                <p className="text-xs text-[var(--muted-text)] hidden sm:block">
                  Acompañamiento terapéutico
                </p>
              </div>
            </Link>
          </div>

          {/* Navegación desktop */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-2">
              {navItems.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`nav-link nav-transition relative group ${isActive(to)
                      ? 'text-[var(--highlight)] bg-[var(--hover-bg)]'
                      : 'text-[var(--text)] hover:text-[var(--highlight)] hover:bg-[var(--hover-bg)]'
                    }`}
                >
                  <span className="relative z-10">{label}</span>
                  {isActive(to) && (
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-[var(--highlight)] rounded-full"></div>
                  )}
                </Link>
              ))}

              <div className="ml-6 pl-6 border-l border-[var(--border-light)]">
                <Link
                  to="/reserva-cita"
                  className="btn-primary inline-flex items-center space-x-2 nav-button"
                >
                  <span>Reservar Cita</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Botón hamburguesa */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="hamburger-button group relative p-2"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute top-0 left-0 w-full h-0.5 bg-[var(--text)] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''
                  }`}></span>
                <span className={`absolute top-2.5 left-0 w-full h-0.5 bg-[var(--text)] transition-all duration-300 ${isOpen ? 'opacity-0' : ''
                  }`}></span>
                <span className={`absolute top-5 left-0 w-full h-0.5 bg-[var(--text)] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''
                  }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        <div
          className={`lg:hidden transition-all rounded-2xl duration-300 ease-out ${isOpen
              ? 'max-h-screen mt-2 opacity-100 visible'
              : 'max-h-0 opacity-0 invisible'
            } overflow-hidden`}
        >
          <div className="mobile-menu p-6 space-y-1">
            {navItems.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`block nav-link nav-transition px-4 py-3 rounded-xl text-base font-medium ${isActive(to)
                    ? 'text-[var(--highlight)] bg-[var(--hover-bg)]'
                    : 'text-[var(--text)] hover:text-[var(--highlight)] hover:bg-[var(--hover-bg)]'
                  }`}
                onClick={closeMenu}
              >
                {label}
              </Link>
            ))}

            <div className="pt-4 mt-4 border-t border-[var(--border-light)]">
              <Link
                to="/reserva-cita"
                className="btn-primary w-full text-center flex items-center justify-center space-x-2"
                onClick={closeMenu}
              >
                <span>Reservar Cita</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
