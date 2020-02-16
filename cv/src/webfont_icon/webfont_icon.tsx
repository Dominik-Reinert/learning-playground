import * as React from "react";

export enum WebfontIcon {
  ACCESSABILITY = "fa-accessible-icon",
  CAMERA = "fa-camera"
}

export interface WebfontIconComponentProps {
  webfontIcon: WebfontIcon;
}

export const WebfontIconComponent: React.FunctionComponent<WebfontIconComponentProps> = (
  props: WebfontIconComponentProps
) => {
  return <i className={`fas ${props.webfontIcon}`} />;
};
