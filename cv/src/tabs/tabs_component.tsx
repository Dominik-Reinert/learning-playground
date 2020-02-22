import * as React from "react";
import { TabComponent, TabComponentProps } from "./tab_component";
import { Tabs } from "../hooks/use_tab_state";
import { Callback } from "../manual_typings/generic_types";

type TabsChild = React.FunctionComponentElement<TabComponentProps>;

export interface TabsComponentProps {
  children: TabsChild | TabsChild[];
  selectedTabLabel: string;

  onSelectTab: Callback<Tabs>;
}

export const TabsComponent: React.FunctionComponent<TabsComponentProps> = (
  props: TabsComponentProps
) => {
  let selectionLabels: [Tabs, Callback<void>][] = [];
  let content: TabsChild;
  const handleTabSelection = React.useCallback(
    (tab: Tabs) => () => props.onSelectTab(tab),
    [props.selectedTabLabel]
  );

  if (Array.isArray(props.children)) {
    props.children.forEach(child => {
      selectionLabels.push([
        child.props.label,
        handleTabSelection(child.props.label)
      ]);
      if (child.props.label === props.selectedTabLabel) {
        content = child;
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
    content = props.children[index];
  } else {
    content = props.children;
  }

  return (
    <>
      <div className="tabs-selection-bar">
        {selectionLabels.map(([label, handleClick]) => (
          <span key={`tabs-selection-${label}`} onClick={() => handleClick()}>
            {label}
          </span>
        ))}
      </div>
      <div className="tabs-content">{content}</div>
    </>
  );
};
