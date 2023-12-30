import { StaticImageData } from "next/image";

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

export interface Business {
  id: string;
  name: string;
  description: string;
  marketingCopy: string;
  cta: CallToAction;
  featuredImage: AppImage;
  logo: JSX.Element;
  services: Service[];
  calendlyLink?: string;
}
