import * as React from "react";
import { Callback } from "../manual_typings/generic_types";
import { SerializedStyles, css } from "@emotion/core";
import { jsx } from "@emotion/core";
/** @jsx jsx */

interface ImageComponentProps {
  src: string;
  fallback?: string;

  cssStyle?: SerializedStyles;
  className?: string;

  onClick?: Callback<void>;
}

export const ImageComponent = (props: ImageComponentProps) => {
  const handleClick = React.useCallback(e => props?.onClick?.(), [props]);
  return (
    <div onClick={handleClick} css={props.cssStyle} className={props.className}>
      <img
        src={props.src}
        alt={props.fallback}
        css={css`
          width: 100%;
          height: 100%;
        `}
      ></img>
    </div>
  );
};
