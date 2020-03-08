import * as React from "react";
import { CompanyPositionProps } from "../company_position/company_position_component";

export interface CompanyCareerProps {
  children: React.FunctionComponentElement<CompanyPositionProps>;
}

export const CompanyCareerComponent: React.FunctionComponent<CompanyCareerProps> = (
  props: CompanyCareerProps
) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>vertical slider with one marker per position child</div>
      {React.Children.forEach(props.children, child => {
        <div>{child}</div>;
      })}
    </div>
  );
};
