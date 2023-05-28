import { ExtensionUsage } from "src/types/extension-usage";
import { ServiceCategory } from "src/types/service-category";
import { AppImage } from "src/types/image";

export interface Service {
  id: string;
  name: string;
  description: string;
  cta: CallToAction;
  image: AppImage;
  category?: ServiceCategory;
  extensionUsage?: ExtensionUsage;
  services?: Service[];
  price?: number;
  rate?: string;
  duration?: string;
}
