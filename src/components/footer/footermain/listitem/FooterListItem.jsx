import React from "react";
import { Link, ListItem, Typography } from "@mui/material";

function FooterListItem({ id, url, text }) {
  return (
    <ListItem key={id} sx={{ paddingLeft: "0" }}>
      <Link
        href={url}
        color="primary.light"
        sx={{
          "&:hover": {
            color: "primary.main",
          },
        }}
        marginBottom={1}
      >
        <Typography fontSize={"16px"}> {text}</Typography>
      </Link>
    </ListItem>
  );
}

export default FooterListItem;
