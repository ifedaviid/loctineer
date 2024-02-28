import { PriceType } from "types";
import { ServiceIDs } from "data/phils-vision/services/ids";
import * as strings from "data/phils-vision/strings";
const { STARTING } = PriceType;

export const personalPhotoshootServices = [
  {
    id: ServiceIDs.HEADSHOT,
    name: strings.HEADSHOTS,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: {
      primary: {
        href: `/services/${ServiceIDs.PERSONAL}/${ServiceIDs.HEADSHOT}`,
        text: "See details",
      },
    },
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
    id: ServiceIDs.PORTRAIT,
    name: strings.PORTRAITS,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: {
      primary: {
        href: `/services/${ServiceIDs.PERSONAL}/${ServiceIDs.PORTRAIT}`,
        text: "See details",
      },
    },
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
    id: ServiceIDs.BIRTHDAY,
    name: strings.BIRTHDAY,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: {
      primary: {
        href: `/services/${ServiceIDs.PERSONAL}/${ServiceIDs.BIRTHDAY}`,
        text: "See details",
      },
    },
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
  }
];
