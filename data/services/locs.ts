import * as strings from "data/strings";
import { Rate } from "src/types";
const { HOURLY, MINIMUM } = Rate;

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
      path: require("data/images/locs.jpg"),
      altText: "",
    },
    images: [
      {
        path: require("data/images/locs.jpg"),
        altText: "",
      }
    ],
    price: { value: 50, rate: HOURLY, },
    calendlyEventLinkID: "instant-locs",
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
      path: require("data/images/locs.jpg"),
      altText: "",
    },
    images: [
      {
        path: require("data/images/locs.jpg"),
        altText: "",
      },
    ],
    price: { value: 50, rate: HOURLY },
    calendlyEventLinkID: "two-strand-twists",
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
      path: require("data/images/locs.jpg"),
      altText: "",
    },
    images: [
      {
        path: require("data/images/locs.jpg"),
        altText: "",
      },
    ],
    price: { value: 50, rate: HOURLY, },
    calendlyEventLinkID: "sister-locs",
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
      path: require("data/images/locs.jpg"),
      altText: "",
    },
    images: [{
      path: require("data/images/locs.jpg"),
      altText: "",
    }],
    price: { value: 50, rate: HOURLY, },
    calendlyEventLinkID: "micro-locs",
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
      path: require("data/images/locs.jpg"),
      altText: "",
    },
    images: [{
      path: require("data/images/locs.jpg"),
      altText: "",
    }],
    price: { value: 50, rate: HOURLY },
    calendlyEventLinkID: "wicks"
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
      path: require("data/images/locs.jpg"),
      altText: "",
    },
    images: [{
      path: require("data/images/locs.jpg"),
      altText: "",
    }],
    prices: [{ name: 'Shoulder length', value: 120, rate: MINIMUM }, { name: 'Mid-back length', value: 140, rate: MINIMUM }, { name: 'Waist length', value: 160, rate: MINIMUM }],
    calendlyEventLinkID: "faux-locs"
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
      path: require("data/images/braids-and-twists.jpg"),
      altText: "",
    },
    images: [{
      path: require("data/images/braids-and-twists.jpg"),
      altText: "",
    }],
    prices: [{ name: 'Shoulder length', value: 130, rate: MINIMUM }, { name: 'Mid-back length', value: 150, rate: MINIMUM }, { name: 'Waist length', value: 180, rate: MINIMUM }],
    calendlyEventLinkID: "soft-locs"
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
      path: require("data/images/braids-and-twists.jpg"),
      altText: "",
    },
    images: [{
      path: require("data/images/braids-and-twists.jpg"),
      altText: "",
    }],
    prices: [{ name: 'Shoulder length', value: 130, rate: MINIMUM }, { name: 'Mid-back length', value: 150, rate: MINIMUM }, { name: 'Waist length', value: 180, rate: MINIMUM }],
    calendlyEventLinkID: "butterfly-distressed-locs"
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
      path: require("data/images/locs.jpg"),
      altText: "",
    },
    images: [{
      path: require("data/images/locs.jpg"),
      altText: "",
    }],
    price: { value: 50, rate: HOURLY, },
    calendlyEventLinkID: "loc-repair"
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
      path: require("data/images/locs.jpg"),
      altText: "",
    },
    images: [{
      path: require("data/images/locs.jpg"),
      altText: "",
    }],
    price: { value: 50, rate: HOURLY, },
    calendlyEventLinkID: "loc-retwist"
  },
];
