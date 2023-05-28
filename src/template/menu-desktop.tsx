import React from "react";
import Link from "@mui/material/Link";
import { menuOptions } from "src/template/menu-options";

const MenuDesktop = () => {
  return (
    <ul>
      {menuOptions.map((menuOption, idx) => {
        if (!menuOption.disabled)
          return (
            <li key={idx}>
              <Link href={menuOption.url}>{menuOption.name}</Link>
            </li>
          );
      })}
    </ul>
  );
};

export default MenuDesktop;
