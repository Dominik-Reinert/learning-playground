import { css } from "@emotion/core";
import * as React from "react";
import { usePageBaseTheme } from "../hooks/use_page_base_theme";
import {
  WebfontIcon,
  WebfontSolidIconComponent,
} from "../webfont_icon/webfont_icon";

export const ArrowCta = () => {
  const scrollDownCTAStyle = useScrollDownCTAStyle();

  return (
    <div
      css={scrollDownCTAStyle}
      onClick={() =>
        window.scrollTo({
          top: window.innerHeight,
          left: 0,
          behavior: "smooth",
        })
      }
    >
      <WebfontSolidIconComponent webfontIcon={WebfontIcon.CHEVRON_DOWN} />
    </div>
  );
};

const useScrollDownCTAStyle = () => {
  const theme = usePageBaseTheme();
  return css`
    label: scroll-down-cta;
    @keyframes jump {
      0% {
        bottom: 30px;
      }
      50% {
        bottom: 50px;
      }
      100% {
        bottom: 30px;
      }
    }

    cursor: pointer;
    color: ${theme.colors.normal};
    position: absolute;
    font-size: 100px;
    height: 100px;
    width: 100px;
    right: calc(15% - 28px);
    animation: jump 3s infinite;
  `;
};
