import * as strings from './strings';

enum ServiceCategory {
    INSTALLATION = 'Installation',
    MAINTENANCE = 'Maintenance'
}

export const serviceMenu = [
    {
        id: strings.LOCS_ID,
        name: strings.LOCS,
        description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        cta: {
            primary: {
                href: `/${strings.LOCS_ID}`,
                text: 'See related services'
            },
        },
        image: {
            path: require('../images/dreadlocks.jpg'),
            altText: '',
        },
        services: [
            {
                id: strings.LOC_REPAIR_ID,
                name: strings.LOC_REPAIR,
                description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                cta: {
                    primary: {
                        href: `${strings.LOCS_ID}/${strings.LOC_REPAIR_ID}/book-appointment`,
                        text: 'Book Appointment'
                    },
                    secondary: {
                        href: `${strings.LOCS_ID}/${strings.LOC_REPAIR_ID}`,
                        text: 'See details'
                    }
                },
                image: {
                    path: require('../images/dreadlocks.jpg'),
                    altText: '',
                },
                category: ServiceCategory.MAINTENANCE,
                canUseExtensions: true
            },
            {
                id: strings.LOC_RETWIST_ID,
                name: strings.LOC_RETWIST,
                description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                cta: {
                    primary: {
                        href: `${strings.LOCS_ID}/${strings.LOC_RETWIST_ID}/book-appointment`,
                        text: 'Book an appointment'
                    },
                },
                image: {
                    path: require('../images/dreadlocks.jpg'),
                    altText: '',
                },
                category: ServiceCategory.MAINTENANCE,
                canUseExtensions: false,

            },
            {
                id: strings.LOC_STYLING_ID,
                name: strings.LOC_STYLING,
                description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                cta: {
                    primary: {
                        href: `${strings.LOCS_ID}/${strings.LOC_STYLING_ID}/book-appointment`,
                        text: 'Book an appointment'
                    },
                },
                image: {
                    path: require('../images/dreadlocks.jpg'),
                    altText: '',
                },
                category: ServiceCategory.MAINTENANCE,
                canUseExtensions: false
            },
            {
                id: strings.NATURAL_INSTANT_DREADLOCKS_ID,
                name: strings.NATURAL_INSTANT_DREADLOCKS,
                description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                cta: {
                    primary: {
                        href: `${strings.LOCS_ID}/${strings.NATURAL_INSTANT_DREADLOCKS_ID}/book-appointment`,
                        text: 'Book an appointment'
                    },
                },
                image: {
                    path: require('../images/dreadlocks.jpg'),
                    altText: '',
                },
                category: ServiceCategory.INSTALLATION,
                canUseExtensions: true,
            },
            {
                id: strings.TWO_STRAND_STARTER_LOCS_ID,
                name: strings.TWO_STRAND_STARTER_LOCS,
                description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                cta: {
                    primary: {
                        href: `${strings.LOCS_ID}/${strings.TWO_STRAND_STARTER_LOCS_ID}/book-appointment`,
                        text: 'Book an appointment'
                    },
                },
                image: {
                    path: require('../images/dreadlocks.jpg'),
                    altText: '',
                },
                category: ServiceCategory.INSTALLATION,
                canUseExtensions: false,
            },
            {
                id: strings.SISTER_LOCS_ID,
                name: strings.SISTER_LOCS,
                description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                cta: {
                    primary: {
                        href: `${strings.LOCS_ID}/${strings.SISTER_LOCS_ID}/book-appointment`,
                        text: 'Book an appointment'
                    },
                },
                image: {
                    path: require('../images/dreadlocks.jpg'),
                    altText: '',
                },
                category: ServiceCategory.INSTALLATION,
                canUseExtensions: false
            }
        ]
    },
    {
        id: strings.BRAIDS_AND_TWISTS_ID,
        name: strings.BRAIDS_AND_TWISTS,
        description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        cta: {
            primary: {
                href: `/${strings.BRAIDS_AND_TWISTS_ID}`,
                text: 'See related services'
            },
        },
        image: {
            path: require('../images/braids-and-twists.jpg'),
            altText: '',
        },
        services: [
            {
                id: strings.FAUX_LOCS_ID,
                name: strings.FAUX_LOCS,
                description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                cta: {
                    primary: {
                        href: `${strings.BRAIDS_AND_TWISTS_ID}/${strings.FAUX_LOCS_ID}/book-appointment`,
                        text: 'Book an appointment'
                    },
                },
                image: {
                    path: require('../images/braids-and-twists.jpg'),
                    altText: '',
                },
                category: ServiceCategory.INSTALLATION,
                canUseExtensions: true,
            },
            {
                id: strings.SOFT_LOCS_ID,
                name: strings.SOFT_LOCS,
                description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                cta: {
                    primary: {
                        href: `${strings.BRAIDS_AND_TWISTS_ID}/${strings.SOFT_LOCS_ID}/book-appointment`,
                        text: 'Book an appointment'
                    },
                },
                image: {
                    path: require('../images/braids-and-twists.jpg'),
                    altText: '',
                },
                category: ServiceCategory.INSTALLATION,
                canUseExtensions: true,
            },
            {
                id: strings.BUTTERFLY_DISTRESSED_LOCS_ID,
                name: strings.BUTTERFLY_DISTRESSED_LOCS,
                description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                cta: {
                    primary: {
                        href: `${strings.BRAIDS_AND_TWISTS_ID}/${strings.BUTTERFLY_DISTRESSED_LOCS_ID}/book-appointment`,
                        text: 'Book an appointment'
                    },
                },
                image: {
                    path: require('../images/braids-and-twists.jpg'),
                    altText: '',
                },
                category: ServiceCategory.INSTALLATION,
                canUseExtensions: true
            },
            {
                id: strings.NATURAL_BRAIDS_AND_TWISTS_ID,
                name: strings.NATURAL_BRAIDS_AND_TWISTS,
                description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                cta: {
                    primary: {
                        href: `${strings.BRAIDS_AND_TWISTS_ID}/${strings.NATURAL_BRAIDS_AND_TWISTS_ID}/book-appointment`,
                        text: 'Book an appointment'
                    },
                },
                image: {
                    path: require('../images/braids-and-twists.jpg'),
                    altText: '',
                },
                category: ServiceCategory.INSTALLATION,
                canUseExtensions: true
            },
            {
                id: strings.BOX_BRAIDS_AND_TWISTS_ID,
                name: strings.BOX_BRAIDS_AND_TWISTS,
                description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                cta: {
                    primary: {
                        href: `${strings.BRAIDS_AND_TWISTS_ID}/${strings.BOX_BRAIDS_AND_TWISTS_ID}/book-appointment`,
                        text: 'Book an appointment'
                    },
                },
                image: {
                    path: require('../images/braids-and-twists.jpg'),
                    altText: '',
                },
                category: ServiceCategory.INSTALLATION,
                canUseExtensions: true
            },
            {
                id: strings.KINKY_PASSION_TWISTS_ID,
                name: strings.KINKY_PASSION_TWISTS,
                description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                cta: {
                    primary: {
                        href: `${strings.BRAIDS_AND_TWISTS_ID}/${strings.KINKY_PASSION_TWISTS_ID}/book-appointment`,
                        text: 'Book an appointment'
                    },
                },
                image: {
                    path: require('../images/braids-and-twists.jpg'),
                    altText: '',
                },
                category: ServiceCategory.INSTALLATION,
                canUseExtensions: true
            },
            {
                id: strings.KNOTLESS_BRAIDS_ID,
                name: strings.KNOTLESS_BRAIDS,
                description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                cta: {
                    primary: {
                        href: `/${strings.BRAIDS_AND_TWISTS_ID}/${strings.KNOTLESS_BRAIDS_ID}/book-appointment`,
                        text: 'Book an appointment'
                    },
                },
                image: {
                    path: require('../images/braids-and-twists.jpg'),
                    altText: '',
                },
                category: ServiceCategory.INSTALLATION,
                canUseExtensions: true
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


