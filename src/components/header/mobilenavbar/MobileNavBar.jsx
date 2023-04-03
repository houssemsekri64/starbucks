import { Drawer, Box } from "@mui/material/";
import { styled } from "@mui/material";
import React from "react";
import NavBar from "../navbar/NavBar";
import Rightbar from "../rightbar/Rightbar";
const CustomDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    top: "70px", // adjust as needed
  },
}));
function MobileNavBar({ open, setOpen }) {
  return (
    <CustomDrawer open={open} onClose={() => setOpen(!open)} anchor={"right"}>
      <Box sx={{ minWidth: "300px" }} pt={6} pl={3}>
        <NavBar />
        <Rightbar />
      </Box>
    </CustomDrawer>
  );
}

export default MobileNavBar;
