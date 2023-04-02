import React from "react";
import { Box } from "@mui/material";
import { RxHamburgerMenu } from "react-icons/rx";
import { displayOnSmallScreen } from "../../../themes/CustomStyle";
function MenuIcon() {
  return (
    <Box sx={{ ...displayOnSmallScreen, cursor: "pointer" }}>
      <RxHamburgerMenu size={24} />
    </Box>
  );
}

export default MenuIcon;
