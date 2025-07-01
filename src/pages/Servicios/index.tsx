import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { usePageTitle } from '../../hooks/usePageTitle';

export default function Servicios() {
  usePageTitle({
    title: 'Servicios de Psicología | Terapia Individual, de Pareja e Infantil',
    description: 'Conoce nuestros servicios especializados: terapia individual, de pareja e infantil. Atención personalizada para cada etapa de la vida con enfoque profesional y empático.'
  });
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Contenido principal */}
      <main className="max-w-3xl mx-auto p-8 text-center">
        <h1 className="text-3xl font-semibold mb-6">Servicios</h1>
        <ul className="space-y-4 text-lg text-blue-600">
          <li>
            <Link to="/servicios/terapia-individual" className="hover:underline">
              Terapia Individual
            </Link>
          </li>
          <li>
            <Link to="/servicios/terapia-de-pareja" className="hover:underline">
              Terapia de Pareja
            </Link>
          </li>
          <li>
            <Link to="/servicios/terapia-infantil" className="hover:underline">
              Terapia Infantil
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
