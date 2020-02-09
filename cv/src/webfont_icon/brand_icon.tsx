import * as React from "react";

export enum BrandIcon {
  LINKED_IN_HOLLOW = "linkedin-in",
  LINKED_IN = "linkedin"
}

export interface BrandIconComponentProps {
  brandIcon: BrandIcon;
}

export const BrandIconComponent: React.FunctionComponent<BrandIconComponentProps> = (
  props: BrandIconComponentProps
) => {
  return <i className={`fab ${props.brandIcon}`} />;
};
