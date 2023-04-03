import React from "react";
import { Stack } from "@mui/material";

import { footerItems } from "./footeritems";

import FooterList from "./footerList/FooterList";

function FooterMain() {
  return (
    <Stack direction={{ md: "row", xs: "column" }} pt={2}>
      {footerItems.map(({ title, id, items }) => {
        return <FooterList title={title} id={id} items={items} key={id} />;
      })}
    </Stack>
  );
}

export default FooterMain;
