import * as React from "react";
import "./App.css";
import { Tabs, useTabState } from "./hooks/use_tab_state";
import { useThemeState } from "./hooks/use_theme_state";
import { PageBase } from "./page_base/page_base";
import { CardDividerComponent } from "./page_base/card_divider";
import { TabCvContent } from "./page_content/tab_cv_content";
import { TabCvSelector } from "./page_content/tab_cv_selector";
import { TabsComponent } from "./tabs/tabs_component";
import { TabComponent, TabContent } from "./tabs/tab_component";
import { TextAreaComponent } from "./text_area/text_area_component";
import { TabSelector } from "./tabs/tab_selector";
import { CardComponent } from "./card/card_component";
import "./data/i18n";
import { css, jsx } from "@emotion/core";
import { usePageBaseTheme } from "./hooks/use_page_base_theme";
/** @jsx jsx */

const App = () => {
  const [theme] = useThemeState();
  const [selectedTab, setSelectedTab] = useTabState(Tabs.CV);
  const backgroundStyle = useBackgroundStyle();
  return (
    <PageBase theme={theme}>
      <div css={backgroundStyle}>
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
        </TabsComponent>
      </div>
    </PageBase>
  );
};

const useBackgroundStyle = () => {
  const theme = usePageBaseTheme();
  return css`
    label: background;

    height: 100%;
    background-color: ${theme.background};
  `;
};

export default App;
