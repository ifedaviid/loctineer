import React from "react";
import Title from "../title";
import type { RootState } from "../../store";
import { useSelector } from 'react-redux';
import GridMenu from "../grid-menu";
import { setStyle } from "../../actions/booking";

// Dreadlocks styles
const NATURAL_INSTANT_DREADLOCKS = "Natural Instant dreadlocks";
const TWO_STRAND_STARTER_LOCS = "Two-strand starter locs";
const SISTER_LOCS = "Sister locs";

// Braids & Twists Styles
const FAUX_LOCS = "Faux locs";
const SOFT_LOCS = "Soft locs";
const BUTTERFLY_DISTRESSED_LOCS = "Butterfly/Distressed Locs";
const KNOTLESS_BRAIDS = "Knotless braids";
const KINKY_PASSION_TWISTS = "Kinky/Passion twists";
const BOX_BRAIDS_AND_TWISTS = "Box braids & twists";
const NATURAL_BRAIDS_AND_TWISTS = "Natural hair braids & twists";

const SelectInstallationStyle = () => {
    const service = useSelector((state: RootState) => state.booking.service);

    const locStyles = [
        {
            name: NATURAL_INSTANT_DREADLOCKS,
            canUseExtensions: "With or Without extensions",
            action: setStyle(NATURAL_INSTANT_DREADLOCKS),
        },
        {
            name: TWO_STRAND_STARTER_LOCS,
            canUseExtensions: "Without extensions",
            action: setStyle(TWO_STRAND_STARTER_LOCS),
        },
        {
            name: SISTER_LOCS,
            canUseExtensions: "Without extensions.",
            action: setStyle(SISTER_LOCS),
        },
    ];

    const braidsAndTwistsStyles = [
        {
            name: FAUX_LOCS,
            canUseExtensions: "With extensions",
            action: setStyle(FAUX_LOCS),
        },
        {
            name: SOFT_LOCS,
            canUseExtensions: "With extensions",
            action: setStyle(SOFT_LOCS),
        },
        {
            name: BUTTERFLY_DISTRESSED_LOCS,
            canUseExtensions: "With extensions",
            action: setStyle(BUTTERFLY_DISTRESSED_LOCS),
        },
        {
            name: KNOTLESS_BRAIDS,
            canUseExtensions: "With extensions",
            action: setStyle(KNOTLESS_BRAIDS),
        },
        {
            name: KINKY_PASSION_TWISTS,
            canUseExtensions: "With extensions",
            action: setStyle(KINKY_PASSION_TWISTS),
        },
        {
            name: BOX_BRAIDS_AND_TWISTS,
            canUseExtensions: "With extensions",
            action: setStyle(BOX_BRAIDS_AND_TWISTS),
        },
        {
            name: NATURAL_BRAIDS_AND_TWISTS,
            canUseExtensions: "With or Without extensions",
            action: setStyle(NATURAL_BRAIDS_AND_TWISTS),
        },
    ];

    const getServiceStyles = () => {
        switch (service) {
            case "Locs":
            default:
                return locStyles;
            case "Braids & Twists":
                return braidsAndTwistsStyles;
        }
    }

    return <GridMenu items={getServiceStyles()} />
};

export default SelectInstallationStyle;
