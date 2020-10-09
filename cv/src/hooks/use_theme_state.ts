import * as React from "react";
import { Callback, Provider } from "../manual_typings/generic_types";
import { Theme } from "../page_base/page_base_theme_provider";

type ThemeState = [Theme, Callback<void>];

export const useThemeState: Provider<ThemeState> = () => {
  const [theme, setTheme] = React.useState<Theme>(Theme.CORAL);
  const handleThemeChange = React.useCallback(
    () =>
      theme === Theme.CORAL ? setTheme(Theme.INDIGO) : setTheme(Theme.CORAL),
    [theme]
  );

  return [theme, handleThemeChange];
};
