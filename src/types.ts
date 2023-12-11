import { StaticImageData } from "next/image";

export enum ServiceCategory {
  INSTALLATION = "Installation",
  MAINTENANCE = "Maintenance",
}

export interface AppImage {
  path: StaticImageData;
  altText: string;
}

export interface Action {
  href: string;
  text?: string;
}

export interface CallToAction {
  primary: Action;
  secondary?: Action;
}

export interface ServiceType {
  id: string;
  name: string;
  description?: string;
  cta: CallToAction;
  image: AppImage;
  services?: Array<Service>;
}

export interface ExtensionLength {
  category: string;
  image: AppImage;
}

export interface HairLength {
  category: string;
  image: AppImage;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  cta: CallToAction;
  featuredImage: AppImage;
  images?: AppImage[];
  category?: ServiceCategory;
  requiresHairExtensions?: boolean;
  services?: Service[];
  price?: number;
  rate?: string;
  duration?: string;
}
