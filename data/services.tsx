// Services
export const LOCS = "Dreadlocks";
export const BRAIDS_AND_TWISTS = "Braids & Twists";
export const CONSULTATION = "Consultation";

// Service Categories
export const INSTALLATION = "Installation";
export const MAINTENANCE = "Maintenance";

// Services (Locs)
export const LOC_REPAIR = "Loc Repair";
export const LOC_RETWIST = "Loc Retwist";
export const LOC_STYLING = "Loc Styling";
export const NATURAL_INSTANT_DREADLOCKS = "Natural Instant dreadlocks";
export const TWO_STRAND_STARTER_LOCS = "Two-strand starter locs";
export const SISTER_LOCS = "Sister locs";

// Services (Braids & Twists)
export const FAUX_LOCS = "Faux locs";
export const SOFT_LOCS = "Soft locs";
export const BUTTERFLY_DISTRESSED_LOCS = "Butterfly/Distressed Locs";
export const NATURAL_BRAIDS_AND_TWISTS = "Natural hair braids & twists";
export const BOX_BRAIDS_AND_TWISTS = "Box braids & twists";
export const KINKY_PASSION_TWISTS = "Kinky/Passion twists";
export const KNOTLESS_BRAIDS = "Knotless braids";

export const dreadlocksServices = [
    {
        name: LOC_REPAIR,
        serviceCategory: MAINTENANCE,
        canUseExtensions: true
    },
    {
        name: LOC_RETWIST,
        serviceCategory: MAINTENANCE,
        canUseExtensions: true
    },
    {
        name: LOC_STYLING,
        serviceCategory: MAINTENANCE,
        canUseExtensions: true
    },
    {
        name: NATURAL_INSTANT_DREADLOCKS,
        serviceCategory: INSTALLATION,
        canUseExtensions: true
    },
    {
        name: TWO_STRAND_STARTER_LOCS,
        serviceCategory: INSTALLATION,
        canUseExtensions: false
    },
    {
        name: SISTER_LOCS,
        serviceCategory: INSTALLATION,
        canUseExtensions: false
    },
];

export const braidingServices = [
    {
        name: FAUX_LOCS,
        serviceCategory: INSTALLATION,
        canUseExtensions: true
    },
    {
        name: SOFT_LOCS,
        serviceCategory: INSTALLATION,
        canUseExtensions: true
    },
    {
        name: BUTTERFLY_DISTRESSED_LOCS,
        serviceCategory: INSTALLATION,
        canUseExtensions: true
    },
    {
        name: NATURAL_BRAIDS_AND_TWISTS,
        serviceCategory: INSTALLATION,
        canUseExtensions: true
    },
    {
        name: BOX_BRAIDS_AND_TWISTS,
        serviceCategory: INSTALLATION,
        canUseExtensions: false
    },
    {
        name: KINKY_PASSION_TWISTS,
        serviceCategory: INSTALLATION,
        canUseExtensions: false
    },
    {
        name: KNOTLESS_BRAIDS,
        serviceCategory: INSTALLATION,
        canUseExtensions: false
    },
];


