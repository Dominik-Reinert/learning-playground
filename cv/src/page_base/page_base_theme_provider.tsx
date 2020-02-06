import { ThemeProvider } from "emotion-theming";
import * as React from "react";

export enum Theme {
  RED = "RED",
  BLUE = "BLUE"
}

interface PageBaseThemeProviderProps {
  theme: Theme;
}

export const PageBaseThemeProvider: React.FunctionComponent<
  PageBaseThemeProviderProps
> = ({ children, theme }) => {
  const themeToUse =
    theme === Theme.BLUE ? { mainColor: "blue" } : { mainColor: "red" };
  return <ThemeProvider theme={themeToUse}>{children}</ThemeProvider>;
};
