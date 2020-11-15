import { css } from "@emotion/core";
import { usePageBaseTheme } from "../hooks/use_page_base_theme";

export const useHeaderStyle = () => {
  const theme = usePageBaseTheme();
  return css`
    label: header;
    color: ${theme.grayscale.dark};
    font-size: ${theme.fonts.subHeadline.size};
    font-weight: ${theme.fonts.subHeadline.weight};

    margin: 16px 8px;
  `;
};
