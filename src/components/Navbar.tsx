import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar si el menú móvil está abierto

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Psicología</h1>

        {/* Botón de hamburguesa para móviles */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            aria-label="Abrir menú"
          >
            {isOpen ? (
              // Icono de cerrar (X)
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Icono de hamburguesa
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Menú de navegación para desktop */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? 'text-blue-600 font-semibold' : 'hover:text-blue-500'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sobre-mi"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 font-semibold' : 'hover:text-blue-500'
              }
            >
              Sobre mí
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/servicios"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 font-semibold' : 'hover:text-blue-500'
              }
            >
              Servicios
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 font-semibold' : 'hover:text-blue-500'
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/testimonios"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 font-semibold' : 'hover:text-blue-500'
              }
            >
              Testimonios
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/preguntas-frecuentes"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 font-semibold' : 'hover:text-blue-500'
              }
            >
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacto"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 font-semibold' : 'hover:text-blue-500'
              }
            >
              Contacto
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reserva-cita"
              className={({ isActive }) =>
                isActive
                  ? 'bg-blue-600 text-white px-3 py-1 rounded-md'
                  : 'bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600'
              }
            >
              Reserva
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Menú de navegación para móviles (aparece al abrir la hamburguesa) */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden bg-white shadow-lg py-2`}
      >
        <ul className="flex flex-col gap-4 text-sm font-medium px-4">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? 'text-blue-600 font-semibold block py-2' : 'hover:text-blue-500 block py-2'
              }
              onClick={closeMenu} // Cerrar menú al hacer clic en un enlace
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sobre-mi"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 font-semibold block py-2' : 'hover:text-blue-500 block py-2'
              }
              onClick={closeMenu}
            >
              Sobre mí
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/servicios"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 font-semibold block py-2' : 'hover:text-blue-500 block py-2'
              }
              onClick={closeMenu}
            >
              Servicios
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 font-semibold block py-2' : 'hover:text-blue-500 block py-2'
              }
              onClick={closeMenu}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/testimonios"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 font-semibold block py-2' : 'hover:text-blue-500 block py-2'
              }
              onClick={closeMenu}
            >
              Testimonios
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/preguntas-frecuentes"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 font-semibold block py-2' : 'hover:text-blue-500 block py-2'
              }
              onClick={closeMenu}
            >
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacto"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 font-semibold block py-2' : 'hover:text-blue-500 block py-2'
              }
              onClick={closeMenu}
            >
              Contacto
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reserva-cita"
              className={({ isActive }) =>
                isActive
                  ? 'bg-blue-600 text-white px-3 py-1 rounded-md block text-center mt-2' // Añadido mt-2 para espaciado
                  : 'bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 block text-center mt-2'
              }
              onClick={closeMenu}
            >
              Reserva
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}