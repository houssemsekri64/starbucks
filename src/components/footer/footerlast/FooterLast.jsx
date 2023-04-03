import React, { useContext } from "react";
import { Box, Link, Stack, Typography } from "@mui/material";
import { SiFacebook, SiPinterest, SiSpotify } from "react-icons/si";
import { RxDividerVertical } from "react-icons/rx";
import { ThemeContext } from "../../../themes/ThemeContext";

function FooterLast() {
  const { isSmallScreen } = useContext(ThemeContext);
  return (
    <Box mt={4} mb={4}>
      <Stack direction="row" spacing={1}>
        <Link href="#" sx={{ color: "common.black" }}>
          <SiSpotify size={30} />
        </Link>
        <Link href="#" sx={{ color: "common.black" }}>
          <SiFacebook color="black" size={30} />
        </Link>
        <Link href="#" sx={{ color: "common.black" }}>
          <SiPinterest color="black" size={30} />
        </Link>
      </Stack>
      <Stack
        direction={{ md: "row", sm: "column" }}
        alignItems={{ md: "center" }}
        mt={2}
        spacing={3}
        divider={isSmallScreen ? null : <RxDividerVertical />}
        gap={{ xs: 3, md: 0 }}
      >
        <Link href="#" underline="hover">
          Privacy Notice
        </Link>
        <Link href="#" underline="hover">
          Terms of Use
        </Link>
        <Link href="#" underline="hover">
          Do Not Share My Personal Information
        </Link>
        <Link href="#" underline="hover">
          CA Supply Chain Act
        </Link>
        <Link href="#" underline="hover">
          Cookie Preferences
        </Link>
      </Stack>
      <Box my={2}>
        <Typography fontSize={14} color={"primary.light"}>
          © 2023 Starbucks Coffee Company. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default FooterLast;
