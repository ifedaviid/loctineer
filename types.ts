import { StaticImageData } from "next/legacy/image";

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

export enum PriceType {
  HOURLY = "hourly",
  STARTING = "starting"
}

export interface Price {
  value: number;
  type: PriceType;
  name?: string;
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
  heroImage: AppImage;
  logo?: JSX.Element;
  services: Service[];
  calendlyLink?: string;
  facebookPageId?: string;
}

export enum RecognizedBusinessIDs {
  LOCTINEER = 'LOCTINEER',
  PHILSVISION = 'PHILSVISION',
}
