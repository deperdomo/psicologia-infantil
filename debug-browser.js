// Script para depurar datos de libros recomendados desde el frontend
// Este script debe ejecutarse en la consola del navegador

async function debugBookData() {
  console.log('🔍 Depurando datos de libros recomendados...\n');
  
  try {
    // Obtener datos usando el hook de la aplicación
    const response = await fetch('/api/recursos'); // Si existe
    
    // Si no, usar Supabase directamente
    if (!response || !response.ok) {
      console.log('📡 Conectando con Supabase directamente...');
      
      // Usar el cliente de Supabase del frontend
      const { createClient } = await import('@supabase/supabase-js');
      
      const supabaseUrl = 'https://eabqgmhadverstykzcrr.supabase.co';
      const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhYnFnbWhhZHZlcnN0eWt6Y3JyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIzMTQ2NTYsImV4cCI6MjA2Nzg5MDY1Nn0.aOBa7mGZ7XlmL2Lv7OAhIXuYkYNhF0JRiATstHuCtM8';
      
      const supabase = createClient(supabaseUrl, supabaseKey);
      
      // Obtener libros recomendados
      const { data: libros, error } = await supabase
        .from('recursos')
        .select('id, title, word_public_url, pdf_public_url, word_storage_path, pdf_storage_path')
        .eq('categoria', 'recomendaciones_libros')
        .limit(5);
      
      if (error) {
        console.error('❌ Error Supabase:', error);
        return;
      }
      
      console.log(`📚 Libros encontrados: ${libros.length}`);
      
      libros.forEach(libro => {
        console.log(`\n📖 ${libro.title}`);
        console.log(`   ID: ${libro.id}`);
        console.log(`   Word URL: ${libro.word_public_url || 'NULL'}`);
        console.log(`   PDF URL: ${libro.pdf_public_url || 'NULL'}`);
        console.log(`   Word Path: ${libro.word_storage_path || 'NULL'}`);
        console.log(`   PDF Path: ${libro.pdf_storage_path || 'NULL'}`);
      });
    }
    
  } catch (error) {
    console.error('❌ Error de depuración:', error);
  }
}

// Ejecutar depuración
debugBookData();
