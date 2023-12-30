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
            text: "See services",
        },
    },
    featuredImage: {
        path: require("data/images/locs.jpg"),
        altText: "",
    },
    logo: LoctineerLogo,
    services: allServices,
}
