import React from "react";
import { Typography, Stack } from "@mui/material";
import { MdLocationPin } from "react-icons/md";
import {
  BoxSpaceBetween,
  StyledButton,
  LinkHeader,
} from "../../../themes/CustomStyle";

function Rightbar() {
  return (
    <Stack
      gap={{ md: 4, xs: 2 }}
      direction={{
        md: "row",
        xs: "column-reverse",
      }}
      alignItems={{md:"center"}}
      mt={{ md: 0, xs: 6 }}
    >
      <LinkHeader href="#">
        <BoxSpaceBetween
          sx={{ justifyContent: { xs: "flex-start", md: "space-between" } }}
          gap={1}
        >
          <MdLocationPin size={24} />
          <Typography variant="headerLink">Find a store</Typography>
        </BoxSpaceBetween>
      </LinkHeader>
      <BoxSpaceBetween
        sx={{
          gap: 2,
          justifyContent: { xs: "flex-start", md: "space-between" },
        }}
      >
        <StyledButton size="medium" disableRipple={true} variant="outlined">
          Sign in
        </StyledButton>
        <StyledButton variant="contained" size="medium" disableRipple={true}>
          Join now
        </StyledButton>
      </BoxSpaceBetween>
    </Stack>
  );
}

export default Rightbar;
