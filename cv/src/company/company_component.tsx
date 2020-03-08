import * as React from "react";
import { CompanyAttributesComponentProps } from "../company_attributes/company_attributes_component";
import { CompanyCareerProps } from "../company_career/company_career_component";

export interface CompanyComponentProps {
  children: [
    React.FunctionComponentElement<CompanyAttributesComponentProps>,
    React.FunctionComponentElement<CompanyCareerProps>
  ];
}

const ATTRIBUTES_INDEX = 0;
const CAREER_INDEX = 1;

export const CompanyComponent: React.FunctionComponent<CompanyComponentProps> = (
  props: CompanyComponentProps
) => {
  return (
    <div>
      {props.children[ATTRIBUTES_INDEX]}
      {props.children[CAREER_INDEX]}
    </div>
  );
};
