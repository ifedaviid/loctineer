import { allServices } from "./services";

export const PHILSVISION = {
    id: 'PHILSVISION',
    name: 'Phil\'s Vision',
    description: "Photography & Film Specialist in Ottawa",
    marketingCopy: 'Capturing you in your best light',
    cta: {
        primary: {
            href: `/services`,
            text: "My Services",
        },
    },
    heroImage: {
        path: require("data/loctineer/images/consultation.jpg"),
        altText: "",
    },
    services: allServices,
}
