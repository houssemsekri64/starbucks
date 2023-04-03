import React from "react";
import { CssBaseline } from "@mui/material";
import Header from "./components/header/Header";
import { ThemeProvider } from "@mui/material";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import { theme } from "./themes/CustomTheme";
import ThemeContextProvider from "./themes/ThemeContext";
console.log(theme.palette);
function App() {
  return (
    <ThemeContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Main />
        <Footer />
      </ThemeProvider>
    </ThemeContextProvider>
  );
}

export default App;
