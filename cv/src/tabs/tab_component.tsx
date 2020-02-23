import * as React from "react";
import { Callback } from "../manual_typings/generic_types";
import { ButtonComponent } from "../button/button_component";
import { Tabs } from "../hooks/use_tab_state";

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

export interface TabSelectorProps {
  children: React.ReactNode;
}

export const TabSelector: React.FunctionComponent<TabSelectorProps> = (
  props: React.PropsWithChildren<TabSelectorProps>
) => {
  return <>{props.children}</>;
};

export interface TabContentProps {
  children: React.ReactNode;
}

export const TabContent: React.FunctionComponent<TabContentProps> = (
  props: React.PropsWithChildren<TabContentProps>
) => {
  return <>{props.children}</>;
};
