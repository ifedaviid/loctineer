import { ServiceCategory } from "./../../types/service-category";
import { ExtensionUsage } from "./../../types/extension-usage";
import * as strings from "../strings";

const { POSSIBLE, NOT_OFFERED } = ExtensionUsage;

export const dreadlocksServices = [
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
      path: require("./../../images/dreadlocks.jpg"),
      altText: "",
    },
    category: ServiceCategory.MAINTENANCE,
    extensionUsage: NOT_OFFERED,
    price: 50,
    rate: "HOURLY",
    duration: "Between 3 to 15 hours (depending on hair health)",
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
      path: require("./../../images/dreadlocks.jpg"),
      altText: "",
    },
    category: ServiceCategory.MAINTENANCE,
    extensionUsage: NOT_OFFERED,
    price: 50,
    rate: "HOURLY",
    duration: "Between 3 to 15 hours (depending on hair health)",
  },
  {
    id: strings.LOC_STYLING_ID,
    name: strings.LOC_STYLING,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: {
      primary: {
        href: `/services/${strings.LOCS_ID}/${strings.LOC_STYLING_ID}`,
        text: "See details",
      },
    },
    image: {
      path: require("./../../images/dreadlocks.jpg"),
      altText: "",
    },
    category: ServiceCategory.MAINTENANCE,
    extensionUsage: POSSIBLE,
    price: 50,
    rate: "HOURLY",
    duration: "Between 3 to 15 hours (depending on hair health)",
  },
  {
    id: strings.NATURAL_INSTANT_DREADLOCKS_ID,
    name: strings.NATURAL_INSTANT_DREADLOCKS,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: {
      primary: {
        href: `/services/${strings.LOCS_ID}/${strings.NATURAL_INSTANT_DREADLOCKS_ID}`,
        text: "See details",
      },
    },
    image: {
      path: require("./../../images/dreadlocks.jpg"),
      altText: "",
    },
    category: ServiceCategory.INSTALLATION,
    extensionUsage: POSSIBLE,
    price: 50,
    rate: "HOURLY",
    duration: "Between 3 to 15 hours (depending on hair health)",
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
      path: require("./../../images/dreadlocks.jpg"),
      altText: "",
    },
    category: ServiceCategory.INSTALLATION,
    extensionUsage: POSSIBLE,
    price: 50,
    rate: "HOURLY",
    duration: "Between 3 to 15 hours (depending on hair health)",
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
      path: require("./../../images/dreadlocks.jpg"),
      altText: "",
    },
    category: ServiceCategory.INSTALLATION,
    extensionUsage: POSSIBLE,
    price: 50,
    rate: "HOURLY",
    duration: "Between 3 to 15 hours (depending on hair health)",
  },
];
