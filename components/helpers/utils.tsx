import { AppImage } from "../../types/image";

export function extractImages(data) {
    let images: Array<AppImage> = [];
    data.map((obj) => images.push(obj.image));
    return images;
}
