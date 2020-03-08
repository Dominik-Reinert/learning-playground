import * as React from "react";
import { ImageComponent } from "../image/image_component";

export interface CompanyAttributesComponentProps {
  logo: string;
  name: string;
  description?: string;
}

export const CompanyAttributesComponent: React.FunctionComponent<CompanyAttributesComponentProps> = (
  props: CompanyAttributesComponentProps
) => {
  return (
    <div>
      <ImageComponent src={props.logo} />
      <div>{props.name}</div>
      {props.description && <div>{props.description}</div>}
    </div>
  );
};
