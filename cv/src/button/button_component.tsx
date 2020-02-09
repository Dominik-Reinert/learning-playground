import * as React from "react";
import { Callback } from "../manual_typings/generic_types";
import { usePageBaseTheme } from "../hooks/use_page_base_theme";
import { css, jsx } from "@emotion/core";
/** @jsx jsx */

export interface ButtonComponentProps {
  label: string;
  icon?: string;
  onClick: Callback<void>;
}

export const ButtonComponent: React.FunctionComponent<ButtonComponentProps> = (
  props: ButtonComponentProps
) => {
  const buttonStyle = useButtonComponentStyle();
  return (
    <div css={buttonStyle} onClick={() => props.onClick?.()}>
      {props.icon && <span className="icon">{props.icon}</span>}
      <span className="label">{props.label}</span>
    </div>
  );
};

const useButtonComponentStyle = () => {
  const theme = usePageBaseTheme();
  return css`
    label: button;
    cursor: pointer;

    background-color: ${theme.mainColors.darkest};

    padding: 8px;

    .label {
      color: ${theme.mainColors.ligthest};
    }

    .icon {
      color: ${theme.mainColors.ligthest};
    }
  `;
};
