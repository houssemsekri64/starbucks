import React from "react";
import { Typography } from "@mui/material";
import { MdLocationPin } from "react-icons/md";
import {
  BoxSpaceBetween,
  StyledButton,
  displayDesktop,
  LinkHeader,
} from "../../../themes/CustomStyle";

function Rightbar() {
  return (
    <BoxSpaceBetween gap={4} sx={displayDesktop}>
      <LinkHeader href="#">
        <BoxSpaceBetween gap={1}>
          <MdLocationPin size={24} />
          <Typography variant="headerLink">Find a store</Typography>
        </BoxSpaceBetween>
      </LinkHeader>
      <BoxSpaceBetween sx={{ gap: 2 }}>
        <StyledButton size="medium" disableRipple={true} variant="outlined">
          Sign in
        </StyledButton>
        <StyledButton variant="contained" size="medium" disableRipple={true}>
          Join now
        </StyledButton>
      </BoxSpaceBetween>
    </BoxSpaceBetween>
  );
}

export default Rightbar;
