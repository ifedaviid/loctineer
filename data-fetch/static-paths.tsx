import { strings } from "../data";

export const getServicePaths = (isDreadlocks) => {
  return isDreadlocks
    ? {
        paths: [
          { params: { "service-id": strings.LOC_REPAIR_ID } },
          { params: { "service-id": strings.LOC_RETWIST_ID } },
          { params: { "service-id": strings.LOC_STYLING_ID } },
          { params: { "service-id": strings.SISTER_LOCS_ID } },
          { params: { "service-id": strings.NATURAL_INSTANT_DREADLOCKS_ID } },
          { params: { "service-id": strings.TWO_STRAND_STARTER_LOCS_ID } },
        ],
        fallback: false,
      }
    : {
        paths: [
          { params: { "service-id": strings.FAUX_LOCS_ID } },
          { params: { "service-id": strings.SOFT_LOCS_ID } },
          { params: { "service-id": strings.BUTTERFLY_DISTRESSED_LOCS_ID } },
          { params: { "service-id": strings.BOX_BRAIDS_AND_TWISTS_ID } },
          { params: { "service-id": strings.KINKY_PASSION_TWISTS_ID } },
          { params: { "service-id": strings.KNOTLESS_BRAIDS_ID } },
        ],
        fallback: false,
      };
};
