import * as React from "react";
import { css, jsx } from "@emotion/core";
import {
  WebfontSolidIconComponent,
  WebfontIcon,
} from "../webfont_icon/webfont_icon";
import { usePageBaseTheme } from "../hooks/use_page_base_theme";

/** @jsx jsx */

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
    color: ${theme.mainColors.ligther};
    position: absolute;
    font-size: 100px;
    height: 100px;
    width: 100px;
    right: 15%;
    animation: jump 3s infinite;
  `;
};
