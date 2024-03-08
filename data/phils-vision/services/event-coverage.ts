import * as strings from "data/phils-vision/strings";
import { PriceType } from "types";
import { ServiceIDs } from "data/phils-vision/services/ids";
const { HOURLY } = PriceType;

export const eventCoverage = [
  {
    id: ServiceIDs.WEDDING_COVERAGE_PHOTO,
    name: strings.WEDDING_COVERAGE_PHOTO,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: {
      primary: {
        href: `/services/${ServiceIDs.EVENT_COVERAGE}/${ServiceIDs.WEDDING_COVERAGE_PHOTO}`,
        text: "See details",
      },
    },
    featuredImage: {
      path: require("data/phils-vision/images/wedding-coverage-4.jpeg"),
      altText: "",
    },
    images: [
      {
        path: require("data/phils-vision/images/wedding-coverage-4.jpeg"),
        altText: "",
      }
    ],
    price: { value: 50, type: HOURLY },
  },
  {
    id: ServiceIDs.WEDDING_COVERAGE_VIDEO,
    name: strings.WEDDING_COVERAGE_VIDEO,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: {
      primary: {
        href: `/services/${ServiceIDs.EVENT_COVERAGE}/${ServiceIDs.WEDDING_COVERAGE_VIDEO}`,
        text: "See details",
      },
    },
    featuredImage: {
      path: require("data/phils-vision/images/wedding-coverage-3.jpeg"),
      altText: "",
    },
    images: [
      {
        path: require("data/phils-vision/images/wedding-coverage-3.jpeg"),
        altText: "",
      },
    ],
    price: { value: 50, type: HOURLY },
  },
  {
    id: ServiceIDs.WEDDING_COVERAGE_COMBO,
    name: strings.WEDDING_COVERAGE_COMBO,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: {
      primary: {
        href: `/services/${ServiceIDs.EVENT_COVERAGE}/${ServiceIDs.WEDDING_COVERAGE_COMBO}`,
        text: "See details",
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
      },
    ],
    price: { value: 50, type: HOURLY, },
  }
];
