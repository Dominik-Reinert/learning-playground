import * as React from "react";
import { PageBaseThemeProvider, Theme } from "./page_base_theme_provider";

interface PageBaseProps {
  theme: Theme;
}

export const PageBase: React.FunctionComponent<PageBaseProps> = ({
  children,
  theme,
}) => {
  return (
    <PageBaseThemeProvider theme={theme}>{children}</PageBaseThemeProvider>
  );
};
