// ===================================
// 🔧 CONFIGURACIÓN DE SUPABASE
// ===================================

import { createClient } from '@supabase/supabase-js'

// Tipos para TypeScript
export interface Recurso {
  id: string
  resource_id: string
  title: string
  description?: string
  categoria: 'cartas_que_curan' | 'colecciones_ayuda' | 'cuentos_terapeuticos' | 'fichas_psicoeducativas' | 'guias_padres' | 'recomendaciones_libros'
  resource_type: 'carta' | 'guia' | 'cuento' | 'ficha' | 'libro' | 'actividad'
  age_ranges: string[]
  difficulty: 'basico' | 'intermedio' | 'avanzado'
  tags: string[]
  word_file_name?: string
  pdf_file_name?: string
  word_storage_path?: string
  pdf_storage_path?: string
  word_public_url?: string
  pdf_public_url?: string
  is_premium: boolean
  is_active: boolean
  file_size_word?: number
  file_size_pdf?: number
  estimated_reading_time?: number
  download_count: number
  view_count: number
  created_at: string
  updated_at: string
}

export interface RecursoDescarga {
  id: string
  recurso_id: string
  file_type: 'word' | 'pdf'
  user_ip?: string
  user_agent?: string
  referrer?: string
  user_email?: string
  user_location?: any
  downloaded_at: string
}

// Variables de entorno
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Faltan las variables de entorno de Supabase')
}

// Cliente de Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// ===================================
// 📚 FUNCIONES PARA RECURSOS
// ===================================

// Obtener todos los recursos activos
export const getRecursos = async (): Promise<Recurso[]> => {
  const { data, error } = await supabase
    .from('recursos')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error al obtener recursos:', error)
    return []
  }

  return data || []
}

// Obtener recursos por categoría
export const getRecursosByCategoria = async (categoria: string): Promise<Recurso[]> => {
  const { data, error } = await supabase
    .from('recursos')
    .select('*')
    .eq('categoria', categoria)
    .eq('is_active', true)
    .order('title')

  if (error) {
    console.error('Error al obtener recursos por categoría:', error)
    return []
  }

  return data || []
}

// Obtener un recurso específico
export const getRecurso = async (resourceId: string): Promise<Recurso | null> => {
  const { data, error } = await supabase
    .from('recursos')
    .select('*')
    .eq('resource_id', resourceId)
    .eq('is_active', true)
    .single()

  if (error) {
    console.error('Error al obtener recurso:', error)
    return null
  }

  return data
}

// ===================================
// 📥 FUNCIONES PARA DESCARGAS
// ===================================

// Registrar descarga
export const registrarDescarga = async (
  recursoId: string,
  fileType: 'word' | 'pdf',
  metadata?: {
    userEmail?: string
    userAgent?: string
    referrer?: string
  }
): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('recurso_descargas')
      .insert({
        recurso_id: recursoId,
        file_type: fileType,
        user_email: metadata?.userEmail,
        user_agent: metadata?.userAgent || navigator.userAgent,
        referrer: metadata?.referrer || document.referrer
      })

    if (error) {
      console.error('Error al registrar descarga:', error)
      return false
    }

    return true
  } catch (error) {
    console.error('Error al registrar descarga:', error)
    return false
  }
}

// Obtener URL firmada para archivo Word
export const getWordDownloadUrl = async (
  resourceId: string,
  expiresIn: number = 3600
): Promise<string | null> => {
  try {
    const recurso = await getRecurso(resourceId)
    if (!recurso?.word_storage_path) {
      return null
    }

    const { data, error } = await supabase.storage
      .from('recursos-word')
      .createSignedUrl(recurso.word_storage_path, expiresIn)

    if (error) {
      console.error('Error al generar URL firmada:', error)
      return null
    }

    return data.signedUrl
  } catch (error) {
    console.error('Error al obtener URL de descarga Word:', error)
    return null
  }
}

// Obtener URL pública para archivo PDF
export const getPdfDownloadUrl = async (resourceId: string): Promise<string | null> => {
  try {
    const recurso = await getRecurso(resourceId)
    if (!recurso?.pdf_storage_path) {
      return null
    }

    const { data } = supabase.storage
      .from('recursos-pdf')
      .getPublicUrl(recurso.pdf_storage_path)

    return data.publicUrl
  } catch (error) {
    console.error('Error al obtener URL de descarga PDF:', error)
    return null
  }
}

// ===================================
// 📤 FUNCIONES PARA SUBIR ARCHIVOS (ADMIN)
// ===================================

// Subir archivo Word
export const uploadWordFile = async (
  file: File,
  resourceId: string
): Promise<string | null> => {
  try {
    const fileName = `${resourceId}/${file.name}`
    
    const { data, error } = await supabase.storage
      .from('recursos-word')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: true
      })

    if (error) {
      console.error('Error al subir archivo Word:', error)
      return null
    }

    return data.path
  } catch (error) {
    console.error('Error al subir archivo Word:', error)
    return null
  }
}

// Subir archivo PDF
export const uploadPdfFile = async (
  file: File,
  resourceId: string
): Promise<string | null> => {
  try {
    const fileName = `${resourceId}/${file.name}`
    
    const { data, error } = await supabase.storage
      .from('recursos-pdf')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: true
      })

    if (error) {
      console.error('Error al subir archivo PDF:', error)
      return null
    }

    return data.path
  } catch (error) {
    console.error('Error al subir archivo PDF:', error)
    return null
  }
}

// ===================================
// 📊 FUNCIONES DE ANALYTICS
// ===================================

// Obtener estadísticas de recursos
export const getRecursosStats = async () => {
  const { data, error } = await supabase
    .from('recursos_con_stats')
    .select('*')
    .order('total_downloads', { ascending: false })

  if (error) {
    console.error('Error al obtener estadísticas:', error)
    return []
  }

  return data || []
}

// Incrementar contador de vistas
export const incrementViewCount = async (resourceId: string): Promise<boolean> => {
  try {
    const { error } = await supabase.rpc('increment_view_count', {
      resource_id_param: resourceId
    })

    return !error
  } catch (error) {
    console.error('Error al incrementar vistas:', error)
    return false
  }
}
