import * as strings from "data/phils-vision/strings";
import { personalPhotoshootServices } from "data/phils-vision/services/personal";
import { commercialPhotoshootServices } from "data/phils-vision/services/commercial";
import { ServiceIDs } from "data/phils-vision/services/ids";
import { weddingEventCoverage } from "./wedding";

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
      path: require("data/phils-vision/images/personal.jpeg"),
      altText: "",
    },
    images: [
      {
        path: require("data/phils-vision/images/personal.jpeg"),
        altText: "",
      }
    ],
    services: personalPhotoshootServices,
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
    services: commercialPhotoshootServices,
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
    id: ServiceIDs.WEDDING_COVERAGE,
    name: strings.WEDDING_COVERAGE,
    description:
      "We offer both styling and maintainance services for a variety of braids and twists styles. Check out our menu for your next look. We're sure you'll find something you love.",
    cta: {
      primary: {
        href: `/services/${ServiceIDs.WEDDING_COVERAGE}`,
        text: "See services",
      },
    },
    featuredImage: {
      path: require("data/phils-vision/images/wedding-event-coverage.jpeg"),
      altText: "",
    },
    images: [
      {
        path: require("data/phils-vision/images/wedding-event-coverage.jpeg"),
        altText: "",
      }
    ],
    services: weddingEventCoverage
  }
];
