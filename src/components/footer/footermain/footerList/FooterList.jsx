import React, { useContext } from "react";
import { List, Typography, Collapse, Box } from "@mui/material";
import { BoxSpaceBetween } from "../../../../themes/CustomStyle";
import FooterListItem from "../listitem/FooterListItem";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { ThemeContext } from "../../../../themes/ThemeContext";
function FooterList({ title, id, items }) {
  const [open, setOpen] = React.useState(false);
  const { isSmallScreen } = useContext(ThemeContext);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List
      key={id}
      sx={{
        width: {
          md: "230px",
        },
      }}
    >
      <BoxSpaceBetween>
        <Typography fontSize={"19px"} marginBottom={3}>
          {title}
        </Typography>
        {isSmallScreen && (
          <Box onClick={handleClick}>
            {open ? <ExpandLess /> : <ExpandMore />}
          </Box>
        )}
      </BoxSpaceBetween>
      {items.map((item) => {
        return isSmallScreen ? (
          <Collapse in={open} timeout="auto" unmountOnExit key={item.id}>
            <FooterListItem {...item} />
          </Collapse>
        ) : (
          <FooterListItem {...item} key={item.id} />
        );
      })}
    </List>
  );
}

export default FooterList;
