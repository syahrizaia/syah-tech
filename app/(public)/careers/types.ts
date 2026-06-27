import { LucideIcon } from "lucide-react";

export interface JobPosition {
  title: string;
  department: string;
  location: string;
  type: string;
  tags: string[];
  link: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: LucideIcon;
  iconContainerClass: string;
  iconClass: string;
}