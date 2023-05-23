import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import LoctineerMobileLogo from "src/logo/loctineer-mobile-logo";

const MobileMenu = ({ showMobileMenu }) => {
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
        {["Home", "Services", "Photos", "Reviews", "Contact Us"].map(
          (text, index) => (
            <>
              <ListItem key={text} disablePadding style={{ padding: "1rem" }}>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  {text}
                </ListItemButton>
              </ListItem>
              <Divider />
            </>
          )
        )}
      </List>
    </Box>
  );
};

export default MobileMenu;
