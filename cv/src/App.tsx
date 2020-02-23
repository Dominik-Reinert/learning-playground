import React from "react";
import "./App.css";
import { Tabs, useTabState } from "./hooks/use_tab_state";
import { useThemeState } from "./hooks/use_theme_state";
import { PageBase } from "./page_base/page_base";
import { PageDividerComponent } from "./page_base/page_divider";
import { TabCvContent } from "./page_content/tab_cv_content";
import { TabCvSelector } from "./page_content/tab_cv_selector";
import { TabsComponent } from "./tabs/tabs_component";
import { TabComponent, TabContent } from "./tabs/tab_component";
import { TextAreaComponent } from "./text_area/text_area_component";
import { TabSelector } from "./tabs/tab_selector";

const App = () => {
  const [theme] = useThemeState();
  const [selectedTab, setSelectedTab] = useTabState(Tabs.CV);

  return (
    <PageBase theme={theme}>
      <PageDividerComponent backgroundImage="tab-cv-bg.jpg">
        <TabsComponent
          selectedTabLabel={selectedTab}
          onSelectTab={setSelectedTab}
        >
          <TabComponent label={Tabs.CV}>
            <TabSelector active={selectedTab === Tabs.CV}>
              <TabCvSelector />
            </TabSelector>
            <TabContent>
              <TabCvContent />
            </TabContent>
          </TabComponent>
          <TabComponent label={Tabs.SOME_OTHER}>
            <TabSelector active={selectedTab === Tabs.SOME_OTHER}>
              <span>hello selector for some other!</span>
            </TabSelector>
            <TabContent>
              <div>some other content</div>
            </TabContent>
          </TabComponent>
        </TabsComponent>
      </PageDividerComponent>
      <TextAreaComponent value={"something"} />
    </PageBase>
  );
};

export default App;
