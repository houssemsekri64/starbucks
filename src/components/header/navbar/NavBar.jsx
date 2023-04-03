import React from "react";
import { Stack, Link, Typography, AppBar } from "@mui/material";
import { navbaritems } from "./navbarItems";
import { displayDesktop, LinkHeader } from "../../../themes/CustomStyle";
function NavBar() {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      component="nav"
      spacing={{ xs: 3, md: 2 }}
    >
      {navbaritems.map((item) => {
        return (
          <LinkHeader href={item.url} key={item.id}>
            <Typography
              variant="headerLink"
              letterSpacing={2}
              sx={{
                textTransform: {
                  md: "uppercase",
                  xs: "capitalize",
                },
              }}
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
