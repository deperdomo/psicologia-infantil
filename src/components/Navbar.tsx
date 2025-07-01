import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
// react-icons imports - replacing emojis and SVG icons
import { GiSprout } from 'react-icons/gi'; // Replacing 🌱 emoji
import { IoChevronDown } from 'react-icons/io5'; // Replacing chevron down SVG
import { IoCalendarOutline } from 'react-icons/io5'; // Replacing calendar SVG

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Manage focus for mobile menu
    if (!isOpen) {
      setTimeout(() => {
        const firstMenuItem = mobileMenuRef.current?.querySelector('a');
        firstMenuItem?.focus();
      }, 100);
    }
  };
  const closeMenu = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };
  const navItems = [
    { to: '/', label: 'Inicio' },
    { to: '/sobre-mi', label: 'Sobre mí' },
    { to: '/recursos', label: 'Recursos' },
    { to: '/blog', label: 'Blog' },
    { to: '/testimonios', label: 'Testimonios' },
    { to: '/preguntas-frecuentes', label: 'FAQ' },
    { to: '/contacto', label: 'Contacto' },
  ];

  const serviciosItems = [
    { to: '/servicios/terapia-infantil', label: 'Terapia Infantil' },
    { to: '/servicios/orientacion-a-madres-y-padres', label: 'Orientación a Madres y Padres' },
    { to: '/servicios/acompañamiento-en-cambio-familiar', label: 'Acompañamiento en Cambio Familiar' },
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
                {/* Replaced 🌱 emoji with GiSprout icon for better consistency and accessibility */}
                <GiSprout 
                  className="text-lg text-[var(--text)]" 
                  aria-label="Icono de crecimiento y desarrollo"
                  title="Psicología Infantil - Crecimiento y Desarrollo"
                />
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
          </div>          {/* Navegación desktop */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-2">
              {navItems.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`nav-link nav-transition relative group focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:rounded-lg ${isActive(to)
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

              {/* Desplegable de Servicios */}
              <div className="relative" ref={dropdownRef}>
                <button
                  ref={servicesButtonRef}
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setIsServicesOpen(!isServicesOpen);
                    }
                  }}
                  className={`nav-link nav-transition relative group flex items-center space-x-1 ${location.pathname.startsWith('/servicios')
                      ? 'text-[var(--highlight)] bg-[var(--hover-bg)]'
                      : 'text-[var(--text)] hover:text-[var(--highlight)] hover:bg-[var(--hover-bg)]'
                    }`}
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                  aria-label="Menú de servicios"
                >
                  <span className="relative z-10">Servicios</span>
                  {/* Replaced SVG chevron with IoChevronDown for consistency */}
                  <IoChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                  {location.pathname.startsWith('/servicios') && (
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-[var(--highlight)] rounded-full"></div>
                  )}
                </button>

                {/* Menú desplegable */}
                <div 
                  className={`absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-[var(--border-light)] transition-all duration-200 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  } z-50`}
                  role="menu"
                  aria-label="Menú de servicios"
                >
                  <div className="p-2">
                    {serviciosItems.map(({ to, label }) => (
                      <Link
                        key={to}
                        to={to}
                        role="menuitem"
                        className={`block px-4 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 ${isActive(to)
                            ? 'text-[var(--highlight)] bg-[var(--hover-bg)]'
                            : 'text-[var(--text)] hover:text-[var(--highlight)] hover:bg-[var(--hover-bg)]'
                          }`}
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="ml-6 pl-6 border-l border-[var(--border-light)]">
                <Link
                  to="/reserva-cita"
                  className="btn-primary inline-flex items-center space-x-2 nav-button"
                >
                  <span>Reservar Cita</span>
                  {/* Replaced calendar SVG with IoCalendarOutline for better consistency */}
                  <IoCalendarOutline 
                    className="w-4 h-4" 
                    aria-hidden="true"
                  />
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
          ref={mobileMenuRef}
          className={`lg:hidden absolute top-full left-0 w-full bg-white/90 backdrop-blur-md border-t border-[var(--border-light)] transition-all duration-300 ease-out z-[9999] ${isOpen
              ? 'max-h-screen opacity-100 visible'
              : 'max-h-0 opacity-0 invisible'
            } overflow-auto`}
          role="menu"
          aria-label="Menú de navegación móvil"
        >
          <div className="mobile-menu p-6 space-y-1">
            {navItems.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                role="menuitem"
                className={`block nav-link nav-transition px-4 py-3 rounded-xl text-base font-medium focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 ${isActive(to)
                  ? 'text-[var(--highlight)] bg-[var(--hover-bg)]'
                  : 'text-[var(--text)] hover:text-[var(--highlight)] hover:bg-[var(--hover-bg)]'
                  }`}
                onClick={closeMenu}
              >
                {label}
              </Link>
            ))}

            {/* Servicios en móvil */}
            <div className="space-y-1">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`w-full text-left nav-link nav-transition px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 ${location.pathname.startsWith('/servicios')
                    ? 'text-[var(--highlight)] bg-[var(--hover-bg)]'
                    : 'text-[var(--text)] hover:text-[var(--highlight)] hover:bg-[var(--hover-bg)]'
                  }`}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                aria-label="Menú de servicios"
              >
                <span>Servicios</span>
                {/* Replaced SVG chevron with IoChevronDown for consistency */}
                <IoChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>

              <div className={`ml-4 space-y-1 transition-all duration-300 ${isServicesOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                <Link
                  to="/servicios"
                  className="block nav-link nav-transition px-4 py-3 rounded-xl text-sm text-[var(--text)] hover:text-[var(--highlight)] hover:bg-[var(--hover-bg)] border-b border-[var(--border-light)] mb-2"
                  onClick={closeMenu}
                >
                  Ver Todos los Servicios
                </Link>
                {serviciosItems.map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    className={`block nav-link nav-transition px-4 py-3 rounded-xl text-sm ${isActive(to)
                        ? 'text-[var(--highlight)] bg-[var(--hover-bg)]'
                        : 'text-[var(--text)] hover:text-[var(--highlight)] hover:bg-[var(--hover-bg)]'
                      }`}
                    onClick={closeMenu}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-[var(--border-light)]">
              <Link
                to="/reserva-cita"
                className="btn-primary w-full text-center flex items-center justify-center space-x-2"
                onClick={closeMenu}
              >
                <span>Reservar Cita</span>
                {/* Replaced calendar SVG with IoCalendarOutline for better consistency */}
                <IoCalendarOutline 
                  className="w-4 h-4" 
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
