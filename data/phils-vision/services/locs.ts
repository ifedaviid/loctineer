import * as strings from "data/loctineer/strings";
import { PriceType } from "types";
const { HOURLY, STARTING } = PriceType;

export const locs = [
  {
    id: strings.INSTANT_LOCS_ID,
    name: strings.INSTANT_LOCS,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: {
      primary: {
        href: `/services/${strings.LOCS_ID}/${strings.INSTANT_LOCS_ID}`,
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
    id: strings.TWO_STRAND_STARTER_LOCS_ID,
    name: strings.TWO_STRAND_STARTER_LOCS,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: {
      primary: {
        href: `/services/${strings.LOCS_ID}/${strings.TWO_STRAND_STARTER_LOCS_ID}`,
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
    id: strings.SISTER_LOCS_ID,
    name: strings.SISTER_LOCS,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: {
      primary: {
        href: `/services/${strings.LOCS_ID}/${strings.SISTER_LOCS_ID}`,
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
    price: { value: 50, type: HOURLY, },
    calendlyEventURL: `https://calendly.com/loctineer/wicks`,
  },
  {
    id: strings.MICRO_LOCS_ID,
    name: strings.MICRO_LOCS,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: {
      primary: {
        href: `/services/${strings.LOCS_ID}/${strings.MICRO_LOCS_ID}`,
        text: "See details",
      },
    },
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
    id: strings.WICKS_ID,
    name: strings.WICKS,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: {
      primary: {
        href: `/services/${strings.LOCS_ID}/${strings.WICKS_ID}`,
        text: "See details",
      },
    },
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
    id: strings.FAUX_LOCS_ID,
    name: strings.FAUX_LOCS,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: {
      primary: {
        href: `/services/${strings.LOCS_ID}/${strings.FAUX_LOCS_ID}`,
        text: "See details",
      },
    },
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
    id: strings.SOFT_LOCS_ID,
    name: strings.SOFT_LOCS,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: {
      primary: {
        href: `/services/${strings.LOCS_ID}/${strings.SOFT_LOCS_ID}`,
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
    prices: [{ name: 'Shoulder length', value: 130, type: STARTING }, { name: 'Mid-back length', value: 150, type: STARTING }, { name: 'Waist length', value: 180, type: STARTING }],
    calendlyEventURL: `https://calendly.com/loctineer/wicks`,
  },
  {
    id: strings.BUTTERFLY_DISTRESSED_LOCS_ID,
    name: strings.BUTTERFLY_DISTRESSED_LOCS,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: {
      primary: {
        href: `/services/${strings.LOCS_ID}/${strings.BUTTERFLY_DISTRESSED_LOCS_ID}`,
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
    prices: [{ name: 'Shoulder length', value: 130, type: STARTING }, { name: 'Mid-back length', value: 150, type: STARTING }, { name: 'Waist length', value: 180, type: STARTING }],
    calendlyEventURL: `https://calendly.com/loctineer/wicks`,
  },
  {
    id: strings.LOC_REPAIR_ID,
    name: strings.LOC_REPAIR,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: {
      primary: {
        href: `/services/${strings.LOCS_ID}/${strings.LOC_REPAIR_ID}`,
        text: "See details",
      },
    },
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
    id: strings.LOC_RETWIST_ID,
    name: strings.LOC_RETWIST,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: {
      primary: {
        href: `/services/${strings.LOCS_ID}/${strings.LOC_RETWIST_ID}`,
        text: "See details",
      },
    },
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
