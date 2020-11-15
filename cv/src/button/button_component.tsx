import { css } from "@emotion/core";
import * as React from "react";
import { usePageBaseTheme } from "../hooks/use_page_base_theme";
import { Callback } from "../manual_typings/generic_types";
import {
  BrandIconComponent,
  BrandIconComponentProps,
} from "../webfont_icon/brand_icon";
import {
  WebfontIconComponentProps,
  WebfontSolidIconComponent,
} from "../webfont_icon/webfont_icon";

export interface ButtonComponentProps {
  label: string;
  isSecondaryButton?: boolean;
  icon?: WebfontIconComponentProps | BrandIconComponentProps;
  onClick: Callback<void>;
}

function isWebfontIcon(
  props: WebfontIconComponentProps | BrandIconComponentProps
): props is WebfontIconComponentProps {
  return (props as WebfontIconComponentProps).webfontIcon !== undefined;
}

export const ButtonComponent: React.FunctionComponent<ButtonComponentProps> = (
  props: ButtonComponentProps
) => {
  const buttonStyle = useButtonComponentStyle();
  const secondaryStyle = useSecondaryButtonComponentStyle();

  const renderIcon = () => {
    if (props.icon) {
      return isWebfontIcon(props.icon) ? (
        <WebfontSolidIconComponent {...props.icon} />
      ) : (
        <BrandIconComponent {...props.icon} />
      );
    }
    return null;
  };

  return (
    <div
      css={props.isSecondaryButton ? secondaryStyle : buttonStyle}
      onClick={() => props.onClick?.()}
    >
      {renderIcon()}
      <span className="label">{props.label}</span>
    </div>
  );
};

const useButtonComponentStyle = () => {
  const theme = usePageBaseTheme();
  return css`
    label: button;
    cursor: pointer;

    color: ${theme.grayscale.labelOnColor};
    background-color: ${theme.colors.normal};
    text-align: center;
    text-transform: uppercase;

    padding: 8px;
  `;
};

const useSecondaryButtonComponentStyle = () => {
  const theme = usePageBaseTheme();
  return css`
    label: button;
    cursor: pointer;

    color: ${theme.colors.normal};
    background-color: ${theme.grayscale.background};
  `;
};
