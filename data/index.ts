import { allServices } from "./services";
import LoctineerLogo from "./logo";

export const business = {
    id: 'loctineer',
    name: 'Loctineer',
    description: "Locs & Braiding Specialist in Ottawa",
    marketingCopy: 'Creating your best look',
    cta: {
        primary: {
            href: `/services`,
            text: "Our services",
        },
    },
    heroImage: {
        path: require("data/images/braids-and-twists.jpg"),
        altText: "",
    },
    logo: LoctineerLogo,
    services: allServices,
}