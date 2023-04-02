import React from "react";
import { CssBaseline } from "@mui/material";
import Header from "./components/header/Header";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import Main from "./components/main/Main";
export const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "SoDo Sans",
    },
    headerLink: {
      fontSize: "14px",
      fontWeight: "bold",
    },
  },
  palette: {
    primary: {
      main: "rgba(0,0,0,.87)",
    },
    secondary: {
      light: "#00754A",
      main: "#1E3932",
    },
    neutral: {
      main: "#fff",
    },
    yellow: {
      main: "#ffc519",
    },
    pink: {
      light: "ff4da",
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
    },
    MuiButton: {
      defaultProps: {},
    },
  },
});

function App() {
  console.log(theme.palette);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Main />
    </ThemeProvider>
  );
}

export default App;
