import { PageBaseThemeProvider, Theme } from "./page_base_theme_provider";
import * as React from "react";

interface PageBaseProps {
  theme: Theme;
}

export const PageBase: React.FunctionComponent<PageBaseProps> = ({
  children,
  theme
}) => {
  return (
    <PageBaseThemeProvider theme={theme}>{children}</PageBaseThemeProvider>
  );
};
