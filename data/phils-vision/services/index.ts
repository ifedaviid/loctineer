import * as strings from "data/phils-vision/strings";
import { ServiceIDs } from "data/phils-vision/services/ids";
import { eventCoverage } from "./event-coverage";
import { PriceType } from "types";

const { HOURLY, FIXED } = PriceType;

export const allServices = [
  {
    id: ServiceIDs.PERSONAL,
    name: strings.PERSONAL,
    description:
      "We offer installation services for those interested in locs and maintenance services for those already with locs. Whatever you're looking for, you're guaranteed healthy and beautiful locs.",
    cta: {
      primary: {
        href: `/services/${ServiceIDs.PERSONAL}`,
        text: "See services",
      },
    },
    featuredImage: {
      path: require("data/phils-vision/images/personal-shoot.jpeg"),
      altText: "",
    },
    images: [
      {
        path: require("data/phils-vision/images/personal-shoot-2.jpeg"),
        altText: "",
      },
      {
        path: require("data/phils-vision/images/personal-shoot-3.jpeg"),
        altText: "",
      },
      {
        path: require("data/phils-vision/images/personal-shoot-4.jpeg"),
        altText: "",
      },
      {
        path: require("data/phils-vision/images/personal-shoot-5.jpeg"),
        altText: "",
      },
      {
        path: require("data/phils-vision/images/personal-shoot-6.jpeg"),
        altText: "",
      }
    ],
    prices: [
      { name: 'Head Shots', value: 100, type: FIXED },
      { name: 'Portraits', value: 120, type: FIXED },
      { name: 'Birthday Shoot', value: 140, type: HOURLY }
    ],
  },
  {
    id: ServiceIDs.COMMERCIAL,
    name: strings.COMMERCIAL,
    description:
      "We offer both styling and maintainance services for a variety of braids and twists styles. Check out our menu for your next look. We're sure you'll find something you love.",
    cta: {
      primary: {
        href: `/services/${ServiceIDs.COMMERCIAL}`,
        text: "See services",
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
      }
    ],
    prices: [
      { name: 'Food Shoot', value: 150, type: HOURLY },
      { name: 'Product Shoot', value: 150, type: HOURLY },
      { name: 'Fashion Shoot', value: 175, type: HOURLY },
      { name: 'Content Creation', value: 250, type: HOURLY },
    ],
  },
  {
    id: ServiceIDs.FORMAL_EVENT_COVERAGE,
    name: strings.FORMAL_EVENT_COVERAGE,
    description:
      "We offer both styling and maintainance services for a variety of braids and twists styles. Check out our menu for your next look. We're sure you'll find something you love.",
    cta: {
      primary: {
        href: `/services/${ServiceIDs.FORMAL_EVENT_COVERAGE}`,
        text: "See services",
      },
    },
    featuredImage: {
      path: require("data/phils-vision/images/formal-event-coverage.jpeg"),
      altText: "",
    },
    images: [
      {
        path: require("data/phils-vision/images/formal-event-coverage.jpeg"),
        altText: "",
      }
    ],
  },
  {
    id: ServiceIDs.EVENT_COVERAGE,
    name: strings.EVENT_COVERAGE,
    description:
      "We offer both styling and maintainance services for a variety of braids and twists styles. Check out our menu for your next look. We're sure you'll find something you love.",
    cta: {
      primary: {
        href: `/services/${ServiceIDs.EVENT_COVERAGE}`,
        text: "See services",
      },
    },
    featuredImage: {
      path: require("data/phils-vision/images/wedding-coverage.jpeg"),
      altText: "",
    },
    images: [
      {
        path: require("data/phils-vision/images/wedding-coverage.jpeg"),
        altText: "",
      }
    ],
    services: eventCoverage
  }
];
