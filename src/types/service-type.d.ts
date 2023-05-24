export interface ServiceType {
  id: string;
  name: string;
  description?: string;
  cta: CallToAction;
  image: AppImage;
  services?: Array<Service>;
}
