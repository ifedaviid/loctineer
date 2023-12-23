import { Rate } from "src/types";
import * as strings from "data/strings";
const { MINIMUM } = Rate;

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
    prices: [
      { name: 'Shoulder length', value: 100, rate: MINIMUM },
      { name: 'Mid-back length', value: 120, rate: MINIMUM },
      { name: 'Waist length', value: 140, rate: MINIMUM },
      { name: 'Butt length', value: 180, rate: MINIMUM },
      { name: 'Knee length', value: 200, rate: MINIMUM }
    ],
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
    prices: [
      { name: 'Shoulder length', value: 110, rate: MINIMUM },
      { name: 'Mid-back length', value: 130, rate: MINIMUM },
      { name: 'Waist length', value: 150, rate: MINIMUM },
      { name: 'Butt length', value: 190, rate: MINIMUM },
      { name: 'Knee length', value: 210, rate: MINIMUM }
    ],
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
    prices: [{ name: 'Shoulder length', value: 120, rate: MINIMUM }, { name: 'Mid-back length', value: 140, rate: MINIMUM }, { name: 'Waist length', value: 160, rate: MINIMUM }],
    calendlyEventLinkID: "knotless-braids",
  },
];
