import * as strings from './strings'
export const services = [
    {
        name: strings.LOCS,
        services: [
            {
                name: strings.LOC_REPAIR,
                appointmentType: strings.MAINTENANCE,
                canUseExtensions: true
            },
            {
                name: strings.LOC_RETWIST,
                appointmentType: strings.MAINTENANCE,
                canUseExtensions: false
            },
            {
                name: strings.LOC_STYLING,
                appointmentType: strings.MAINTENANCE,
                canUseExtensions: true
            },
            {
                name: strings.NATURAL_INSTANT_DREADLOCKS,
                appointmentType: strings.INSTALLATION,
                canUseExtensions: true
            },
            {
                name: strings.TWO_STRAND_STARTER_LOCS,
                appointmentType: strings.INSTALLATION,
                canUseExtensions: false
            },
            {
                name: strings.SISTER_LOCS,
                appointmentType: strings.INSTALLATION,
                canUseExtensions: false
            }
        ]
    },
    {
        name: strings.BRAIDS_AND_TWISTS,
        services: [
            {
                name: strings.FAUX_LOCS,
                appointmentType: strings.INSTALLATION,
                canUseExtensions: true
            },
            {
                name: strings.SOFT_LOCS,
                appointmentType: strings.INSTALLATION,
                canUseExtensions: true
            },
            {
                name: strings.BUTTERFLY_DISTRESSED_LOCS,
                appointmentType: strings.INSTALLATION,
                canUseExtensions: true
            },
            {
                name: strings.NATURAL_BRAIDS_AND_TWISTS,
                appointmentType: strings.INSTALLATION,
                canUseExtensions: true
            },
            {
                name: strings.BOX_BRAIDS_AND_TWISTS,
                appointmentType: strings.INSTALLATION,
                canUseExtensions: true
            },
            {
                name: strings.KINKY_PASSION_TWISTS,
                appointmentType: strings.INSTALLATION,
                canUseExtensions: true
            },
            {
                name: strings.KNOTLESS_BRAIDS,
                appointmentType: strings.INSTALLATION,
                canUseExtensions: true
            },
        ]
    },
    {
        name: strings.CONSULTATION,
    }
];


