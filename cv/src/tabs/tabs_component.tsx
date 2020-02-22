import * as React from "react";
import { TabComponent, TabComponentProps } from "./tab_component";

type TabsChild = React.FunctionComponentElement<TabComponentProps>;

export interface TabsComponentProps {
  children: TabsChild | TabsChild[];
  selectedTabLabel: string;
}

export const TabsComponent: React.FunctionComponent<TabsComponentProps> = (
  props: TabsComponentProps
) => {
  let content: TabsChild;

  if (Array.isArray(props.children)) {
    const index = props.children.findIndex(
      child => child.props.label === props.selectedTabLabel
    );
    if (index === -1) {
      throw new Error(
        `Cannot find tab with given selected tab label ${props.selectedTabLabel}!`
      );
    }
    content = props.children[index];
  } else {
    content = props.children;
  }

  return <div>{content}</div>;
};
