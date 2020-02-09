import { ThemeProvider } from "emotion-theming";
import * as React from "react";
import { PageBaseTheme, coralTheme, indigoTheme } from "./page_base_theme";

export enum Theme {
  CORAL = "CORAL",
  INDIGO = "INDIGO"
}

interface PageBaseThemeProviderProps {
  theme: Theme;
}

export const PageBaseThemeProvider: React.FunctionComponent<
  PageBaseThemeProviderProps
> = ({ children, theme }) => {
  const themeToUse: PageBaseTheme =
    theme === Theme.CORAL ? coralTheme : indigoTheme;
  return <ThemeProvider theme={themeToUse}>{children}</ThemeProvider>;
};
