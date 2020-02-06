import { PageBaseThemeProvider, Theme } from "./page_base_theme_provider";
import * as React from "react";

export const PageBase: React.FunctionComponent<any> = ({ children }) => {
  return (
    <PageBaseThemeProvider theme={Theme.BLUE}>{children}</PageBaseThemeProvider>
  );
};
