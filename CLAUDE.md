# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

### Development
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production version (TypeScript compilation + Vite build)
- `npm run lint` - Run ESLint checks
- `npm run preview` - Preview production build

### Testing
No specific test framework is configured. Check with the user before assuming any testing approach.

## Architecture Overview

### Tech Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: TailwindCSS 4.1 with custom animations and themes
- **Database**: Supabase (PostgreSQL)
- **Routing**: React Router DOM v7
- **State Management**: React hooks (no external state management)
- **Email**: EmailJS integration
- **Icons**: Lucide React + React Icons

### Project Structure
This is a psychology practice website with a comprehensive blog system:

```
src/
├── components/        # Reusable UI components
│   ├── blog/         # Blog-specific components (cards, grids, content)
│   ├── hero/         # Landing page hero sections  
│   ├── illustrations/# SVG illustrations and graphics
│   └── sections/     # Page section components
├── pages/            # Route components organized by feature
│   ├── Blog/         # Blog listing and individual articles
│   ├── Servicios/    # Psychology services pages
│   └── [Others]/     # Contact, FAQ, Testimonials, etc.
├── lib/              # External service integrations
├── types/            # TypeScript type definitions
├── utils/            # Helper functions and utilities
├── config/           # Configuration files
└── styles/           # CSS organization (animations, variables, etc.)
```

### Key Features

#### Blog System
The blog system is inspired by PsicologíayMente.com architecture and includes:
- Professional article authoring with credentials and biography
- Structured bibliography and references system
- Category-based organization for psychology content
- Advanced SEO with schema markup for educational content
- Image management through Supabase Storage (up to 3 images per article)
- Professional commenting system with moderation
- Featured and trending article promotion

#### Supabase Integration
- Main database connection via `src/lib/supabase.ts`
- Blog-specific functions in `src/lib/supabaseBlog.ts`
- Complex blog article type definition in `src/types/blog.ts`
- Database parsing utilities in `src/types/blogDatabase.ts`

### Route Structure
The application uses client-side routing with these main routes:
- `/` - Home page
- `/sobre-mi` - About page  
- `/servicios/*` - Psychology services (5 different specialties)
- `/blog` - Blog listing
- `/blog/:slug` - Individual blog articles
- `/recursos` - Resources section
- `/contacto` - Contact page
- `/reserva-cita` - Appointment booking

### Component Patterns
- Functional components with TypeScript
- Custom hooks for data fetching (especially blog data)
- Reusable card components for articles and resources
- Error boundaries for graceful error handling
- Accessibility features with skip navigation

### Styling System
- TailwindCSS with extensive custom animations (fadeInUp, slideInRight, float, etc.)
- Theme-based color system optimized for psychology practice branding
- Responsive design patterns throughout
- Custom CSS for specialized psychology-themed styling in `src/styles/psychology-theme.css`

### Database Schema
The blog system uses a comprehensive `blog_articles` table with:
- Content fields (title, subtitle, introduction, analysis, recommendations)
- Professional metadata (author credentials, evidence level, psychological approach)
- SEO optimization (meta descriptions, schema markup, breadcrumb data)
- Media management (multiple image paths and alt texts)
- Categorization and tagging system
- Engagement metrics (views, likes, shares)

## Important Notes

### Content Guidelines
This is a professional psychology practice website. All content should be:
- Professional and educational in tone
- Focused on child psychology and family therapy
- Scientifically accurate and evidence-based
- Inclusive and culturally sensitive

### Environment Configuration
- Supabase configuration requires `.env` file with database credentials
- The project uses Netlify for deployment with SPA routing configuration in `netlify.toml`

### Development Workflow
- The project follows conventional commit patterns
- ESLint configuration includes React hooks rules and refresh rules
- TypeScript strict mode is enabled across all configurations
- Code is organized by feature with clear separation of concerns

### Blog Development
When working on blog features, reference the comprehensive guides:
- `GUIA_DESARROLLO_BLOG.md` - Complete development guide
- `GUIA_ESTRUCTURA_ARTICULOS_PSICOLOGIA_Y_MENTE.md` - Content structure guidelines
- Multiple SQL examples for database operations