import React from "react";
import { Stack, Link, Typography } from "@mui/material";
import { navbaritems } from "./navbarItems";
import { displayDesktop, LinkHeader } from "../../../themes/CustomStyle";
function NavBar() {
  return (
    <Stack direction={"row"} component="nav" spacing={2} sx={displayDesktop}>
      {navbaritems.map((item) => {
        return (
          <LinkHeader href={item.url} key={item.id}>
            <Typography
              variant="headerLink"
              letterSpacing={2}
              sx={{ textTransform: "uppercase" }}
            >
              {item.text}
            </Typography>
          </LinkHeader>
        );
      })}
    </Stack>
  );
}

export default NavBar;
