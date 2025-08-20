"use client";

import * as React from "react";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import { extendTheme } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import CssBaseline from "@mui/material/CssBaseline";

const theme = extendTheme({
  colorSchemes: {
    light: true,
    dark: true,
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <CssVarsProvider theme={theme}>
        <CssBaseline />
        {children}
      </CssVarsProvider>
    </AppRouterCacheProvider>
  );
}
