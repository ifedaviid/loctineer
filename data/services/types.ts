import * as strings from "data/strings";
import { braidsAndTwistsServices } from "data/services/braids-and-twists";
import { locs } from "data/services/locs";

export const serviceTypes = [
  {
    id: strings.LOCS_ID,
    name: strings.LOCS,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    cta: {
      primary: {
        href: `/services/${strings.LOCS_ID}`,
        text: "See services",
      },
    },
    image: {
      path: require("data/images/locs.jpg"),
      altText: "",
    },
    services: locs,
  },
  {
    id: strings.BRAIDS_AND_TWISTS_ID,
    name: strings.BRAIDS_AND_TWISTS,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    cta: {
      primary: {
        href: `/services/${strings.BRAIDS_AND_TWISTS_ID}`,
        text: "See services",
      },
    },
    image: {
      path: require("data/images/braids-and-twists.jpg"),
      altText: "",
    },
    services: braidsAndTwistsServices,
  },
];
