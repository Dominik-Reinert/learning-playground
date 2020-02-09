import * as React from "react";

export enum WebfontIcon {
  ACCESSABILITY = "accessible-icon"
}

export interface WebfontIconComponentProps {
  webfontIcon: WebfontIcon;
}

export const WebfontIconComponent: React.FunctionComponent<WebfontIconComponentProps> = (props: WebfontIconComponentProps) => {
  return <i className={`fas ${props.webfontIcon}`} />;
};
