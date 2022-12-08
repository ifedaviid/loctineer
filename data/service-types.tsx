import * as strings from "./strings";
import { braidsAndTwistsServices } from "./braids-and-twists-services";
import { dreadlocksServices } from "./dreadlocks-services";

export const serviceTypes = [
  {
    id: strings.LOCS_ID,
    name: strings.LOCS,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    cta: {
      primary: {
        href: `/services/${strings.LOCS_ID}`,
        text: "See related services",
      },
    },
    image: {
      path: require("../images/dreadlocks.jpg"),
      altText: "",
    },
    services: dreadlocksServices,
  },
  {
    id: strings.BRAIDS_AND_TWISTS_ID,
    name: strings.BRAIDS_AND_TWISTS,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    cta: {
      primary: {
        href: `/services/${strings.BRAIDS_AND_TWISTS_ID}`,
        text: "See related services",
      },
    },
    image: {
      path: require("../images/braids-and-twists.jpg"),
      altText: "",
    },
    services: braidsAndTwistsServices,
  },
];
