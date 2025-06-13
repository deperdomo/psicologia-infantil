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
  emoji: string;
  description: string;
  resources: Resource[];
  color: string;
}
