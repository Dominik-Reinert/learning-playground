import * as React from "react";
import { Callback } from "../manual_typings/generic_types";
import { ButtonComponent } from "../button/button_component";
import { Tabs } from "../hooks/use_tab_state";

export interface TabComponentProps {
  //The label is used in the enclosing TabsComponent to handlle tab selection
  label: Tabs;
}

export const TabComponent: React.FunctionComponent<TabComponentProps> = (
  props: React.PropsWithChildren<Omit<TabComponentProps, "label">>
) => {
  return <div>{props.children}</div>;
};
