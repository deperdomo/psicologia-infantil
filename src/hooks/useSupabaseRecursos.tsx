import { useEffect, useState } from 'react';
import { getRecursos, type Recurso } from '../lib/supabase';
import { mapSupabaseToCategories } from '../utils/supabaseMapper';
import type { BibliotecaCategory } from '../types/recursos';

// Hook para obtener recursos de Supabase y mapearlos a categorías
export const useSupabaseRecursos = () => {
  const [recursos, setRecursos] = useState<Recurso[]>([]);
  const [categories, setCategories] = useState<BibliotecaCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecursos = async () => {
      try {
        setLoading(true);
        const data = await getRecursos();
        setRecursos(data);
        
        // Mapear recursos a categorías
        const mappedCategories = mapSupabaseToCategories(data);
        setCategories(mappedCategories);
        
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
        setRecursos([]);
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRecursos();
  }, []);

  return { recursos, categories, loading, error };
};
