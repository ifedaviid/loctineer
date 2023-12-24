import * as strings from "data/strings";
import { braidsAndTwistsServices } from "data/services/braids-and-twists";
import { locs } from "data/services/locs";

export const serviceTypes = [
  {
    id: strings.LOCS_ID,
    name: strings.LOCS,
    description:
      "We offer installation services for those interested in locs and maintenance services for those already with locs. Whatever you're looking for, you're guaranteed healthy and beautiful locs.",
    cta: {
      primary: {
        href: `/services/${strings.LOCS_ID}`,
        text: "See services",
      },
    },
    featuredImage: {
      path: require("data/images/locs.jpg"),
      altText: "",
    },
    images: [
      {
        path: require("data/images/locs.jpg"),
        altText: "",
      }
    ],
    services: locs,
  },
  {
    id: strings.BRAIDS_AND_TWISTS_ID,
    name: strings.BRAIDS_AND_TWISTS,
    description:
      "We offer both styling and maintainance services for a variety of braids and twists styles. Check out our menu for your next look. We're sure you'll find something you love.",
    cta: {
      primary: {
        href: `/services/${strings.BRAIDS_AND_TWISTS_ID}`,
        text: "See services",
      },
    },
    featuredImage: {
      path: require("data/images/braids-and-twists.jpg"),
      altText: "",
    },
    images: [
      {
        path: require("data/images/braids-and-twists.jpg"),
        altText: "",
      }
    ],
    services: braidsAndTwistsServices,
  },
];
