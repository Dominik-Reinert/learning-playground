import * as React from "react";
import { Callback } from "../manual_typings/generic_types";

interface ImageComponentProps {
  src: string;
  fallback?: string;

  className: string;

  onClick?: Callback<void>;
}

export const ImageComponent = (props: ImageComponentProps) => {
  const handleClick = React.useCallback(e => props?.onClick?.(), [props]);
  return (
    <div onClick={handleClick} className={props.className}>
      <img src={props.src} alt={props.fallback}></img>
    </div>
  );
};
