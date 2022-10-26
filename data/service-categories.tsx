import * as strings from './strings';

enum ServiceCategory {
    INSTALLATION = 'Installation',
    MAINTENANCE = 'Maintenance'
}

export const serviceMenu = [
    {
        name: strings.LOCS,
        description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        slug: '/dreadlocks',
        image: {
            path: require('../images/dreadlocks.jpg'),
            altText: '',
        },
        services: [
            {
                name: strings.LOC_REPAIR,
                category: ServiceCategory.MAINTENANCE,
                canUseExtensions: true
            },
            {
                name: strings.LOC_RETWIST,
                category: ServiceCategory.MAINTENANCE,
                canUseExtensions: false
            },
            {
                name: strings.LOC_STYLING,
                category: ServiceCategory.MAINTENANCE,
                canUseExtensions: false
            },
            {
                name: strings.NATURAL_INSTANT_DREADLOCKS,
                category: ServiceCategory.INSTALLATION,
                canUseExtensions: true
            },
            {
                name: strings.TWO_STRAND_STARTER_LOCS,
                category: ServiceCategory.INSTALLATION,
                canUseExtensions: false
            },
            {
                name: strings.SISTER_LOCS,
                category: ServiceCategory.INSTALLATION,
                canUseExtensions: false
            }
        ]
    },
    {
        name: strings.BRAIDS_AND_TWISTS,
        description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        slug: '/braids-and-twists',
        image: {
            path: require('../images/braids-and-twists.jpg'),
            altText: '',
        },
        services: [
            {
                name: strings.FAUX_LOCS,
                category: ServiceCategory.INSTALLATION,
                canUseExtensions: true
            },
            {
                name: strings.SOFT_LOCS,
                category: ServiceCategory.INSTALLATION,
                canUseExtensions: true
            },
            {
                name: strings.BUTTERFLY_DISTRESSED_LOCS,
                category: ServiceCategory.INSTALLATION,
                canUseExtensions: true
            },
            {
                name: strings.NATURAL_BRAIDS_AND_TWISTS,
                category: ServiceCategory.INSTALLATION,
                canUseExtensions: true
            },
            {
                name: strings.BOX_BRAIDS_AND_TWISTS,
                category: ServiceCategory.INSTALLATION,
                canUseExtensions: true
            },
            {
                name: strings.KINKY_PASSION_TWISTS,
                category: ServiceCategory.INSTALLATION,
                canUseExtensions: true
            },
            {
                name: strings.KNOTLESS_BRAIDS,
                category: ServiceCategory.INSTALLATION,
                canUseExtensions: true
            },
        ]
    },
    {
        name: strings.CONSULTATION,
        description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        slug: '/consult',
        image: {
            path: require('../images/consultation.jpg'),
            altText: '',
        },
    }
];


