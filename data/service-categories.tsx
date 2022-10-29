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
                description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                category: ServiceCategory.MAINTENANCE,
                canUseExtensions: true,
                bookingUrl: '/#',
                image: {
                    path: require('../images/dreadlocks.jpg'),
                    altText: '',
                }
            },
            {
                name: strings.LOC_RETWIST,
                description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                category: ServiceCategory.MAINTENANCE,
                canUseExtensions: false,
                bookingUrl: '/#',
                image: {
                    path: require('../images/dreadlocks.jpg'),
                    altText: '',
                }

            },
            {
                name: strings.LOC_STYLING,
                description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                category: ServiceCategory.MAINTENANCE,
                canUseExtensions: false,
                bookingUrl: '/#',
                image: {
                    path: require('../images/dreadlocks.jpg'),
                    altText: '',
                }
            },
            {
                name: strings.NATURAL_INSTANT_DREADLOCKS,
                description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                category: ServiceCategory.INSTALLATION,
                canUseExtensions: true,
                bookingUrl: '/#',
                image: {
                    path: require('../images/dreadlocks.jpg'),
                    altText: '',
                }
            },
            {
                name: strings.TWO_STRAND_STARTER_LOCS,
                description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                category: ServiceCategory.INSTALLATION,
                canUseExtensions: false,
                bookingUrl: '/#',
                image: {
                    path: require('../images/dreadlocks.jpg'),
                    altText: '',
                }
            },
            {
                name: strings.SISTER_LOCS,
                description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                category: ServiceCategory.INSTALLATION,
                canUseExtensions: false,
                bookingUrl: '/#',
                image: {
                    path: require('../images/dreadlocks.jpg'),
                    altText: '',
                }
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
                description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                category: ServiceCategory.INSTALLATION,
                canUseExtensions: true,
                bookingUrl: '/#',
                image: {
                    path: require('../images/braids-and-twists.jpg'),
                    altText: '',
                }
            },
            {
                name: strings.SOFT_LOCS,
                description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                category: ServiceCategory.INSTALLATION,
                canUseExtensions: true,
                bookingUrl: '/#',
                image: {
                    path: require('../images/braids-and-twists.jpg'),
                    altText: '',
                }
            },
            {
                name: strings.BUTTERFLY_DISTRESSED_LOCS,
                description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                category: ServiceCategory.INSTALLATION,
                canUseExtensions: true,
                bookingUrl: '/#',
                image: {
                    path: require('../images/braids-and-twists.jpg'),
                    altText: '',
                }
            },
            {
                name: strings.NATURAL_BRAIDS_AND_TWISTS,
                description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                category: ServiceCategory.INSTALLATION,
                canUseExtensions: true,
                bookingUrl: '/#',
                image: {
                    path: require('../images/braids-and-twists.jpg'),
                    altText: '',
                }
            },
            {
                name: strings.BOX_BRAIDS_AND_TWISTS,
                description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                category: ServiceCategory.INSTALLATION,
                canUseExtensions: true,
                bookingUrl: '/#',
                image: {
                    path: require('../images/braids-and-twists.jpg'),
                    altText: '',
                }
            },
            {
                name: strings.KINKY_PASSION_TWISTS,
                description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                category: ServiceCategory.INSTALLATION,
                canUseExtensions: true,
                bookingUrl: '/#',
                image: {
                    path: require('../images/braids-and-twists.jpg'),
                    altText: '',
                }
            },
            {
                name: strings.KNOTLESS_BRAIDS,
                description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                category: ServiceCategory.INSTALLATION,
                canUseExtensions: true,
                bookingUrl: '/#',
                image: {
                    path: require('../images/braids-and-twists.jpg'),
                    altText: '',
                }
            },
        ]
    }
    // {
    //     name: strings.CONSULTATION,
    //     description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    //     slug: '/consult',
    //     image: {
    //         path: require('../images/consultation.jpg'),
    //         altText: '',
    //     },
    // }
];


