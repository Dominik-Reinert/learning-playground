import { css } from "@emotion/core";
import { usePageBaseTheme } from "../hooks/use_page_base_theme";

export const useHeaderStyle = () => {
  const theme = usePageBaseTheme();
  return css`
    label: header;
    color: ${theme.mainColors.ligther};
    font-size: x-large;

    margin: 16px 8px;
  `;
};
