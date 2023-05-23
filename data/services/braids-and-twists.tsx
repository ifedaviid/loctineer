import { ServiceCategory } from "types/service-category";
import { ExtensionUsage } from "types/extension-usage";
import * as strings from "data/strings";

const { POSSIBLE, REQUIRED } = ExtensionUsage;

export const braidsAndTwistsServices = [
  {
    id: strings.FAUX_LOCS_ID,
    name: strings.FAUX_LOCS,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: {
      primary: {
        href: `/services/${strings.BRAIDS_AND_TWISTS_ID}/${strings.FAUX_LOCS_ID}`,
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
    duration: "Between 3 to 15 hours (depending on hair health)",
  },
  {
    id: strings.SOFT_LOCS_ID,
    name: strings.SOFT_LOCS,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: {
      primary: {
        href: `/services/${strings.BRAIDS_AND_TWISTS_ID}/${strings.SOFT_LOCS_ID}`,
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
    duration: "Between 3 to 15 hours (depending on hair health)",
  },
  {
    id: strings.BUTTERFLY_DISTRESSED_LOCS_ID,
    name: strings.BUTTERFLY_DISTRESSED_LOCS,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: {
      primary: {
        href: `/services/${strings.BRAIDS_AND_TWISTS_ID}/${strings.BUTTERFLY_DISTRESSED_LOCS_ID}`,
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
    duration: "Between 3 to 15 hours (depending on hair health)",
  },
  {
    id: strings.BOX_BRAIDS_AND_TWISTS_ID,
    name: strings.BOX_BRAIDS_AND_TWISTS,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: {
      primary: {
        href: `/services/${strings.BRAIDS_AND_TWISTS_ID}/${strings.BOX_BRAIDS_AND_TWISTS_ID}`,
        text: "See details",
      },
    },
    image: {
      path: require("data/images/braids-and-twists.jpg"),
      altText: "",
    },
    category: ServiceCategory.INSTALLATION,
    extensionUsage: POSSIBLE,
    price: 50,
    rate: "FIXED",
    duration: "Between 3 to 15 hours (depending on hair health)",
  },
  {
    id: strings.KINKY_PASSION_TWISTS_ID,
    name: strings.KINKY_PASSION_TWISTS,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: {
      primary: {
        href: `/services/${strings.BRAIDS_AND_TWISTS_ID}/${strings.KINKY_PASSION_TWISTS_ID}`,
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
    duration: "Between 3 to 15 hours (depending on hair health)",
  },
  {
    id: strings.KNOTLESS_BRAIDS_ID,
    name: strings.KNOTLESS_BRAIDS,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: {
      primary: {
        href: `/services/${strings.BRAIDS_AND_TWISTS_ID}/${strings.KNOTLESS_BRAIDS_ID}`,
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
    duration: "Between 3 to 15 hours (depending on hair health)",
  },
];
