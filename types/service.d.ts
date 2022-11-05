import { AppImage } from "./image";

export interface Service {
  id: string;
  name: string;
  description: string;
  category: ServiceCategory;
  canUseExtensions: boolean;
  cta: CallToAction;
  image: AppImage;
}
