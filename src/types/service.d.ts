import { ExtensionUsage } from "src/types/extension-usage";
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
