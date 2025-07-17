# 🎨 Guía del Sistema de Diseño - Psicología Infantil

## 📋 Resumen Ejecutivo

Este documento describe el nuevo sistema de diseño implementado en la web de psicología infantil, estableciendo patrones visuales, colores, efectos y componentes que deben seguirse para mantener la coherencia y profesionalismo del sitio.

---

## 🎯 Principios de Diseño

### **Filosofía Visual**
- **Profesional pero Cálido**: Combina credibilidad profesional con calidez humana
- **Minimalista y Moderno**: Interfaces limpias sin elementos innecesarios
- **Centrado en la Experiencia**: Diseño que facilita la navegación y comprensión
- **Accesible y Legible**: Alto contraste y tipografías claras

---

## 🎨 Paleta de Colores Oficial

### **Colores Primarios**
```css
/* Azules - Confianza y Profesionalismo */
--primary-blue: #3B82F6;        /* Azul principal */
--primary-blue-light: #DBEAFE;  /* Azul claro para fondos */
--primary-blue-dark: #1D4ED8;   /* Azul oscuro para acentos */

/* Púrpuras - Creatividad y Sabiduría */
--primary-purple: #8B5CF6;      /* Púrpura principal */
--primary-purple-light: #EDE9FE; /* Púrpura claro */
--primary-purple-dark: #6D28D9;  /* Púrpura oscuro */

/* Rosas - Calidez y Comprensión */
--accent-pink: #EC4899;          /* Rosa principal */
--accent-pink-light: #FCE7F3;    /* Rosa claro */
--accent-pink-dark: #BE185D;     /* Rosa oscuro */
```

### **Colores Secundarios**
```css
/* Verdes - Crecimiento y Bienestar */
--success-green: #10B981;       /* Verde principal */
--success-green-light: #D1FAE5; /* Verde claro */

/* Grises - Neutrales y Texto */
--gray-50: #F8FAFC;            /* Fondos muy claros */
--gray-100: #F1F5F9;           /* Fondos claros */
--gray-200: #E2E8F0;           /* Bordes suaves */
--gray-600: #475569;           /* Texto secundario */
--gray-900: #0F172A;           /* Texto principal */
```

### **Gradientes Oficiales**
```css
/* Gradiente Principal - Azul a Púrpura */
bg-gradient-to-r from-blue-600 to-purple-600

/* Gradiente Secundario - Púrpura a Rosa */
bg-gradient-to-r from-purple-500 to-pink-500

/* Gradiente de Fondo - Suave */
bg-gradient-to-br from-blue-50 via-white to-pink-50
```

---

## 🏗️ Componentes y Patrones

### **1. Tarjetas (Cards)**

#### **Estructura Estándar**
```tsx
<div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
  {/* Header con gradiente */}
  <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-8 relative overflow-hidden">
    {/* Elementos decorativos de fondo */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
    
    {/* Contenido del header */}
  </div>
  
  {/* Contenido principal */}
  <div className="p-8">
    {/* Contenido */}
  </div>
</div>
```

#### **Efectos de Hover**
- `hover:scale-105 hover:-translate-y-2`
- `transition-all duration-500`
- `hover:shadow-2xl`

### **2. Botones**

#### **Botón Primario**
```tsx
<button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg">
  Texto del Botón
</button>
```

#### **Botón Circular de Acción**
```tsx
<div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
  <svg className="w-6 h-6 text-white">
    {/* Icono */}
  </svg>
</div>
```

### **3. Iconos y Elementos Visuales**

#### **Contenedor de Icono**
```tsx
<div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
  <Icon className="w-8 h-8 text-white" />
</div>
```

#### **Puntos Decorativos**
```tsx
<div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-sm"></div>
```

---

## ✨ Efectos y Animaciones

### **Hover Effects Estándar**
```css
/* Escala y elevación */
hover:scale-105 hover:-translate-y-2

/* Sombras dinámicas */
hover:shadow-2xl

/* Rotación sutil */
group-hover:rotate-3

/* Traslación en hover */
group-hover:translate-x-1
```

### **Transiciones**
```css
/* Transición estándar */
transition-all duration-500

/* Transición rápida */
transition-all duration-300

/* Para elementos de texto */
transition-colors duration-300
```

### **Elementos Decorativos de Fondo**
```tsx
{/* Círculos decorativos en headers */}
<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
<div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
```

---

## 📝 Tipografía

### **Jerarquía de Texto**
```css
/* Títulos principales */
text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900

/* Títulos de sección */
text-4xl md:text-5xl font-bold text-gray-900

/* Títulos de tarjeta */
text-2xl font-bold text-white (en headers)
text-xl font-bold text-gray-900 (en contenido)

/* Texto principal */
text-lg text-gray-600 leading-relaxed

/* Texto descriptivo */
text-gray-900 font-bold (importante)
text-gray-700 font-semibold (secundario)
```

### **Gradientes de Texto**
```css
/* Para nombres o elementos destacados */
text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600
```

---

## 🎭 Patrones de Implementación

### **1. Secciones Hero**
- Fondo: `bg-gradient-to-br from-blue-50 via-white to-pink-50`
- Elementos flotantes con `animate-float`
- Texto principal con gradiente
- Estadísticas con colores contrastantes

### **2. Secciones de Contenido**
- Fondo: `bg-gradient-to-br from-gray-50 via-white to-blue-50`
- Cards con headers de gradiente
- Espaciado consistente con `space-y-6` o `space-y-8`

### **3. Call to Action**
- Fondos oscuros: `bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900`
- Elementos glassmorphism: `bg-white/10 backdrop-blur-sm`
- Contraste alto para legibilidad

### **4. Navegación y Headers**
- Glassmorphism: `bg-white/95 backdrop-blur-md`
- Bordes sutiles: `border border-gray-100`
- Efectos de hover suaves

---

## 🔍 Principios de Contraste

### **Texto sobre Fondos**
- **Fondo claro**: `text-gray-900` (principal), `text-gray-600` (secundario)
- **Fondo gradiente**: `text-white` (principal), `text-white/90` (secundario)
- **Fondo oscuro**: `text-white` (principal), `text-blue-100` (secundario)

### **Elementos Interactivos**
- Hover siempre debe cambiar color/escala
- Estados de enfoque claros
- Feedback visual inmediato

---

## 📊 Métricas y Espaciado

### **Espaciado Estándar**
```css
/* Padding interno de cards */
p-8

/* Espaciado entre elementos */
space-y-6 (normal)
space-y-8 (amplio)

/* Margenes de sección */
py-20 lg:py-24 (secciones normales)
py-24 lg:py-32 (secciones hero)
```

### **Radios de Borde**
```css
rounded-2xl (elementos pequeños)
rounded-3xl (cards y contenedores principales)
rounded-full (botones circulares y elementos redondos)
```

### **Sombras**
```css
shadow-lg (normal)
shadow-2xl (hover o destacado)
shadow-xl (elementos importantes)
```

---

## 🎯 Patrones Específicos de Componentes

### **1. EnhancedHero - Página Principal**

#### **Características Clave:**
- **Layout**: Grid 2 columnas (contenido + ilustración)
- **Fondo**: `bg-gradient-to-br from-blue-50 via-white to-pink-50`
- **Elementos flotantes**: Círculos con `blur-3xl` y baja opacidad
- **Trust indicators**: Cards con glassmorphism y iconos
- **Animaciones**: Framer Motion con stagger effects

#### **Elementos Distintivos:**
```tsx
/* Badge de estado con punto animado */
<div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
  Consulta online y presencial
</div>

/* Trust indicators con hover effects */
<div className="flex items-center space-x-3 p-4 bg-white/70 backdrop-blur-sm rounded-lg border border-gray-100 hover:bg-white/90 transition-all duration-300">
  <div className="p-2 bg-blue-100 rounded-lg">
    <Icon className="w-5 h-5 text-blue-600" />
  </div>
</div>

/* Social proof con avatares graduales */
<div className="flex -space-x-2">
  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-pink-400 rounded-full border-2 border-white">
    A
  </div>
</div>
```

### **2. PhilosophySection - Sobre Mí**

#### **Características Clave:**
- **Layout**: Grid 12 columnas (5 para gráfico + 7 para contenido)
- **Gráfico SVG animado**: Círculos concéntricos con gradientes
- **Animaciones CSS**: Keyframes personalizados para dibujar círculos
- **Centro focal**: Icono con glassmorphism en el centro del gráfico

#### **Elementos Distintivos:**
```tsx
/* Animaciones CSS personalizadas */
<style dangerouslySetInnerHTML={{
  __html: `
    @keyframes drawCircle1 {
      from { stroke-dashoffset: 942; }
      to { stroke-dashoffset: 628; }
    }
    .draw-circle-1 {
      animation: drawCircle1 2.5s ease-out 0.5s both;
    }
  `
}} />

/* Gráfico circular con gradientes */
<circle
  cx="192" cy="192" r="150"
  fill="none" stroke="url(#gradient1)" strokeWidth="16"
  strokeLinecap="round" strokeDasharray="314 942"
  strokeDashoffset="942"
  className="draw-circle-1"
/>

/* Etiquetas posicionadas */
<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
  <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-xl border-2 border-white">
    Comprensión
  </div>
</div>

/* Card de contenido con glassmorphism */
<div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-lg">
  <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed italic">
    "Trabajo con una mirada amplia, sensible y práctica..."
  </blockquote>
</div>
```

### **3. BibliotecaCategoryCard - Recursos**

#### **Características Clave:**
- **Estructura dual**: Header con gradiente + contenido blanco
- **Elementos decorativos**: Círculos de fondo en el header
- **Efectos hover**: Escala + traslación vertical + rotación de icono
- **Indicadores visuales**: Puntos de color para tipos de recursos

---

## 🎨 Patrones de Animación Avanzados

### **Framer Motion (EnhancedHero)**
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};
```

### **CSS Animations (PhilosophySection)**
```css
/* Animación de dibujo de círculos */
@keyframes drawCircle1 {
  from { stroke-dashoffset: 942; }
  to { stroke-dashoffset: 628; }
}

.draw-circle-1 {
  animation: drawCircle1 2.5s ease-out 0.5s both;
}
```

### **Elementos Flotantes Animados**
```tsx
<motion.div
  animate={{
    y: [0, -8, 0],
    scale: [1, 1.1, 1]
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }}
/>
```

---

## 🎯 Casos de Uso Específicos

### **Página de Inicio (EnhancedHero)**
- **Hero principal**: Full-screen con grid 2 columnas
- **Trust indicators**: Cards con glassmorphism e iconos profesionales
- **Social proof**: Avatares apilados + ratings con estrellas
- **CTAs duales**: Primario (gradiente) + Secundario (outline)
- **Elementos flotantes**: Animaciones sutiles con Framer Motion
- **Scroll indicator**: Elemento animado en la parte inferior

### **Página Sobre Mí (PhilosophySection + HeroSection)**
- **Layout de dos columnas**: Contenido + foto/gráfico
- **Gráficos SVG animados**: Círculos concéntricos con progresión
- **Elementos glassmorphism**: Centros focales con backdrop-blur
- **Etiquetas posicionadas**: Badges flotantes con conectores visuales
- **Estadísticas profesionales**: Grid con números destacados
- **Frases inspiracionales**: Cards con citas en italic

### **Página de Recursos (BibliotecaCategoryCard)**
- **Grid de categorías**: Cards uniformes con headers coloridos
- **Contadores dinámicos**: Números de recursos visibles
- **Indicadores visuales**: Puntos de colores para tipos de contenido
- **Efectos hover avanzados**: Múltiples transformaciones coordinadas
- **Call to action circular**: Botones con gradiente e iconos

---

## ⚠️ Consideraciones Importantes

### **Accesibilidad**
- Contraste mínimo 4.5:1 para texto normal
- Contraste mínimo 3:1 para texto grande
- Estados de enfoque siempre visibles
- Texto alternativo en imágenes

### **Responsive Design**
- Mobile first approach
- Breakpoints estándar de Tailwind
- Elementos que se adaptan en mobile
- Texto que escala apropiadamente

### **Performance**
- Transiciones no mayores a 500ms
- Animaciones suaves y optimizadas
- Uso moderado de backdrop-blur
- Optimización de imágenes

---

## 🚀 Ejemplos de Implementación

### **Hero Section Avanzado (EnhancedHero)**
```tsx
<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-pink-50">
  {/* Elementos decorativos de fondo */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute top-10 left-10 w-32 h-32 bg-blue-300 rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-300 rounded-full blur-3xl"></div>
  </div>

  <div className="container mx-auto px-6 py-20 relative z-10">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Contenido principal */}
      <div className="space-y-8">
        {/* Badge de estado */}
        <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
          Consulta online y presencial
        </div>
        
        {/* Título principal con gradiente */}
        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          Acompañamos el{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600">
            desarrollo emocional
          </span>{' '}
          de tu hijo
        </h1>
        
        {/* Trust indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6">
          {/* Elementos de confianza con glassmorphism */}
        </div>
      </div>
    </div>
  </div>
</section>
```

### **Sección Filosófica Avanzada (PhilosophySection)**
```tsx
<section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
  {/* Elementos decorativos minimalistas */}
  <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl"></div>
  
  <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
      {/* Gráfico circular animado */}
      <div className="lg:col-span-5">
        <div className="relative w-96 h-96 mx-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 to-white/90 rounded-full border border-gray-300/50 shadow-lg"></div>
          
          {/* SVG con círculos animados */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 384 384">
            <circle
              cx="192" cy="192" r="150"
              fill="none" stroke="url(#gradient1)" strokeWidth="16"
              strokeLinecap="round" strokeDasharray="314 942"
              className="draw-circle-animation"
            />
          </svg>
          
          {/* Centro del gráfico */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-4 bg-white/80 backdrop-blur-sm rounded-full p-6 shadow-xl border border-gray-200">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Icon className="text-3xl text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contenido textual */}
      <div className="lg:col-span-7">
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-lg">
          {/* Contenido de filosofía */}
        </div>
      </div>
    </div>
  </div>
</section>
```

### **Card de Categoría (Recursos)**
```tsx
<div className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
  <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
    <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">Título</h3>
      <p className="text-white/90 leading-relaxed font-medium">Descripción</p>
    </div>
    <div className="p-8">
      {/* Contenido */}
    </div>
  </div>
</div>
```

### **Sección Hero**
```tsx
<section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-pink-50">
  <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Contenido */}
    </div>
  </div>
</section>
```

---

## 📚 Recursos y Referencias

### **Herramientas Utilizadas**
- **Tailwind CSS**: Framework de estilos
- **React Icons**: Iconografía
- **Framer Motion**: Animaciones avanzadas (cuando sea necesario)

### **Fuentes de Inspiración**
- Sitios web de salud mental profesionales
- Interfaces modernas de SaaS
- Diseños minimalistas y profesionales

---

## 🔄 Actualizaciones y Mantenimiento

### **Versionado**
- Versión actual: 2.0
- Última actualización: Enero 2025
- Próxima revisión: Febrero 2025

### **Cambios Recientes**
- ✅ Mejora de contraste en textos (de gray-700 a gray-900)
- ✅ Unificación de gradientes (blue-600 to purple-600)
- ✅ Optimización de efectos hover (escala + traslación)
- ✅ Simplificación de componentes (eliminación de badges innecesarios)
- ✅ Implementación de trust indicators (EnhancedHero)
- ✅ Animaciones SVG personalizadas (PhilosophySection)
- ✅ Elementos glassmorphism consistentes
- ✅ Patrones de Framer Motion estandarizados

---

**📞 Contacto para Dudas de Diseño**
Si necesitas aclaraciones sobre la implementación de estos estilos, consulta este documento o revisa los componentes existentes como referencia.
