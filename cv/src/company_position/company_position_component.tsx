import * as React from "react";

export interface CompanyPositionProps {
  title: string;
  from: string;
  to: string;
  description: string;
}

export const CompanyPositionComponent: React.FunctionComponent<CompanyPositionProps> = (
  props: CompanyPositionProps
) => {
  return (
    <div>
      <div>{props.title}</div>
      <div>
        <span>
          {props.from}-{props.to} (Duration (TBD))
        </span>
      </div>
      <div>{props.description}</div>
    </div>
  );
};
