import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import SobreMi from '../pages/SobreMi';
import Servicios from '../pages/Servicios';
import TerapiaIndividual from '../pages/Servicios/TerapiaIndividual';
import TerapiaDePareja from '../pages/Servicios/TerapiaDePareja';
import TerapiaInfantil from '../pages/Servicios/TerapiaInfantil';
import Blog from '../pages/Blog';
import Contacto from '../pages/Contacto';
import PreguntasFrecuentes from '../pages/PreguntasFrecuentes';
import Testimonios from '../pages/Testimonios';
import ReservaCita from '../pages/ReservaCita';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sobre-mi" element={<SobreMi />} />
    <Route path="/servicios" element={<Servicios />} />
    <Route path="/servicios/terapia-individual" element={<TerapiaIndividual />} />
    <Route path="/servicios/terapia-de-pareja" element={<TerapiaDePareja />} />
    <Route path="/servicios/terapia-infantil" element={<TerapiaInfantil />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/contacto" element={<Contacto />} />
    <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
    <Route path="/testimonios" element={<Testimonios />} />
    <Route path="/reserva-cita" element={<ReservaCita />} />
  </Routes>
);

export default AppRoutes;
