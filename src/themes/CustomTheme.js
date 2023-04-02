import { createTheme } from "@mui/material";
export const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "SoDo Sans",
    },
  },
  palette: {
    primary: {
      main: "rgba(0,0,0,.87)",
    },
    secondary: {
      main: "#00754A",
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        sx: {
          color: (theme) => theme.palette.primary.main,
          "&:hover": {
            color: (theme) => theme.palette.secondary.main,
          },
        },
        underline: "none",
      },
    },
  },
});
