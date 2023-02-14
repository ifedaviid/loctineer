import { strings } from "../data";

const {
  LOC_REPAIR_ID,
  LOC_RETWIST_ID,
  LOC_STYLING_ID,
  SISTER_LOCS_ID,
  NATURAL_INSTANT_DREADLOCKS_ID,
  TWO_STRAND_STARTER_LOCS_ID,
  FAUX_LOCS_ID,
  SOFT_LOCS_ID,
  BUTTERFLY_DISTRESSED_LOCS_ID,
  BOX_BRAIDS_AND_TWISTS_ID,
  KINKY_PASSION_TWISTS_ID,
  KNOTLESS_BRAIDS_ID,
} = strings;

export const getServicePaths = (isDreadlocks: boolean) => {
  return isDreadlocks
    ? {
        paths: [
          { params: { "service-id": LOC_REPAIR_ID } },
          { params: { "service-id": LOC_RETWIST_ID } },
          { params: { "service-id": LOC_STYLING_ID } },
          { params: { "service-id": SISTER_LOCS_ID } },
          { params: { "service-id": NATURAL_INSTANT_DREADLOCKS_ID } },
          { params: { "service-id": TWO_STRAND_STARTER_LOCS_ID } },
        ],
        fallback: false,
      }
    : {
        paths: [
          { params: { "service-id": FAUX_LOCS_ID } },
          { params: { "service-id": SOFT_LOCS_ID } },
          { params: { "service-id": BUTTERFLY_DISTRESSED_LOCS_ID } },
          { params: { "service-id": BOX_BRAIDS_AND_TWISTS_ID } },
          { params: { "service-id": KINKY_PASSION_TWISTS_ID } },
          { params: { "service-id": KNOTLESS_BRAIDS_ID } },
        ],
        fallback: false,
      };
};
