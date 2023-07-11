import { ServiceCategory, ExtensionUsage } from "src/types";
import * as strings from "data/strings";

const { POSSIBLE, NOT_OFFERED } = ExtensionUsage;

export const dreadlockMaintenanceServices = [
  {
    id: strings.LOC_REPAIR_ID,
    name: strings.LOC_REPAIR,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: {
      primary: {
        href: `/services/${strings.LOCS_ID}/${strings.DREADLOCKS_MAINTENANCE_ID}/${strings.LOC_REPAIR_ID}`,
        text: "See details",
      },
    },
    image: {
      path: require("data/images/dreadlocks.jpg"),
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
        href: `/services/${strings.LOCS_ID}/${strings.DREADLOCKS_MAINTENANCE_ID}/${strings.LOC_RETWIST_ID}`,
        text: "See details",
      },
    },
    image: {
      path: require("data/images/dreadlocks.jpg"),
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
        href: `/services/${strings.LOCS_ID}/${strings.DREADLOCKS_MAINTENANCE_ID}/${strings.LOC_STYLING_ID}`,
        text: "See details",
      },
    },
    image: {
      path: require("data/images/dreadlocks.jpg"),
      altText: "",
    },
    category: ServiceCategory.MAINTENANCE,
    extensionUsage: POSSIBLE,
    price: 50,
    rate: "HOURLY",
    duration: "Between 3 to 15 hours (depending on hair health)",
  },
];
