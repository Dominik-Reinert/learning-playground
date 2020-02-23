import * as React from "react";
import { Tabs } from "../hooks/use_tab_state";
import { TabSelectorProps } from "./tab_selector";

export interface TabComponentProps {
  //The label is used in the enclosing TabsComponent to handlle tab selection
  label: Tabs;
  children: [
    React.FunctionComponentElement<TabSelectorProps>,
    React.FunctionComponentElement<TabContentProps>
  ];
}

export const TabComponent: React.FunctionComponent<TabComponentProps> = (
  props: React.PropsWithChildren<Omit<TabComponentProps, "label">>
) => {
  return <div>{props.children}</div>;
};

export interface TabContentProps {
  children: React.ReactNode;
}

export const TabContent: React.FunctionComponent<TabContentProps> = (
  props: React.PropsWithChildren<TabContentProps>
) => {
  return <>{props.children}</>;
};
