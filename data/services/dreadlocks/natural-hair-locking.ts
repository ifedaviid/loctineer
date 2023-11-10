import { ServiceCategory, ExtensionUsage } from "src/types";
import * as strings from "data/strings";

const { POSSIBLE } = ExtensionUsage;

export const naturalHairLockingServices = [
  {
    id: strings.INSTANT_DREADLOCKS_ID,
    name: strings.INSTANT_DREADLOCKS,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: {
      primary: {
        href: `/services/${strings.LOCS_ID}/${strings.NATURAL_HAIR_LOCKING_ID}/${strings.INSTANT_DREADLOCKS_ID}`,
        text: "See details",
      },
    },
    image: {
      path: require("data/images/dreadlocks.jpg"),
      altText: "",
    },
    category: ServiceCategory.INSTALLATION,
    extensionUsage: POSSIBLE,
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
        href: `/services/${strings.LOCS_ID}/${strings.NATURAL_HAIR_LOCKING_ID}/${strings.TWO_STRAND_STARTER_LOCS_ID}`,
        text: "See details",
      },
    },
    image: {
      path: require("data/images/dreadlocks.jpg"),
      altText: "",
    },
    category: ServiceCategory.INSTALLATION,
    extensionUsage: POSSIBLE,
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
        href: `/services/${strings.LOCS_ID}/${strings.NATURAL_HAIR_LOCKING_ID}/${strings.SISTER_LOCS_ID}`,
        text: "See details",
      },
    },
    image: {
      path: require("data/images/dreadlocks.jpg"),
      altText: "",
    },
    category: ServiceCategory.INSTALLATION,
    extensionUsage: POSSIBLE,
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
        href: `/services/${strings.LOCS_ID}/${strings.NATURAL_HAIR_LOCKING_ID}/${strings.SISTER_LOCS_ID}`,
        text: "See details",
      },
    },
    image: {
      path: require("data/images/dreadlocks.jpg"),
      altText: "",
    },
    category: ServiceCategory.INSTALLATION,
    extensionUsage: POSSIBLE,
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
        href: `/services/${strings.LOCS_ID}/${strings.NATURAL_HAIR_LOCKING_ID}/${strings.SISTER_LOCS_ID}`,
        text: "See details",
      },
    },
    image: {
      path: require("data/images/dreadlocks.jpg"),
      altText: "",
    },
    category: ServiceCategory.INSTALLATION,
    extensionUsage: POSSIBLE,
    price: 50,
    rate: "HOURLY",
    duration: "Within 3 to 15 hours",
  },
];
