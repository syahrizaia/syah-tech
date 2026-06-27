/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ProductItem {
  id: string;
  name: string;
  version: string;
  tagline: string;
  description: string;
  icon: React.ComponentType<any>;
  colorClass: string;
  badgeColor: string;
  features: string[];
  metrics: { label: string; value: string };
}

export interface ShowcaseWebsite {
  title: string;
  category: string;
  tech: string[];
  performance: string;
  link: string;
  description: string;
}