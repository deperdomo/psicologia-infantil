import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
    // { to: '/testimonios', label: 'Testimonios' },
    { to: '/contacto', label: 'Contacto' },
  ];

  const serviciosItems = [
    { to: '/servicios/acompañamiento-infantil', label: 'Acompañamiento Infantil' },
    { to: '/servicios/acompañamiento-parental', label: 'Acompañamiento Parental' },
    { to: '/servicios/cambio-familiar', label: 'Cambio Familiar' },
    { to: '/servicios/acompañamiento-psicológico-para-adultos', label: 'Acompañamiento Psicológico para Adultos' },
    { to: '/servicios/fortalecimiento-vinculos-de-pareja', label: 'Fortalecimiento de vínculos de pareja' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white shadow-sm border-gray-100'
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Simple */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="Llenia Monteagudo - Psicóloga Infantil" 
                className="w-8 h-8 rounded-lg object-contain"
              />
              <div>
                <h1 className="text-lg font-semibold text-gray-900">
                  Llenia Monteagudo
                </h1>
                <p className="text-xs text-gray-600">
                  Psicóloga Infantil
                </p>
              </div>
            </Link>
          </div>

          {/* Navegación Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(to)
                    ? 'text-purple-600'
                    : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                {label}
              </Link>
            ))}

            {/* Servicios Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`text-sm font-medium transition-colors duration-200 flex items-center space-x-1 ${
                  location.pathname.startsWith('/servicios')
                    ? 'text-purple-600'
                    : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                <span>Servicios</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isServicesOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Simple */}
              <div 
                className={`absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-200 ${
                  isServicesOpen 
                    ? 'opacity-100 visible translate-y-0' 
                    : 'opacity-0 invisible -translate-y-2'
                } z-50`}
              >
                <div className="py-2">
                  {serviciosItems.map(({ to, label }) => (
                    <Link
                      key={to}
                      to={to}
                      className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                        isActive(to)
                          ? 'text-purple-600 bg-purple-50'
                          : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
                      }`}
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Simple */}
            <Link
              to="/reserva-cita"
              className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors duration-200"
            >
              Reservar Cita
            </Link>
          </div>

          {/* Hamburger Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:text-purple-600 transition-colors duration-200"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute top-0 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2.5' : ''
                }`}></span>
                <span className={`absolute top-2.5 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`absolute top-5 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-2.5' : ''
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden transition-all duration-300 ease-out ${
            isOpen
              ? 'max-h-96 opacity-100 visible'
              : 'max-h-0 opacity-0 invisible overflow-hidden'
          }`}
        >
          <div className="py-4 space-y-1 border-t border-gray-100">
            {navItems.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`block px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(to)
                    ? 'text-purple-600'
                    : 'text-gray-700 hover:text-purple-600'
                }`}
                onClick={closeMenu}
              >
                {label}
              </Link>
            ))}

            {/* Mobile Services */}
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors duration-200 flex items-center justify-between ${
                  location.pathname.startsWith('/servicios')
                    ? 'text-purple-600'
                    : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                <span>Servicios</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isServicesOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`transition-all duration-300 ${
                isServicesOpen ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
              }`}>
                {serviciosItems.map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    className={`block px-8 py-2 text-sm transition-colors duration-200 ${
                      isActive(to)
                        ? 'text-purple-600'
                        : 'text-gray-600 hover:text-purple-600'
                    }`}
                    onClick={closeMenu}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="pt-4 mt-4 border-t border-gray-100">
              <Link
                to="/reserva-cita"
                className="block w-full text-center bg-purple-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors duration-200"
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
