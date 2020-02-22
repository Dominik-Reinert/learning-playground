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
/** @jsx jsx */

enum Tabs {
  CV = "CV",
  SOME_OTHER = "SOME_OTHER"
}

const App = () => {
  const [currentInput, setCurrentInput] = React.useState<string>(
    "This is the current input!"
  );
  const [theme, setTheme] = React.useState<Theme>(Theme.CORAL);
  const [selectedTabLabel, setSelectedTabLabel] = React.useState<string>(
    Tabs.CV
  );

  const handleInputChange = React.useCallback(
    value => setCurrentInput(value),
    []
  );
  const handleThemeChange = React.useCallback(
    () =>
      theme === Theme.CORAL ? setTheme(Theme.INDIGO) : setTheme(Theme.CORAL),
    [theme]
  );
  const handleTabChange = React.useCallback(
    tabLabel => setSelectedTabLabel(tabLabel),
    []
  );
  return (
    <PageBase theme={theme}>
      <PageDividerComponent backgroundImage={""}>
        <TabsComponent selectedTabLabel={selectedTabLabel}>
          <TabComponent label={Tabs.CV} onSelect={handleTabChange}>
            Hello CV tab!
          </TabComponent>
          <TabComponent label={Tabs.SOME_OTHER} onSelect={handleTabChange}>
            Hello Some other tab!
          </TabComponent>
        </TabsComponent>
      </PageDividerComponent>
      <TextAreaComponent value={"something"} />
    </PageBase>
  );
};

export default App;
