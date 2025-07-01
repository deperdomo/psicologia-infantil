import type { IconType } from 'react-icons';

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'gratuito' | 'premium';
  downloadUrl?: string;
}

export interface Collection {
  id: string;
  title: string;
  // Changed from emoji string to React icon component for better consistency and accessibility
  icon: IconType;
  description: string;
  resources: Resource[];
  color: string;
}
