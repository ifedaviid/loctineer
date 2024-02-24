/* eslint-disable jsx-a11y/alt-text */
import { Home, Work, Image } from "@mui/icons-material";

export const pages = [
  {
    name: "Home",
    url: `/`,
    disabled: false,
    icon: <Home />,
  },
  {
    name: "Services",
    url: `/services`,
    disabled: false,
    icon: <Work />,
  },
  {
    name: "Photos",
    url: `/photos`,
    disabled: true,
    icon: <Image />,
  },
];
