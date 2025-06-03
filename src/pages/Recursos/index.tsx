import Navbar from "../../components/Navbar";

export default function Recursos() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Contenido principal */}
      <main className="max-w-3xl mx-auto p-8 text-center">
        <h1 className="text-3xl font-semibold mb-6">Recursos Útiles</h1>
        <ul className="space-y-4 text-lg text-blue-600">
          <li>
            <a href="/recursos/guia-de-autocuidado" className="hover:underline">Guía de Autocuidado</a>
          </li>
          <li>
            <a href="/recursos/ejercicios-de-mentales" className="hover:underline">Ejercicios de Mentales</a>
          </li>
          <li>
            <a href="/recursos/articulos-sobre-salud-mental" className="hover:underline">Artículos sobre Salud Mental</a>
          </li>
        </ul>
      </main>
    </div>
  );
}