import {
  styled,
  Link,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
export const BoxHeader = styled(Box)(({ theme }) => ({
  ...alignCenter,
  minHeight: 100,
  py: 3,
  borderBottom: "1px solid #dddd",
  [theme.breakpoints.down("md")]: {
    minHeight: 70,
  },
}));
export const LinkHeader = styled(Link)(({ theme }) => ({
  "&:hover": {
    color: theme.palette.secondary.light,
  },
}));
export const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 20,
  textTransform: "initial",
  fontSize: "14px",
  fontWeight: "bold",
  py: 0.5,
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none",
  },
}));

export const BoxSpaceBetween = styled(Box)(({ theme }) => ({
  ...spaceBetween,
}));

const spaceBetween = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};
const alignCenter = {
  display: "flex",
  alignItems: "center",
};

export const displayDesktop = {
  display: { md: "flex", xs: "none" },
};
export const displayOnSmallScreen = {
  display: { md: "none", xs: "flex" },
};

export const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: 30,
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    height: "650px",
  },
  boxShadow: "none",
}));

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  width: "90%",
  height: "100%",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  [theme.breakpoints.up("md")]: {
    width: "50%",
    padding: "0 100px",
  },
}));

export const MainImage = styled(CardMedia)(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.up("md")]: {
    height: "auto",
    width: "50%",
  },
}));
