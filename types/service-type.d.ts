export interface ServiceType {
  name: string;
  description?: string;
  slug?: string;
  image: AppImage;
  services?: Array<Service>;
}
