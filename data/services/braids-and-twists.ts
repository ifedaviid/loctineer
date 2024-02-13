import { PriceType } from "src/types";
import * as strings from "data/strings";
const { STARTING } = PriceType;

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
      path: require("data/images/box-braids.jpeg"),
      altText: "",
    }],
    featuredImage: {
      path: require("data/images/box-braids.jpeg"),
      altText: "",
    },
    price: { value: 100, type: STARTING },
    prices: [
      { name: 'Shoulder length', value: 100, type: STARTING },
      { name: 'Mid-back length', value: 120, type: STARTING },
      { name: 'Waist length', value: 140, type: STARTING },
      { name: 'Butt length', value: 180, type: STARTING },
      { name: 'Knee length', value: 200, type: STARTING }
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
    price: { value: 110, type: STARTING },
    prices: [
      { name: 'Shoulder length', value: 110, type: STARTING },
      { name: 'Mid-back length', value: 130, type: STARTING },
      { name: 'Waist length', value: 150, type: STARTING },
      { name: 'Butt length', value: 190, type: STARTING },
      { name: 'Knee length', value: 210, type: STARTING }
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
    price: { value: 120, type: STARTING },
    prices: [{ name: 'Shoulder length', value: 120, type: STARTING }, { name: 'Mid-back length', value: 140, type: STARTING }, { name: 'Waist length', value: 160, type: STARTING }],
    calendlyEventLinkID: "knotless-braids",
  },
];
