import { LucideIcon } from "lucide-react";

export interface ResearchPillar {
  title: string;
  description: string;
  icon: LucideIcon;
  hoverClass: string;
  iconClass: string;
}

export interface WhitepaperItem {
  title: string;
  published: string;
  fileSize: string;
  link: string;
}