import * as strings from "data/loctineer/strings";
import { ServiceIDs } from "./ids";
import { PriceType } from "types";
const { HOURLY, STARTING } = PriceType;

export const locs = [
  {
    id: ServiceIDs.INSTANT_LOCS,
    name: strings.INSTANT_LOCS,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    pagePath: `/services/${ServiceIDs.LOCS}/${ServiceIDs.INSTANT_LOCS}`,
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
    id: ServiceIDs.TWO_STRAND_STARTER_LOCS,
    name: strings.TWO_STRAND_STARTER_LOCS,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    pagePath: `/services/${ServiceIDs.LOCS}/${ServiceIDs.TWO_STRAND_STARTER_LOCS}`,
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
    id: ServiceIDs.SISTER_LOCS,
    name: strings.SISTER_LOCS,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    pagePath: `/services/${ServiceIDs.LOCS}/${ServiceIDs.SISTER_LOCS}`,
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
    price: { value: 50, type: HOURLY, },
    calendlyEventURL: `https://calendly.com/loctineer/wicks`,
  },
  {
    id: ServiceIDs.MICRO_LOCS,
    name: strings.MICRO_LOCS,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    pagePath: `/services/${ServiceIDs.LOCS}/${ServiceIDs.MICRO_LOCS}`,
    featuredImage: {
      path: require("data/loctineer/images/locs.jpg"),
      altText: "",
    },
    images: [{
      path: require("data/loctineer/images/locs.jpg"),
      altText: "",
    }],
    price: { value: 50, type: HOURLY, },
    calendlyEventURL: `https://calendly.com/loctineer/wicks`,
  },
  {
    id: ServiceIDs.WICKS,
    name: strings.WICKS,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    pagePath: `/services/${ServiceIDs.LOCS}/${ServiceIDs.WICKS}`,
    featuredImage: {
      path: require("data/loctineer/images/locs.jpg"),
      altText: "",
    },
    images: [{
      path: require("data/loctineer/images/locs.jpg"),
      altText: "",
    }],
    price: { value: 50, type: HOURLY },
    calendlyEventURL: `https://calendly.com/loctineer/wicks`,
  },
  {
    id: ServiceIDs.FAUX_LOCS,
    name: strings.FAUX_LOCS,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    pagePath: `/services/${ServiceIDs.LOCS}/${ServiceIDs.FAUX_LOCS}`,
    featuredImage: {
      path: require("data/loctineer/images/locs.jpg"),
      altText: "",
    },
    images: [{
      path: require("data/loctineer/images/locs.jpg"),
      altText: "",
    }],
    prices: [{ name: 'Shoulder length', value: 120, type: STARTING }, { name: 'Mid-back length', value: 140, type: STARTING }, { name: 'Waist length', value: 160, type: STARTING }],
    calendlyEventURL: `https://calendly.com/loctineer/wicks`,
  },
  {
    id: ServiceIDs.SOFT_LOCS,
    name: strings.SOFT_LOCS,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    pagePath: `/services/${ServiceIDs.LOCS}/${ServiceIDs.SOFT_LOCS}`,
    featuredImage: {
      path: require("data/loctineer/images/braids-and-twists.jpg"),
      altText: "",
    },
    images: [{
      path: require("data/loctineer/images/braids-and-twists.jpg"),
      altText: "",
    }],
    prices: [{ name: 'Shoulder length', value: 130, type: STARTING }, { name: 'Mid-back length', value: 150, type: STARTING }, { name: 'Waist length', value: 180, type: STARTING }],
    calendlyEventURL: `https://calendly.com/loctineer/wicks`,
  },
  {
    id: ServiceIDs.BUTTERFLY_DISTRESSED_LOCS,
    name: strings.BUTTERFLY_DISTRESSED_LOCS,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    pagePath: `/services/${ServiceIDs.LOCS}/${ServiceIDs.BUTTERFLY_DISTRESSED_LOCS}`,
    featuredImage: {
      path: require("data/loctineer/images/braids-and-twists.jpg"),
      altText: "",
    },
    images: [{
      path: require("data/loctineer/images/braids-and-twists.jpg"),
      altText: "",
    }],
    prices: [{ name: 'Shoulder length', value: 130, type: STARTING }, { name: 'Mid-back length', value: 150, type: STARTING }, { name: 'Waist length', value: 180, type: STARTING }],
    calendlyEventURL: `https://calendly.com/loctineer/wicks`,
  },
  {
    id: ServiceIDs.LOC_REPAIR,
    name: strings.LOC_REPAIR,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    pagePath: `/services/${ServiceIDs.LOCS}/${ServiceIDs.LOC_REPAIR}`,
    featuredImage: {
      path: require("data/loctineer/images/locs.jpg"),
      altText: "",
    },
    images: [{
      path: require("data/loctineer/images/locs.jpg"),
      altText: "",
    }],
    price: { value: 50, type: HOURLY, },
    calendlyEventURL: `https://calendly.com/loctineer/wicks`,
  },
  {
    id: ServiceIDs.LOC_RETWIST,
    name: strings.LOC_RETWIST,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    pagePath: `/services/${ServiceIDs.LOCS}/${ServiceIDs.LOC_RETWIST}`,
    featuredImage: {
      path: require("data/loctineer/images/loc-retwist.jpeg"),
      altText: "Example of a loc retwist style.",
    },
    images: [{
      path: require("data/loctineer/images/loc-retwist.jpeg"),
      altText: "Example of a loc retwist style.",
    }],
    price: { value: 50, type: HOURLY },
    calendlyEventURL: `https://calendly.com/loctineer/wicks`,
  },
];
