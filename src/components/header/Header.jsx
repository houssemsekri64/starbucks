import React from "react";
import { Container } from "@mui/material";
import Logo from "./logo/Logo";
import NavBar from "./navbar/NavBar";
import Rightbar from "./rightbar/Rightbar";
import { BoxHeader, BoxSpaceBetween } from "../../themes/CustomStyle";
import MenuIcon from "./menuicon/MenuIcon";
function Header() {
  return (
    <BoxHeader>
      <Container maxWidth="xl">
        <BoxSpaceBetween>
          <BoxSpaceBetween sx={{ gap: 3 }}>
            <Logo />
            <NavBar />
          </BoxSpaceBetween>
          <Rightbar />
          <MenuIcon />
        </BoxSpaceBetween>
      </Container>
    </BoxHeader>
  );
}

export default Header;
