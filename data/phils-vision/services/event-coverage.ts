import * as strings from "data/phils-vision/strings";
import { PriceType } from "types";
import { ServiceIDs } from "data/phils-vision/services/ids";
const { HOURLY, FIXED, STARTING } = PriceType;

export const eventCoverage = [
  {
    id: ServiceIDs.WEDDING_COVERAGE_PHOTO,
    name: strings.WEDDING_COVERAGE_PHOTO,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    pagePath: `/services/${ServiceIDs.EVENT_COVERAGE}/${ServiceIDs.WEDDING_COVERAGE_PHOTO}`,
    featuredImage: {
      path: require("data/phils-vision/images/wedding-coverage-4.jpeg"),
      altText: "",
    },
    price: { value: 500, type: STARTING },
    prices: [
      { name: 'Elopement Package', value: 500, type: FIXED },
      { name: 'Silver Package', value: 2000, type: FIXED },
      { name: 'Gold Package', value: 2500, type: FIXED },
      { name: 'Platinum Package', value: 2900, type: FIXED },
    ],
  },
  {
    id: ServiceIDs.WEDDING_COVERAGE_VIDEO,
    name: strings.WEDDING_COVERAGE_VIDEO,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    pagePath: `/services/${ServiceIDs.EVENT_COVERAGE}/${ServiceIDs.WEDDING_COVERAGE_VIDEO}`,
    featuredImage: {
      path: require("data/phils-vision/images/wedding-coverage-3.jpeg"),
      altText: "",
    },
    price: { value: 500, type: STARTING },
    prices: [
      { name: 'Elopement Package', value: 500, type: FIXED },
      { name: 'Silver Package', value: 2000, type: FIXED },
      { name: 'Gold Package', value: 2500, type: FIXED },
      { name: 'Platinum Package', value: 2900, type: FIXED },
    ],
  },
  {
    id: ServiceIDs.WEDDING_COVERAGE_COMBO,
    name: strings.WEDDING_COVERAGE_COMBO,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    pagePath: `/services/${ServiceIDs.EVENT_COVERAGE}/${ServiceIDs.WEDDING_COVERAGE_COMBO}`,
    featuredImage: {
      path: require("data/phils-vision/images/wedding-coverage.jpeg"),
      altText: "",
    },
    price: { value: 900, type: STARTING },
    prices: [
      { name: 'Elopement Package', value: 900, type: FIXED },
      { name: 'Silver Package', value: 3600, type: FIXED },
      { name: 'Gold Package', value: 4500, type: FIXED },
      { name: 'Platinum Package', value: 5220, type: FIXED },
    ],
  }
];
