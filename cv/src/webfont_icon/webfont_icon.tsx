import * as React from "react";

export enum WebfontIcon {
  ACCESSABILITY = "fa-accessible-icon",
  CAMERA = "fa-camera",
  CHEVRON_DOWN = "fa-chevron-down",
  STAR = "fa-star",
  ENVELOPE = "fa-envelope",
}

export interface WebfontIconComponentProps {
  webfontIcon: WebfontIcon;
}

export const WebfontSolidIconComponent: React.FunctionComponent<WebfontIconComponentProps> = (
  props: WebfontIconComponentProps
) => {
  return <i className={`fas ${props.webfontIcon}`} />;
};

export const WebfontRegularIconComponent: React.FunctionComponent<WebfontIconComponentProps> = (
  props: WebfontIconComponentProps
) => {
  return <i className={`far ${props.webfontIcon}`} />;
};
