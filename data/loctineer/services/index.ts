import * as strings from "data/loctineer/strings";
import { braidsAndTwistsServices } from "data/loctineer/services/braids-and-twists";
import { locs } from "data/loctineer/services/locs";
import { ServiceIDs } from "./ids";

export const allServices = [
  {
    id: ServiceIDs.LOCS,
    name: strings.LOCS,
    description:
      "We offer installation services for those interested in locs and maintenance services for those already with locs. Whatever you're looking for, you're guaranteed healthy and beautiful locs.",
    pagePath: `/services/${ServiceIDs.LOCS}`,
    featuredImage: {
      path: require("data/loctineer/images/locs.jpg"),
      altText: "",
    },
    images: [
      {
        path: require("data/loctineer/images/locs.jpg"),
        altText: "",
      }
    ],
    services: locs,
  },
  {
    id: ServiceIDs.BRAIDS_AND_TWISTS,
    name: strings.BRAIDS_AND_TWISTS,
    description:
      "We offer both styling and maintainance services for a variety of braids and twists styles. Check out our menu for your next look. We're sure you'll find something you love.",
    pagePath: `/services/${ServiceIDs.BRAIDS_AND_TWISTS}`,
    featuredImage: {
      path: require("data/loctineer/images/braids-and-twists.jpg"),
      altText: "",
    },
    images: [
      {
        path: require("data/loctineer/images/braids-and-twists.jpg"),
        altText: "",
      }
    ],
    services: braidsAndTwistsServices,
  },
];
