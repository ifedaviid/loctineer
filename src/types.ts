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

export enum Rate {
  HOURLY = "hourly", // $$$ per hour
  FIXED = "fixed", // $$$
  MINIMUM = "minimum", // $$$ minimum
  MAXIMUM = "maximum", // $$$ maximum
}

export interface Price {
  name?: string;
  value: number;
  rate: Rate;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  cta: CallToAction;
  featuredImage: AppImage;
  images?: AppImage[];
  services?: Service[];
  price?: Price;
  prices?: Price[]
  calendlyEventLinkID?: string;
}
