import { css } from "@emotion/core";
import * as React from "react";
import { Link } from "react-router-dom";
import { usePageBaseTheme } from "../hooks/use_page_base_theme";
import { RouteURL } from "../router/router";
import {
  WebfontIcon,
  WebfontSolidIconComponent,
} from "../webfont_icon/webfont_icon";

interface BackButtonProps {
  backLink: RouteURL;
}

export const BackButtonComponent = (props: BackButtonProps) => {
  const backButtonStyle = useBackButtonStyle();
  return (
    <Link to={`${props.backLink}`} css={backButtonStyle}>
      <WebfontSolidIconComponent
        webfontIcon={WebfontIcon.LONG_ARROW_ALT_LEFT}
      />
      <span className="back-text">Back</span>
    </Link>
  );
};

const useBackButtonStyle = () => {
  const theme = usePageBaseTheme();
  return css`
    label: back-button;

    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;

    font-size: larger;

    text-decoration: none;

    color: ${theme.colors.normal};

    > * {
      margin: 4px;
    }

    &:link {
      text-decoration: none;
    }

    &:visited {
      text-decoration: none;
    }
  `;
};
