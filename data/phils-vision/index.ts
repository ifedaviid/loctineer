import { RecognizedBusinessIDs } from "types";
import { allServices } from "./services";

export const PHILSVISION = {
    id: RecognizedBusinessIDs.PHILSVISION,
    name: 'Phil\'s Vision',
    description: "Photography & Film Specialist in Ottawa",
    marketingCopy: 'Capturing YOU in Your Best Light',
    cta: {
        primary: {
            href: `/services`,
            text: "Our Services",
        },
    },
    heroImage: {
        path: require("data/loctineer/images/consultation.jpg"),
        altText: "",
    },
    services: allServices,
}
