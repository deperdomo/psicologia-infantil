-- ===================================
-- 📄 ARTÍCULO ACTUALIZADO PARA LLENIA
-- Adaptado para psicóloga individual (sin directorio de profesionales)
-- Sin secciones estructuradas principales
-- ===================================

-- NOTA: Este script ACTUALIZA el artículo existente en lugar de crear uno nuevo
-- Si prefieres crear uno nuevo, cambia UPDATE por INSERT

UPDATE blog_articles SET
  -- ===== RECOMENDACIONES PROFESIONALES ACTUALIZADAS (Para Llenia) =====
  professional_recommendations = '[
    {
      "title": "¿Necesitas apoyo profesional para tu hijo?",
      "subtitle": "Como psicóloga especializada en desarrollo emocional infantil, puedo ayudarte a fortalecer la autoestima de tu hijo con estrategias personalizadas y basadas en evidencia.",
      "cta_text": "Reservar consulta",
      "cta_url": "/reserva-cita",
      "display_type": "professional_cta",
      "position_after_section": "El cerebro infantil y las comparaciones sociales",
      "professional_info": {
        "name": "Llenia",
        "title": "Psicóloga Especialista en Desarrollo Infantil",
        "specialties": ["Autoestima Infantil", "Desarrollo Emocional", "Crianza Consciente", "Ansiedad Infantil"],
        "credentials": "Graduada en Psicología, Máster en Psicología General Sanitaria",
        "image_url": "/professionals/llenia-psicologa.webp",
        "experience_description": "Especializada en acompañar a familias en el fortalecimiento del bienestar emocional infantil",
        "approach": "Enfoque integrador basado en neuropsicología del desarrollo y apego seguro"
      }
    }
  ]'::jsonb,
  
  -- ===== REMOVER SECCIONES ESTRUCTURADAS =====
  key_sections = NULL,
  
  -- ===== ACTUALIZAR CALL TO ACTION PARA LLENIA =====
  call_to_action = 'Si notas que la autoestima de tu hijo se ve persistentemente afectada por comparaciones sociales, o si observas signos de ansiedad, evitación social o comentarios negativos frecuentes sobre sí mismo, puedo ayudarte con estrategias personalizadas. Como psicóloga especializada en desarrollo emocional infantil, ofrezco acompañamiento profesional para fortalecer la autoestima y desarrollar herramientas de afrontamiento saludables. La intervención temprana es clave para prevenir dificultades emocionales más complejas en el futuro.',
  
  -- ===== ACTUALIZAR INFORMACIÓN DE AUTOR PARA LLENIA =====
  author_name = 'Llenia',
  author_email = 'llenia@psicologiainfantil.com',
  author_bio = 'Llenia es psicóloga especializada en desarrollo emocional infantil y acompañamiento familiar. Con una formación sólida en psicología del desarrollo y neuropsicología infantil, se dedica a ayudar a familias a fortalecer los vínculos emocionales y el bienestar de los niños. Su enfoque integrador combina técnicas basadas en evidencia con un acompañamiento empático y personalizado. Llenia cree firmemente en el poder del apego seguro y la crianza consciente para construir las bases de una autoestima sólida desde la infancia.',
  author_credentials = 'Psicóloga colegiada, Especialista en Desarrollo Emocional Infantil y Acompañamiento Familiar',
  author_photo_url = 'https://eabqgmhadverstykzcrr.supabase.co/storage/v1/object/public/blog-images/authors/llenia-monteagudo.jpg',
  author_social_links = '{
    "instagram": "https://instagram.com/llenia.psicologia",
    "linkedin": "https://linkedin.com/in/llenia-psicologa",
    "web": "https://lleniapsicologia.com"
  }'::jsonb,
  
  -- ===== ACTUALIZAR METADATOS =====
  updated_at = NOW()

WHERE slug = 'como-presion-social-afecta-autoestima-ninos';

-- ===== VERIFICAR ACTUALIZACIÓN =====
SELECT 
    title,
    author_name,
    jsonb_pretty(professional_recommendations) as recomendaciones_actualizadas,
    key_sections as secciones_removidas,
    call_to_action
FROM blog_articles 
WHERE slug = 'como-presion-social-afecta-autoestima-ninos';

-- ===================================
-- 📝 OPCIONAL: SI PREFIERES CREAR UN ARTÍCULO COMPLETAMENTE NUEVO
-- ===================================

/*
INSERT INTO blog_articles (
  title,
  subtitle,
  introduction,
  current_data_research,
  reflective_question,
  anonymous_case,
  psychological_analysis,
  practical_recommendations,
  call_to_action,
  empathetic_closing,
  additional_resources,
  FAQ_data,
  summary_points,
  bibliography,
  related_articles,
  external_links,
  image_1_path,
  image_2_path,
  image_3_path,
  image_1_alt,
  image_2_alt,
  image_3_alt,
  featured_image_url,
  social_share_image,
  recommended_products,
  professional_recommendations,
  category,
  subcategory,
  tags,
  target_audience,
  age_range,
  psychological_approach,
  evidence_level,
  topic_complexity,
  slug,
  meta_description,
  meta_keywords,
  excerpt,
  canonical_url,
  schema_markup,
  breadcrumb_data,
  author_name,
  author_email,
  author_bio,
  author_credentials,
  author_photo_url,
  author_social_links,
  status,
  review_status,
  published_at,
  last_reviewed_at,
  is_featured,
  is_trending,
  is_professional_content,
  view_count,
  likes_count,
  shares_count,
  comments_enabled,
  professional_feedback_enabled,
  reading_time_minutes,
  newsletter_mention,
  related_newsletter_content
) VALUES (
  -- Copia aquí todos los valores del archivo original, 
  -- pero con las modificaciones aplicadas arriba
);
*/
