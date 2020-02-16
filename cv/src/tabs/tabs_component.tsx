import * as React from "react";
import { TabComponent, TabComponentProps } from "./tab_component";

export interface TabsComponentProps {
  children:
    | React.FunctionComponentElement<TabComponentProps>
    | React.FunctionComponentElement<TabComponentProps>[];
}

export const TabsComponent: React.FunctionComponent<TabsComponentProps> = props => {
  return <div></div>;
};
