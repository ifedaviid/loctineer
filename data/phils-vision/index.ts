import { allServices } from "./services";

export const PHILSVISION = {
    id: 'PHILSVISION',
    name: 'Phil\'s Vision',
    description: "Photography & Film Specialist in Ottawa",
    marketingCopy: 'Capturing you in your best light',
    pagePath: `/services`,
    heroImage: {
        path: require("data/phils-vision/images/fashion-shoot.jpeg"),
        altText: "",
    },
    services: allServices,
}
