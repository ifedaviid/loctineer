import { ExtensionUsage } from "types/extension-usage";
import { AppImage } from "types/image";

export interface Service {
  id: string;
  name: string;
  description: string;
  category: ServiceCategory;
  extensionUsage: ExtensionUsage;
  cta: CallToAction;
  image: AppImage;
}
