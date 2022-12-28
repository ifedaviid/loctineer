import { ExtensionUsage } from "./extension-usage";
import { AppImage } from "./image";

export interface Service {
  id: string;
  name: string;
  description: string;
  category: ServiceCategory;
  extensionUsage: ExtensionUsage;
  cta: CallToAction;
  image: AppImage;
}
