import { PriceType } from "types";
import { ServiceIDs } from "./ids";
import * as strings from "data/loctineer/strings";
const { STARTING } = PriceType;

export const braidsAndTwistsServices = [
  {
    id: ServiceIDs.BOX_BRAIDS_AND_TWISTS,
    name: strings.BOX_BRAIDS_AND_TWISTS,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    pagePath: `/services/${ServiceIDs.BRAIDS_AND_TWISTS}/${ServiceIDs.BOX_BRAIDS_AND_TWISTS}`,
    images: [{
      path: require("data/loctineer/images/box-braids.jpeg"),
      altText: "",
    }],
    featuredImage: {
      path: require("data/loctineer/images/box-braids.jpeg"),
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
    calendlyEventURL: `https://calendly.com/loctineer/wicks`,
  },
  {
    id: ServiceIDs.KINKY_PASSION_TWISTS,
    name: strings.KINKY_PASSION_TWISTS,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    pagePath: `/services/${ServiceIDs.BRAIDS_AND_TWISTS}/${ServiceIDs.KINKY_PASSION_TWISTS}`,
    featuredImage: {
      path: require("data/loctineer/images/braids-and-twists.jpg"),
      altText: "",
    },
    images: [{
      path: require("data/loctineer/images/braids-and-twists.jpg"),
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
    calendlyEventURL: `https://calendly.com/loctineer/wicks`,
  },
  {
    id: ServiceIDs.KNOTLESS_BRAIDS,
    name: strings.KNOTLESS_BRAIDS,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    pagePath: `/services/${ServiceIDs.BRAIDS_AND_TWISTS}/${ServiceIDs.KNOTLESS_BRAIDS}`,
    featuredImage: {
      path: require("data/loctineer/images/braids-and-twists.jpg"),
      altText: "",
    },
    images: [{
      path: require("data/loctineer/images/braids-and-twists.jpg"),
      altText: "",
    }],
    price: { value: 120, type: STARTING },
    prices: [{ name: 'Shoulder length', value: 120, type: STARTING }, { name: 'Mid-back length', value: 140, type: STARTING }, { name: 'Waist length', value: 160, type: STARTING }],
    calendlyEventURL: `https://calendly.com/loctineer/wicks`,
  },
];
