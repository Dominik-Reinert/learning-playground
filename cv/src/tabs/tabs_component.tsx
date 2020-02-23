import * as React from "react";
import {
  TabComponent,
  TabComponentProps,
  TabContentProps
} from "./tab_component";
import { Tabs } from "../hooks/use_tab_state";
import { Callback } from "../manual_typings/generic_types";

type TabsChild = React.FunctionComponentElement<TabComponentProps>;
type TabsContent = React.FunctionComponentElement<TabContentProps>;

export interface TabsComponentProps {
  children: TabsChild | TabsChild[];
  selectedTabLabel: string;

  onSelectTab: Callback<Tabs>;
}

export const TabsComponent: React.FunctionComponent<TabsComponentProps> = (
  props: TabsComponentProps
) => {
  let selectionLabels: [Tabs, React.ReactNode, Callback<void>][] = [];
  let content: TabsContent;
  const handleTabSelection = React.useCallback(
    (tab: Tabs) => () => props.onSelectTab(tab),
    [props.selectedTabLabel]
  );

  if (Array.isArray(props.children)) {
    props.children.forEach(child => {
      selectionLabels.push([
        child.props.label,
        child.props.children[0],
        handleTabSelection(child.props.label)
      ]);
      if (child.props.label === props.selectedTabLabel) {
        content = child.props.children[1];
      }
    });
    const index = props.children.findIndex(
      child => child.props.label === props.selectedTabLabel
    );
    if (index === -1) {
      throw new Error(
        `Cannot find tab with given selected tab label ${props.selectedTabLabel}!`
      );
    }
    content = props.children[index].props.children[1];
  } else {
    content = props.children.props.children[1];
  }

  return (
    <>
      <div className="tabs-selection-bar">
        {selectionLabels.map(([label, selectorNode, handleClick]) => (
          <span key={`tabs-selection-${label}`} onClick={() => handleClick()}>
            {selectorNode}
          </span>
        ))}
      </div>
      <div className="tabs-content">{content}</div>
    </>
  );
};
