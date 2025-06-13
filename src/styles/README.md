# 🎨 Sistema de Estilos Modular

Este documento describe la nueva estructura modular de estilos CSS del proyecto.

## 📁 Estructura de Archivos

```
src/styles/
├── index.css                 # 📄 Archivo principal que importa todos los módulos
├── variables/
│   └── colors.css           # 🎨 Paleta de colores y variables CSS
├── base/
│   └── global.css           # 🏗️ Estilos globales y configuración base
├── animations/
│   ├── basic.css            # 🎬 Animaciones básicas (fade, slide, scale)
│   ├── floating.css         # 🎪 Animaciones flotantes y continuas
│   ├── resources.css        # 📦 Animaciones específicas para recursos
│   └── classes.css          # 🎭 Clases de animación aplicables
├── components/
│   ├── navigation.css       # 🧭 Estilos de navegación
│   ├── cards.css            # 🃏 Estilos de tarjetas y glassmorphism
│   └── buttons.css          # 🔘 Estilos de botones
└── utilities/
    ├── shadows.css          # 🌫️ Utilidades de sombras
    ├── spacing.css          # 📏 Utilidades de espaciado
    └── typography.css       # 📝 Utilidades de tipografía
```

## 🎯 Beneficios de la Modularización

### ✅ **Organización Clara**
- Cada tipo de estilo está en su propio archivo
- Fácil de encontrar estilos específicos
- Estructura lógica y predecible

### ✅ **Mantenibilidad**
- Cambios localizados (modificar solo el archivo necesario)
- Menos conflictos en control de versiones
- Depuración más rápida

### ✅ **Reutilización**
- Componentes pueden importar solo los estilos que necesitan
- Variables centralizadas
- Utilidades reutilizables

### ✅ **Rendimiento**
- Mejor tree-shaking
- Carga condicional de estilos
- Compresión más eficiente

## 📚 Guía de Uso

### **Variables CSS**
```css
/* Usar variables definidas en variables/colors.css */
.mi-componente {
  background: var(--primary);
  color: var(--text);
  box-shadow: var(--shadow);
}
```

### **Animaciones**
```css
/* Aplicar clases de animación definidas */
.elemento {
  @apply animate-fadeInUp;
}

/* O usar directamente en HTML */
<div className="animate-fadeInUp delay-200">
```

### **Componentes**
```css
/* Extender estilos de componentes */
.mi-boton {
  @apply btn-primary;
  /* Personalizaciones adicionales */
}
```

### **Utilidades**
```css
/* Usar utilidades para casos comunes */
.contenedor {
  @apply container-padding shadow-soft;
}
```

## 🔧 Añadir Nuevos Estilos

### **Nueva Variable**
Agregar en `variables/colors.css`:
```css
:root {
  --nueva-variable: #valor;
}
```

### **Nueva Animación**
1. Añadir keyframe en el archivo apropiado de `animations/`
2. Crear clase en `animations/classes.css`

### **Nuevo Componente**
1. Crear archivo en `components/`
2. Importar en `index.css`

### **Nueva Utilidad**
1. Crear archivo en `utilities/`
2. Importar en `index.css`

## 🎨 Convenciones de Naming

- **Variables**: `--descriptivo-contexto` (ej: `--button-hover`, `--shadow-lg`)
- **Clases de animación**: `animate-descripcion` (ej: `animate-fadeInUp`)
- **Componentes**: `tipo-variante` (ej: `btn-primary`, `card-hover`)
- **Utilidades**: `tipo-tamaño` (ej: `shadow-soft`, `text-responsive-xl`)

## 📖 Ejemplo de Importación

```css
/* En un componente específico */
@import '../../styles/components/buttons.css';
@import '../../styles/utilities/shadows.css';

/* O usar el sistema completo */
@import '../../styles/index.css';
```
