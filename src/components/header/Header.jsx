import React, { useContext, useState } from "react";
import { Container, AppBar } from "@mui/material";
import Logo from "./logo/Logo";
import NavBar from "./navbar/NavBar";
import Rightbar from "./rightbar/Rightbar";
import { BoxHeader, BoxSpaceBetween } from "../../themes/CustomStyle";
import MenuIcon from "./menuicon/MenuIcon";
import MobileNavBar from "./mobilenavbar/MobileNavBar";
import { ThemeContext } from "../../themes/ThemeContext";

function Header() {
  const { isSmallScreen } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  return (
    <AppBar
      position="relative"
      elevation={0}
      sx={{
        background: (theme) => theme.palette.common.white,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <BoxHeader>
        <Container maxWidth="xl">
          <BoxSpaceBetween>
            <BoxSpaceBetween sx={{ gap: 3 }}>
              <Logo />
              {!isSmallScreen && <NavBar />}
            </BoxSpaceBetween>
            {isSmallScreen ? (
              <MenuIcon open={open} setOpen={setOpen} />
            ) : (
              <Rightbar />
            )}
          </BoxSpaceBetween>
        </Container>
      </BoxHeader>
      {isSmallScreen && <MobileNavBar open={open} setOpen={setOpen} />}
    </AppBar>
  );
}

export default Header;
