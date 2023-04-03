import { useMediaQuery } from "@mui/material";
import React, { createContext } from "react";
import { theme } from "./CustomTheme";
export const ThemeContext = createContext(theme);
function ThemeContextProvider({ children }) {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <ThemeContext.Provider value={{ theme, isSmallScreen }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
