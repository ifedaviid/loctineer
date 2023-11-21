import { dreadlockMaintenanceServices } from "data/services/dreadlocks/maintenance";
import { naturalHairLockingServices } from "data/services/dreadlocks/natural-hair-locking";
import { temporaryLocs } from "./temporary";
import * as strings from "data/strings";
import { ExtensionUsage, ServiceCategory } from "src/types";

const { POSSIBLE, NOT_OFFERED, REQUIRED } = ExtensionUsage;

export const dreadlocksServices = [
  {
    id: strings.NATURAL_HAIR_LOCKING_ID,
    name: strings.NATURAL_HAIR_LOCKING,
    description:
      "For those looking to lock their natural hair into dreadlocks without loc extensions.",
    cta: {
      primary: {
        href: `/services/${strings.LOCS_ID}/${strings.NATURAL_HAIR_LOCKING_ID}`,
        text: "See details",
      },
    },
    image: {
      path: require("data/images/dreadlocks.jpg"),
      altText: "",
    },
    services: naturalHairLockingServices,
    category: ServiceCategory.MAINTENANCE,
    extensionUsage: NOT_OFFERED,
    price: 50,
    rate: "HOURLY",
    duration: "Within 3 to 15 hours",
  },
  {
    id: strings.DREADLOCKS_MAINTENANCE_ID,
    name: strings.DREADLOCKS_MAINTENANCE,
    description:
      "For those who already have dreadlocks and are looking to retwist, repair or style their dreadlocks.",
    cta: {
      primary: {
        href: `/services/${strings.LOCS_ID}/${strings.DREADLOCKS_MAINTENANCE_ID}`,
        text: "See details",
      },
    },
    image: {
      path: require("data/images/dreadlocks.jpg"),
      altText: "",
    },
    services: dreadlockMaintenanceServices,
    category: ServiceCategory.MAINTENANCE,
    extensionUsage: POSSIBLE,
    price: 50,
    rate: "HOURLY",
    duration: "Within 3 to 15 hours",
  },
  {
    id: strings.LOC_EXTENSION_INSTALLATION_ID,
    name: strings.LOC_EXTENSION_INSTALLATION,
    description: "For those looking to add dreadlock extensions to their hair.",
    cta: {
      primary: {
        href: `/services/${strings.LOCS_ID}/${strings.LOC_EXTENSION_INSTALLATION_ID}`,
        text: "See details",
      },
    },
    image: {
      path: require("data/images/dreadlocks.jpg"),
      altText: "",
    },
    services: [],
    category: ServiceCategory.INSTALLATION,
    extensionUsage: POSSIBLE,
    price: 50,
    rate: "HOURLY",
    duration: "Within 3 to 15 hours",
  },
  {
    id: strings.TEMPORARY_LOCS_ID,
    name: strings.TEMPORARY_LOCS,
    description: "For those looking to add temporary dreadlock extensions to their hair using hair extensions.",
    cta: {
      primary: {
        href: `/services/${strings.LOCS_ID}/${strings.TEMPORARY_LOCS_ID}`,
        text: "See details",
      },
    },
    image: {
      path: require("data/images/dreadlocks.jpg"),
      altText: "",
    },
    services: temporaryLocs,
    category: ServiceCategory.INSTALLATION,
    extensionUsage: REQUIRED,
    price: 50,
    rate: "FIXED",
    duration: "Within 3 to 15 hours",
  },
];
