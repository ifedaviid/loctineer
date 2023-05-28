import React from "react";
import { useRouter } from "next/router";
import MailIcon from "@mui/icons-material/Mail";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import LoctineerMobileLogo from "data/branding/loctineer-mobile-logo";
import { menuOptions } from "src/template/menu-options";

const MobileMenu = ({ showMobileMenu }) => {
  const router = useRouter();
  return (
    <Box
      role="presentation"
      onClick={() => showMobileMenu(false)}
      onKeyDown={() => showMobileMenu(false)}
    >
      <div style={{ padding: "3rem" }}>
        <LoctineerMobileLogo />
      </div>
      <Divider />
      <List>
        {menuOptions.map((menuOption, index) => {
          if (!menuOption.disabled)
            return (
              <>
                <ListItem
                  key={menuOption.name}
                  disablePadding
                  style={{ padding: "1rem" }}
                  onClick={() => router.push(menuOption.url)}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    {menuOption.name}
                  </ListItemButton>
                </ListItem>
                <Divider />
              </>
            );
        })}
      </List>
    </Box>
  );
};

export default MobileMenu;
