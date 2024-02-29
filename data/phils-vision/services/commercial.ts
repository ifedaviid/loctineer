import * as strings from "data/phils-vision/strings";
import { ServiceIDs } from "./ids";
import { PriceType } from "types";
const { HOURLY } = PriceType;

export const commercialPhotoshootServices = [
  {
    id: ServiceIDs.PRODUCT_SHOOT,
    name: strings.PRODUCT_SHOOT,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: {
      primary: {
        href: `/services/${ServiceIDs.COMMERCIAL}/${ServiceIDs.PRODUCT_SHOOT}`,
        text: "See details",
      },
    },
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
    price: { value: 50, type: HOURLY },
    calendlyEventURL: `https://calendly.com/loctineer/wicks`,
  },
  {
    id: ServiceIDs.FOOD_SHOOT,
    name: strings.FOOD_SHOOT,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: {
      primary: {
        href: `/services/${ServiceIDs.COMMERCIAL}/${ServiceIDs.FOOD_SHOOT}`,
        text: "See details",
      },
    },
    featuredImage: {
      path: require("data/loctineer/images/locs.jpg"),
      altText: "",
    },
    images: [
      {
        path: require("data/loctineer/images/locs.jpg"),
        altText: "",
      },
    ],
    price: { value: 50, type: HOURLY },
    calendlyEventURL: `https://calendly.com/loctineer/wicks`,
  },
  {
    id: ServiceIDs.FASHION_SHOOT,
    name: strings.FASHION_SHOOT,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: {
      primary: {
        href: `/services/${ServiceIDs.COMMERCIAL}/${ServiceIDs.FASHION_SHOOT}`,
        text: "See details",
      },
    },
    featuredImage: {
      path: require("data/phils-vision/images/fashion-shoot.jpeg"),
      altText: "",
    },
    images: [
      {
        path: require("data/phils-vision/images/fashion-shoot.jpeg"),
        altText: "",
      },
    ],
    price: { value: 50, type: HOURLY, },
    calendlyEventURL: `https://calendly.com/loctineer/wicks`,
  },
  {
    id: ServiceIDs.CONTENT_CREATION,
    name: strings.CONTENT_CREATION,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: {
      primary: {
        href: `/services/${ServiceIDs.COMMERCIAL}/${ServiceIDs.CONTENT_CREATION}`,
        text: "See details",
      },
    },
    featuredImage: {
      path: require("data/phils-vision/images/content-creation.jpeg"),
      altText: "",
    },
    images: [
      {
        path: require("data/phils-vision/images/content-creation.jpeg"),
        altText: "",
      },
    ],
    price: { value: 50, type: HOURLY, },
    calendlyEventURL: `https://calendly.com/loctineer/wicks`,
  },
];