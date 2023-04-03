import React from "react";
import { Box } from "@mui/material";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

function MenuIcon({ open, setOpen }) {
  return (
    <Box
      sx={{ cursor: "pointer" }}
      onClick={() => setOpen(!open)}
      color="primary.main"
    >
      {open ? <AiOutlineClose size={20} /> : <RxHamburgerMenu size={20} />}
    </Box>
  );
}

export default MenuIcon;
