import * as React from "react";
import { Tabs } from "../hooks/use_tab_state";
import { ImageComponent } from "../image/image_component";
import { TabComponent, TabContent, TabSelector } from "../tabs/tab_component";

export const TabCvContent: React.FunctionComponent<{}> = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        style={{
          flex: "12 0 0",
          backgroundColor: "red",
          borderRight: "2px solid black",
          height: "100%"
        }}
      >
        Sidebar
      </div>
      <div style={{ flex: "24 0 0", backgroundColor: "blue", height: "100%" }}>
        main content
      </div>
    </div>
  );
};
