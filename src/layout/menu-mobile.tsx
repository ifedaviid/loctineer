import React from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { menuOptions } from "src/layout/menu-options";
import LoctineerLogo from "data/logo";

const MobileMenu = ({ showMobileMenu }) => {
  const router = useRouter();
  return (
    <Box
      role="presentation"
      onClick={() => showMobileMenu(false)}
      onKeyDown={() => showMobileMenu(false)}
      sx={{ backgroundColor: '#484848', color: 'lightgray', height: '100%' }}
    >
      <div style={{ height: "20%", display: 'flex', justifyContent: 'center' }}>
        <LoctineerLogo style={{ alignSelf: 'center' }} />
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
                    <ListItemIcon>{menuOption.icon}</ListItemIcon>
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
