import * as React from "react";
import { Callback } from "../manual_typings/generic_types";
import { ButtonComponent } from "../button/button_component";
import { Tabs } from "../hooks/use_tab_state";

export interface TabComponentProps {
  label: Tabs;
  onSelect: Callback<Tabs>;
}

export const TabComponent: React.FunctionComponent<TabComponentProps> = props => {
  const selectCallback = React.useCallback(() => props.onSelect(props.label), [
    props.onSelect
  ]);
  return (
    <div>
      <ButtonComponent label="select me!" onClick={selectCallback} />
      <div>{props.label}</div>
      {props.children}
    </div>
  );
};
