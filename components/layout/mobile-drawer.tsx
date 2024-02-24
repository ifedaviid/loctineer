import React from "react";
import { useRouter } from "next/router";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { pages } from "./pages";
import LoctineerLogo from "data/loctineer/logo";

const MobileDrawer = ({ isMobileMenuOpen, showMobileMenu }) => {
  const router = useRouter();
  return (
    <Drawer
      anchor="right"
      open={isMobileMenuOpen}
      onClose={() => showMobileMenu(false)}
    >
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
          {pages.map((page, index) => {
            if (!page.disabled)
              return (
                <>
                  <ListItem
                    key={page.name}
                    disablePadding
                    style={{ padding: "1rem" }}
                    onClick={() => router.push(page.url)}
                  >
                    <ListItemButton>
                      <ListItemIcon>{page.icon}</ListItemIcon>
                      {page.name}
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                </>
              );
          })}
        </List>
      </Box>
    </Drawer>
  );
};

export default MobileDrawer;
