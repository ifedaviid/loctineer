import { AppImage } from "src/types/image";

export function extractImages(data) {
  let images: Array<AppImage> = [];
  data.map((obj) => images.push(obj.image));
  return images;
}
