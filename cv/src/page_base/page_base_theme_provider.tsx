import { ThemeProvider } from "emotion-theming";
import * as React from "react";
import { blueTheme } from "./page_base_theme";

interface PageBaseThemeProviderProps {}

export const PageBaseThemeProvider: React.FunctionComponent<PageBaseThemeProviderProps> = ({
  children,
}) => {
  return <ThemeProvider theme={blueTheme}>{children}</ThemeProvider>;
};
