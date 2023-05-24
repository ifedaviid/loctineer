import { ExtensionUsage } from "src/types/extension-usage";
import { AppImage } from "src/types/image";

export interface Service {
  id: string;
  name: string;
  description: string;
  category: ServiceCategory;
  extensionUsage: ExtensionUsage;
  cta: CallToAction;
  image: AppImage;
}
