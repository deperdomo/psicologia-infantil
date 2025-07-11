import type { IconType } from 'react-icons';

export type AgeRange = '0-3' | '3-6' | '6-12' | '12+' | 'todas';
export type ResourceType = 'carta' | 'guia' | 'cuento' | 'ficha' | 'libro' | 'actividad';
export type Difficulty = 'basico' | 'intermedio' | 'avanzado';

export interface Resource {
  id: string;
  title: string;
  description: string;
  fileName: string;
  fileSize?: string;
  type: 'gratuito' | 'premium';
  resourceType: ResourceType;
  ageRange: AgeRange[];
  difficulty: Difficulty;
  estimatedTime?: string;
  tags: string[];
  relatedResources?: string[];
  downloadUrl?: string;
  preview?: string;
}

export interface BibliotecaCategory {
  id: string;
  title: string;
  icon: IconType;
  description: string;
  folderPath: string;
  color: string;
  resources: Resource[];
  subcategories?: BibliotecaSubcategory[];
}

export interface BibliotecaSubcategory {
  id: string;
  title: string;
  description: string;
  resources: Resource[];
}

// Legacy interface for backward compatibility
export interface Collection {
  id: string;
  title: string;
  icon: IconType;
  description: string;
  resources: Resource[];
  color: string;
}
