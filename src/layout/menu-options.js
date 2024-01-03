import { Home, Work, Image } from "@mui/icons-material";

export const menuOptions = [
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
    icon: <Image alt="" />,
  },
];
