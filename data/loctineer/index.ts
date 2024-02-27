import { allServices } from "./services";

export const LOCTINEER = {
    id: 'LOCTINEER',
    name: 'Loctineer',
    description: "Locs & Braiding Specialist in Ottawa",
    marketingCopy: 'Creating your best look',
    cta: {
        primary: {
            href: `/services`,
            text: "Our Services",
        },
    },
    heroImage: {
        path: require("data/loctineer/images/braids-and-twists.jpg"),
        altText: "",
    },
    services: allServices,
    facebookPageId: '156788817527257'
}
