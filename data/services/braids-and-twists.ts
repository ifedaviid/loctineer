import { ServiceCategory } from "src/types";
import * as strings from "data/strings";

export const braidsAndTwistsServices = [
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
    images: [{
      path: require("data/images/braids-and-twists.jpg"),
      altText: "",
    }],
    featuredImage: {
      path: require("data/images/locs.jpg"),
      altText: "",
    },
    category: ServiceCategory.INSTALLATION,
    requiresHairExtensions: false,
    price: 50,
    rate: "FIXED",
    duration: "Within 3 to 15 hours",
    calendlyEventLinkID: "box-braids-and-twists",
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
    featuredImage: {
      path: require("data/images/braids-and-twists.jpg"),
      altText: "",
    },
    images: [{
      path: require("data/images/braids-and-twists.jpg"),
      altText: "",
    }],
    category: ServiceCategory.INSTALLATION,
    requiresHairExtensions: true,
    price: 50,
    rate: "FIXED",
    duration: "Within 3 to 15 hours",
    calendlyEventLinkID: "kinky-passion-twists",
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
    featuredImage: {
      path: require("data/images/braids-and-twists.jpg"),
      altText: "",
    },
    images: [{
      path: require("data/images/braids-and-twists.jpg"),
      altText: "",
    }],
    category: ServiceCategory.INSTALLATION,
    requiresHairExtensions: true,
    price: 50,
    rate: "FIXED",
    duration: "Within 3 to 15 hours",
    calendlyEventLinkID: "knotless-braids",
  },
];
