import { Callback, Delegate } from "../manual_typings/generic_types";
import * as React from "react";

export enum Tabs {
  CV = "CV",
  SOME_OTHER = "SOME_OTHER"
}

type TabState = [Tabs, Callback<Tabs>];

export const useTabState: Delegate<Tabs, TabState> = (initialTab: Tabs) => {
  const [selectedTabLabel, setSelectedTabLabel] = React.useState<Tabs>(
    initialTab
  );

  const handleTabChange = React.useCallback(
    tabLabel => setSelectedTabLabel(tabLabel),
    []
  );

  return [selectedTabLabel, handleTabChange];
};
