import { css } from "@emotion/core";
import * as React from "react";
import { Tabs } from "../hooks/use_tab_state";
import { Callback } from "../manual_typings/generic_types";
import { TabComponentProps, TabContentProps } from "./tab_component";

type TabsChild = React.FunctionComponentElement<TabComponentProps>;
type TabsContent = React.FunctionComponentElement<TabContentProps>;

export interface TabsComponentProps {
  children: TabsChild | TabsChild[];
  selectedTabLabel: string;

  onSelectTab: Callback<Tabs>;
}

const selectorIdx = 0;
const contentIdx = 1;

export const TabsComponent: React.FunctionComponent<TabsComponentProps> = (
  props: TabsComponentProps
) => {
  // An array containing of the label of the tab, its content (not selector!) and the callback mark it as selected
  let selectionLabels: [Tabs, React.ReactNode, Callback<void>][] = [];
  let content: TabsContent;
  let selectedItemIdx: number = -1;
  const handleTabSelection = React.useCallback(
    (tab: Tabs) => () => props.onSelectTab(tab),
    [props.selectedTabLabel]
  );

  if (Array.isArray(props.children)) {
    props.children.forEach((child, idx) => {
      selectionLabels.push([
        child.props.label,
        child.props.children[selectorIdx],
        handleTabSelection(child.props.label),
      ]);
      if (child.props.label === props.selectedTabLabel) {
        selectedItemIdx = idx;
      }
    });
    if (selectedItemIdx === -1) {
      throw new Error(
        `Cannot find tab with given selected tab label ${props.selectedTabLabel}!`
      );
    }
    content = props.children[selectedItemIdx].props.children[contentIdx];
  } else {
    const element = props.children;
    selectionLabels.push([
      element.props.label,
      element.props.children[selectorIdx],
      handleTabSelection(element.props.label),
    ]);
    content = props.children.props.children[contentIdx];
  }
  const tabSelectionBarStyle = useTabsSelectionBarStyle();
  const tabContentStyle = useTabsContentStyle();
  return (
    <>
      <div css={tabSelectionBarStyle}>
        {selectionLabels.map(([label, selectorNode, handleClick]) => (
          <span key={`tabs-selection-${label}`} onClick={() => handleClick()}>
            {selectorNode}
          </span>
        ))}
      </div>
      <div css={tabContentStyle}>{content}</div>
    </>
  );
};

const useTabsSelectionBarStyle = () => css`
  label: tabs-selection-bar;
  display: flex;
`;

const useTabsContentStyle = () => css`
  label: tabs-content;
  height: 100%;
`;
