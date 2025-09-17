import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import SobreMi from '../pages/SobreMi';
import AcompañamientoInfantil from '../pages/Servicios/AcompañamientoInfantil';
import AcompañamientoParental from '../pages/Servicios/AcompañamientoParental';
import CambioFamiliar from '../pages/Servicios/CambioFamiliar';
import AcompañamientoPsicológicoParaAdultos from '../pages/Servicios/AcompañamientoPsicológicoParaAdultos';
import FortalecimientoVinculosDePareja from '../pages/Servicios/FortalecimientoVinculosDePareja';
import Blog from '../pages/Blog';
import BlogArticle from '../pages/Blog/BlogArticle';
import Contacto from '../pages/Contacto';
import PreguntasFrecuentes from '../pages/PreguntasFrecuentes';
import Testimonios from '../pages/Testimonios';
import ReservaCita from '../pages/ReservaCita';
import Recursos from '../pages/Recursos';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sobre-mi" element={<SobreMi />} />
    <Route path="/servicios/acompañamiento-infantil" element={<AcompañamientoInfantil />} />
    <Route path="/servicios/acompañamiento-parental" element={<AcompañamientoParental />} />
    <Route path="/servicios/cambio-familiar" element={<CambioFamiliar />} />
    <Route path="/servicios/acompañamiento-psicológico-para-adultos" element={<AcompañamientoPsicológicoParaAdultos />} />
    <Route path="/servicios/fortalecimiento-vinculos-de-pareja" element={<FortalecimientoVinculosDePareja />} />
    <Route path="/recursos" element={<Recursos />} />
    <Route path="/recursos/categoria/:slug" element={<Recursos />} />
    <Route path="/recursos/categoria/:slug/:resourceId" element={<Recursos />} />
    <Route path="/recursos/:resourceId" element={<Recursos />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/blog/:slug" element={<BlogArticle />} />
    <Route path="/contacto" element={<Contacto />} />
    <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
    <Route path="/testimonios" element={<Testimonios />} />
    <Route path="/reserva-cita" element={<ReservaCita />} />
  </Routes>
);

export default AppRoutes;
