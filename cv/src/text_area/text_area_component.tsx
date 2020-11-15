import { css } from "@emotion/core";
import * as React from "react";
import { usePageBaseTheme } from "../hooks/use_page_base_theme";
import { Callback } from "../manual_typings/generic_types";

interface TextAreaComponentProps {
  value: string;
  hint?: string;
  onChange?: Callback<string>;
}

export const TextAreaComponent = (props: TextAreaComponentProps) => {
  const handleInputChange = React.useCallback(
    (event) => props.onChange?.((event.target as HTMLSpanElement).innerText),
    [props]
  );
  const textAreaCss = useTextAreaCss();
  return (
    <div css={textAreaCss}>
      <textarea
        className="value"
        onChange={handleInputChange}
        value={props.value}
        placeholder={props.hint}
      />
    </div>
  );
};

const useTextAreaCss = () => {
  const theme = usePageBaseTheme();

  return css`
    label: text-area;

    position: relative;
    width: 100%;
    height: 100%;

    min-height: 4em;
    padding: 3px;

    border: 1px solid green;
    border-radius: 4px;

    background-color: ${theme.grayscale.light};

    .value {
      position: absolute;
      top: 0;
      left: 0;

      margin: 6px;

      color: ${theme.grayscale.dark};
      background-color: transparent;

      border: none;
      overflow: auto;
      outline: none;

      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;

      resize: none;
      width: calc(100% - 12px);
      height: calc(100% - 12px);
    }
  `;
};
