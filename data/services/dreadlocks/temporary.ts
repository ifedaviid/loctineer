import * as strings from "data/strings";
import { ExtensionUsage, ServiceCategory } from "src/types";

const { REQUIRED } = ExtensionUsage;

export const temporaryLocs = [
    {
        id: strings.FAUX_LOCS_ID,
        name: strings.FAUX_LOCS,
        description:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        cta: {
            primary: {
                href: `/services/${strings.LOCS_ID}/${strings.TEMPORARY_LOCS_ID}/${strings.FAUX_LOCS_ID}`,
                text: "See details",
            },
        },
        image: {
            path: require("data/images/braids-and-twists.jpg"),
            altText: "",
        },
        category: ServiceCategory.INSTALLATION,
        extensionUsage: REQUIRED,
        price: 50,
        rate: "FIXED",
        duration: "Within 3 to 15 hours",
    },
    {
        id: strings.SOFT_LOCS_ID,
        name: strings.SOFT_LOCS,
        description:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        cta: {
            primary: {
                href: `/services/${strings.LOCS_ID}/${strings.TEMPORARY_LOCS_ID}/${strings.SOFT_LOCS_ID}`,
                text: "See details",
            },
        },
        image: {
            path: require("data/images/braids-and-twists.jpg"),
            altText: "",
        },
        category: ServiceCategory.INSTALLATION,
        extensionUsage: REQUIRED,
        price: 50,
        rate: "HOURLY",
        duration: "Within 3 to 15 hours",
    },
    {
        id: strings.BUTTERFLY_DISTRESSED_LOCS_ID,
        name: strings.BUTTERFLY_DISTRESSED_LOCS,
        description:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        cta: {
            primary: {
                href: `/services/${strings.LOCS_ID}/${strings.TEMPORARY_LOCS_ID}/${strings.BUTTERFLY_DISTRESSED_LOCS_ID}`,
                text: "See details",
            },
        },
        image: {
            path: require("data/images/braids-and-twists.jpg"),
            altText: "",
        },
        category: ServiceCategory.INSTALLATION,
        extensionUsage: REQUIRED,
        price: 50,
        rate: "FIXED",
        duration: "Within 3 to 15 hours",
    },
]