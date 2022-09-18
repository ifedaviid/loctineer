import * as strings from './strings'
export const services = [
    {
        name: strings.LOCS,
        services: [
            {
                name: strings.LOC_REPAIR,
                serviceCategory: strings.MAINTENANCE,
                canUseExtensions: true
            },
            {
                name: strings.LOC_RETWIST,
                serviceCategory: strings.MAINTENANCE,
                canUseExtensions: true
            },
            {
                name: strings.LOC_STYLING,
                serviceCategory: strings.MAINTENANCE,
                canUseExtensions: true
            },
            {
                name: strings.NATURAL_INSTANT_DREADLOCKS,
                serviceCategory: strings.INSTALLATION,
                canUseExtensions: true
            },
            {
                name: strings.TWO_STRAND_STARTER_LOCS,
                serviceCategory: strings.INSTALLATION,
                canUseExtensions: false
            },
            {
                name: strings.SISTER_LOCS,
                serviceCategory: strings.INSTALLATION,
                canUseExtensions: false
            }
        ]
    },
    {
        name: strings.BRAIDS_AND_TWISTS,
        services: [
            {
                name: strings.FAUX_LOCS,
                serviceCategory: strings.INSTALLATION,
                canUseExtensions: true
            },
            {
                name: strings.SOFT_LOCS,
                serviceCategory: strings.INSTALLATION,
                canUseExtensions: true
            },
            {
                name: strings.BUTTERFLY_DISTRESSED_LOCS,
                serviceCategory: strings.INSTALLATION,
                canUseExtensions: true
            },
            {
                name: strings.NATURAL_BRAIDS_AND_TWISTS,
                serviceCategory: strings.INSTALLATION,
                canUseExtensions: true
            },
            {
                name: strings.BOX_BRAIDS_AND_TWISTS,
                serviceCategory: strings.INSTALLATION,
                canUseExtensions: false
            },
            {
                name: strings.KINKY_PASSION_TWISTS,
                serviceCategory: strings.INSTALLATION,
                canUseExtensions: false
            },
            {
                name: strings.KNOTLESS_BRAIDS,
                serviceCategory: strings.INSTALLATION,
                canUseExtensions: false
            },
        ]
    },
    {
        name: strings.CONSULTATION,
    }
];


