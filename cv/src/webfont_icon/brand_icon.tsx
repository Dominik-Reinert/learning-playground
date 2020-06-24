import * as React from "react";

export enum BrandIcon {
  LINKED_IN_HOLLOW = "fa-linkedin-in",
  LINKED_IN = "fa-linkedin",
  REACT = "fa-react",
}

export interface BrandIconComponentProps {
  brandIcon: BrandIcon;
}

export const BrandIconComponent: React.FunctionComponent<BrandIconComponentProps> = (
  props: BrandIconComponentProps
) => {
  return <i className={`fab ${props.brandIcon}`} />;
};
