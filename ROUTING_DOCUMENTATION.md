# Sistema de Routing para Categorías

## Descripción General

El sistema de routing permite navegar entre las categorías de recursos usando URLs SEO-friendly en lugar de manejo de estado local. Esto mejora la experiencia del usuario y el SEO del sitio.

## Estructura de URLs

### URLs Principales
- **Lista de categorías**: `/recursos`
- **Categoría específica**: `/recursos/categoria/{slug}`

### Ejemplos de URLs Generadas
- `/recursos/categoria/manejo-de-emociones`
- `/recursos/categoria/habilidades-sociales`
- `/recursos/categoria/fortalecimiento-autoestima`
- `/recursos/categoria/desarrollo-autonomia`

## Archivos Implementados

### 1. `src/utils/slugUtils.ts`
Utilidades para convertir títulos de categorías en slugs URL-friendly:
- `createSlug()`: Convierte texto a formato slug
- `getCategorySlug()`: Genera slug para una categoría específica
- `findCategoryBySlug()`: Encuentra una categoría por su slug

### 2. `src/hooks/useCategoryRouting.ts`
Hook personalizado que maneja:
- Detección de categoría actual desde la URL
- Navegación entre categorías
- Scroll automático al cambiar de vista
- Validación de slugs válidos

### 3. `src/pages/Recursos/BibliotecaGrid.tsx` (actualizado)
Componente principal simplificado que usa el hook de routing:
- Eliminación de manejo de estado manual
- Uso del hook `useCategoryRouting`
- Navegación basada en URLs

## Beneficios del Sistema

### UX (Experiencia de Usuario)
- ✅ URLs compartibles y marcables
- ✅ Navegación con botón atrás del navegador
- ✅ Scroll automático al cambiar categorías
- ✅ Mejor navegación por teclado

### SEO (Optimización para Motores de Búsqueda)
- ✅ URLs descriptivas y legibles
- ✅ Soporte para meta tags dinámicos
- ✅ Mejor indexación por categorías
- ✅ URLs amigables para compartir

### Mantenimiento
- ✅ Código más limpio y modular
- ✅ Separación de responsabilidades
- ✅ Reutilización del hook en otros componentes
- ✅ Testing más fácil

## Uso del Hook

```typescript
import { useCategoryRouting } from '../hooks/useCategoryRouting';

function MyComponent() {
  const { 
    selectedCategory,      // Categoría actual (null si estamos en lista)
    navigateToCategory,    // Función para navegar a una categoría
    navigateToCategories   // Función para volver a la lista
  } = useCategoryRouting(categories);

  const handleCategoryClick = (category: BibliotecaCategory) => {
    navigateToCategory(category); // Automáticamente hace scroll y navega
  };

  const handleBackClick = () => {
    navigateToCategories(); // Vuelve a /recursos
  };
}
```

## Flujo de Navegación

1. **Usuario visita `/recursos`**
   - Se muestra la lista de todas las categorías
   - `selectedCategory` es `null`

2. **Usuario hace clic en una categoría**
   - Se ejecuta `navigateToCategory(category)`
   - Se genera el slug y se navega a `/recursos/categoria/{slug}`
   - Se hace scroll automático al top
   - `selectedCategory` contiene la categoría seleccionada

3. **Usuario hace clic en "Volver"**
   - Se ejecuta `navigateToCategories()`
   - Se navega de vuelta a `/recursos`
   - Se hace scroll automático al top

4. **Usuario navega directamente a una URL de categoría**
   - El hook detecta el slug desde la URL
   - Busca la categoría correspondiente
   - Si no existe, redirige a `/recursos`

## Características Técnicas

### Manejo de Caracteres Especiales
- ✅ Soporte para tildes y ñ
- ✅ Conversión automática de caracteres especiales
- ✅ URLs limpias y consistentes

### Validación de Rutas
- ✅ Validación de slugs existentes
- ✅ Redirección automática para slugs inválidos
- ✅ Manejo de errores gracioso

### Performance
- ✅ Memorización de resultados con `useMemo`
- ✅ Evitación de re-renders innecesarios
- ✅ Carga eficiente de datos

## Ejemplo de Implementación Completa

```typescript
// 1. Importar el hook
import { useCategoryRouting } from '../hooks/useCategoryRouting';

// 2. Usar en el componente
function BibliotecaGrid() {
  const { categories } = useSupabaseRecursos();
  const { selectedCategory, navigateToCategory, navigateToCategories } = useCategoryRouting(categories);

  // 3. Renderizado condicional
  if (selectedCategory) {
    return <CategoryView category={selectedCategory} onBack={navigateToCategories} />;
  }

  return <CategoryList categories={categories} onCategorySelect={navigateToCategory} />;
}
```

## Testing

Para probar el sistema:

1. **Navegación desde lista**: Visita `/recursos` y haz clic en una categoría
2. **URL directa**: Visita directamente `/recursos/categoria/manejo-de-emociones`
3. **URL inválida**: Visita `/recursos/categoria/categoria-inexistente` (debe redirigir)
4. **Botón atrás**: Usa el botón atrás del navegador
5. **Scroll**: Verifica que se hace scroll automático al cambiar vistas

## Próximos Pasos

- [ ] Implementar routing para recursos individuales
- [ ] Añadir breadcrumbs de navegación
- [ ] Implementar filtros persistentes en la URL
- [ ] Añadir transiciones animadas entre vistas
