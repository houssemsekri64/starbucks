import { Container } from "@mui/material";
import React from "react";
import FooterLast from "./footerlast/FooterLast";
import FooterMain from "./footermain/FooterMain";

function Footer() {
  return (
    <Container
      maxWidth="xl"
      component={"footer"}
      sx={{ borderTop: "solid 1px #ddd", mt: 3 }}
    >
      <FooterMain />
      <FooterLast />
    </Container>
  );
}

export default Footer;
