import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { TextAreaComponent } from "./text_area/text_area_component";
import { Callback } from "./manual_typings/generic_types";
import { ImageComponent } from "./image/image_component";
import { PageBase } from "./page_base/page_base";
import { ButtonComponent } from "./button/button_component";
import { Theme } from "./page_base/page_base_theme_provider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrandIconComponent, BrandIcon } from "./webfont_icon/brand_icon";
import { WebfontIcon } from "./webfont_icon/webfont_icon";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { PageDividerComponent } from "./page_base/page_divider";
import { jsx } from "@emotion/core";
import { TabsComponent } from "./tabs/tabs_component";
import { TabComponent } from "./tabs/tab_component";
import { useThemeState } from "./hooks/use_theme_state";
import { useTabState, Tabs } from "./hooks/use_tab_state";
/** @jsx jsx */

const App = () => {
  const [theme] = useThemeState();
  const [selectedTab, setSelectedTab] = useTabState(Tabs.CV);

  return (
    <PageBase theme={theme}>
      <PageDividerComponent backgroundImage={""}>
        <TabsComponent selectedTabLabel={selectedTab}>
          <TabComponent label={Tabs.CV} onSelect={setSelectedTab}>
            Hello CV tab!
          </TabComponent>
          <TabComponent label={Tabs.SOME_OTHER} onSelect={setSelectedTab}>
            Hello Some other tab!
          </TabComponent>
        </TabsComponent>
      </PageDividerComponent>
      <TextAreaComponent value={"something"} />
    </PageBase>
  );
};

export default App;
