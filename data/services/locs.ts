import * as strings from "data/strings";
import { ServiceCategory } from "src/types";

export const locs = [
  {
    id: strings.INSTANT_LOCS_ID,
    name: strings.INSTANT_LOCS,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: {
      primary: {
        href: `/services/${strings.LOCS_ID}/${strings.INSTANT_LOCS_ID}`,
        text: "See details",
      },
    },
    image: {
      path: require("data/images/locs.jpg"),
      altText: "",
    },
    category: ServiceCategory.INSTALLATION,
    requiresHairExtensions: false,
    price: 50,
    rate: "HOURLY",
    duration: "Within 3 to 15 hours",
  },
  {
    id: strings.TWO_STRAND_STARTER_LOCS_ID,
    name: strings.TWO_STRAND_STARTER_LOCS,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: {
      primary: {
        href: `/services/${strings.LOCS_ID}/${strings.TWO_STRAND_STARTER_LOCS_ID}`,
        text: "See details",
      },
    },
    image: {
      path: require("data/images/locs.jpg"),
      altText: "",
    },
    category: ServiceCategory.INSTALLATION,
    requiresHairExtensions: false,
    price: 50,
    rate: "HOURLY",
    duration: "Within 3 to 15 hours",
  },
  {
    id: strings.SISTER_LOCS_ID,
    name: strings.SISTER_LOCS,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: {
      primary: {
        href: `/services/${strings.LOCS_ID}/${strings.SISTER_LOCS_ID}`,
        text: "See details",
      },
    },
    image: {
      path: require("data/images/locs.jpg"),
      altText: "",
    },
    category: ServiceCategory.INSTALLATION,
    requiresHairExtensions: false,
    price: 50,
    rate: "HOURLY",
    duration: "Within 3 to 15 hours",
  },
  {
    id: strings.MICRO_LOCS_ID,
    name: strings.MICRO_LOCS,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: {
      primary: {
        href: `/services/${strings.LOCS_ID}/${strings.MICRO_LOCS_ID}`,
        text: "See details",
      },
    },
    image: {
      path: require("data/images/locs.jpg"),
      altText: "",
    },
    category: ServiceCategory.INSTALLATION,
    requiresHairExtensions: false,
    price: 50,
    rate: "HOURLY",
    duration: "Within 3 to 15 hours",
  },
  {
    id: strings.WICKS_ID,
    name: strings.WICKS,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: {
      primary: {
        href: `/services/${strings.LOCS_ID}/${strings.WICKS_ID}`,
        text: "See details",
      },
    },
    image: {
      path: require("data/images/locs.jpg"),
      altText: "",
    },
    category: ServiceCategory.INSTALLATION,
    requiresHairExtensions: false,
    price: 50,
    rate: "HOURLY",
    duration: "Within 3 to 15 hours",
  },
  {
    id: strings.FAUX_LOCS_ID,
    name: strings.FAUX_LOCS,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: {
      primary: {
        href: `/services/${strings.LOCS_ID}/${strings.FAUX_LOCS_ID}`,
        text: "See details",
      },
    },
    image: {
      path: require("data/images/braids-and-twists.jpg"),
      altText: "",
    },
    category: ServiceCategory.INSTALLATION,
    requiresHairExtensions: true,
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
        href: `/services/${strings.LOCS_ID}/${strings.SOFT_LOCS_ID}`,
        text: "See details",
      },
    },
    image: {
      path: require("data/images/braids-and-twists.jpg"),
      altText: "",
    },
    category: ServiceCategory.INSTALLATION,
    requiresHairExtensions: true,
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
        href: `/services/${strings.LOCS_ID}/${strings.BUTTERFLY_DISTRESSED_LOCS_ID}`,
        text: "See details",
      },
    },
    image: {
      path: require("data/images/braids-and-twists.jpg"),
      altText: "",
    },
    category: ServiceCategory.INSTALLATION,
    requiresHairExtensions: true,
    price: 50,
    rate: "FIXED",
    duration: "Within 3 to 15 hours",
  },
  {
    id: strings.LOC_REPAIR_ID,
    name: strings.LOC_REPAIR,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: {
      primary: {
        href: `/services/${strings.LOCS_ID}/${strings.LOC_REPAIR_ID}`,
        text: "See details",
      },
    },
    image: {
      path: require("data/images/locs.jpg"),
      altText: "",
    },
    category: ServiceCategory.MAINTENANCE,
    requiresHairExtensions: false,
    price: 50,
    rate: "HOURLY",
    duration: "Within 3 to 15 hours",
  },
  {
    id: strings.LOC_RETWIST_ID,
    name: strings.LOC_RETWIST,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: {
      primary: {
        href: `/services/${strings.LOCS_ID}/${strings.LOC_RETWIST_ID}`,
        text: "See details",
      },
    },
    image: {
      path: require("data/images/locs.jpg"),
      altText: "",
    },
    category: ServiceCategory.MAINTENANCE,
    requiresHairExtensions: false,
    price: 50,
    rate: "HOURLY",
    duration: "Within 3 to 15 hours",
  },
];
