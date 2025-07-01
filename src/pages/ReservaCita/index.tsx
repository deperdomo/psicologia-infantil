import { useState } from 'react';
import Navbar from '../../components/Navbar';
import { usePageTitle } from '../../hooks/usePageTitle';

export default function ReservaCita() {
  usePageTitle({
    title: 'Reserva tu Cita',
    description: 'Reserva tu cita de psicología infantil de forma fácil y rápida. Sesiones presenciales y online disponibles. Primera consulta informativa gratuita.'
  });
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Cita reservada para ${nombre} el día ${fecha}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Contenido principal */}
      <main className="max-w-xl mx-auto p-8">
        <h1 className="text-3xl font-semibold mb-6 text-center">Reserva una Cita</h1>
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded shadow-md">
          <div>
            <label className="block text-left font-medium mb-1">Nombre:</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-left font-medium mb-1">Fecha:</label>
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Reservar
          </button>
        </form>
      </main>
    </div>
  );
}
