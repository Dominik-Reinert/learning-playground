import { css, jsx } from "@emotion/core";
import * as React from "react";
import { Trans, useTranslation } from "react-i18next";
import "./App.css";
import { BackgroundImageComponent } from "./background/background_image_component";
import { CardComponent } from "./card/card_component";
import "./data/i18n";
import { usePageBaseTheme } from "./hooks/use_page_base_theme";
import { Tabs, useTabState } from "./hooks/use_tab_state";
import { useThemeState } from "./hooks/use_theme_state";
import { PageBase } from "./page_base/page_base";
import { TabCvContent } from "./page_content/tab_cv_content";
import { TabCvSelector } from "./page_content/tab_cv_selector";
import { TabsComponent } from "./tabs/tabs_component";
import { TabComponent, TabContent } from "./tabs/tab_component";
import { TabSelector } from "./tabs/tab_selector";
import { interactiveResumeDe } from "./data/interactive_resume";
import { SubPageComponent } from "./subpage/subpage_component";
/** @jsx jsx */

const App = () => {
  const [theme] = useThemeState();
  const [selectedTab, setSelectedTab] = useTabState(Tabs.CV);
  const backgroundStyle = useBackgroundStyle();
  const imageCenterRootStyle = useImageCenterRootStyle();
  const imageCenterStyle = useImageCenterStyle();
  const nameStyle = useNameStyle();
  const subpageheaderStyle = useSubpageHeaderStyle();
  
  const { t, i18n } = useTranslation();
  return (
    <PageBase theme={theme}>
      <div css={backgroundStyle}>
        <div css={imageCenterRootStyle}>
          <BackgroundImageComponent backgroundImage="bg-img.jpg" />
          <div css={imageCenterStyle}>
            <h1 css={nameStyle}>Dominik Reinert</h1>
            <p css={subpageheaderStyle}>{t("interactiveResume")}</p>
          </div>
        </div>
        <SubPageComponent
          headline={t("profile")}
          quote={t("profileQuote")}
          quoteAuthor={t("profileQuoteAuthor")}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ flex: "1 0 0" }}>
              <div>About me:</div>
              <div>
                I am an allround web developer. I am a senior programmer with
                good knowledge of front-end techniques. I love structure and
                order and I also stand for quality. I love spending time on
                fixing little details and optimizing web apps. Also I like
                working in a team, you'll learn faster and much more. As the
                saying goes: 'two heads are better than one'.
              </div>
            </div>
            <div style={{ flex: "1 0 0" }}>
              Here will be an awesome profile pic!
            </div>
            <div style={{ flex: "1 0 0" }}>
              <div>Details</div>
              <div>
                <b>Name:</b>
                <span>Dominik Reinert</span>
              </div>
              <div>
                <b>Age:</b>
                <span>33 years</span>
              </div>
              <div>
                <b>Location</b>
                <span>'s-Hertogenbosch, The Netherlands, Earth</span>
              </div>
            </div>
          </div>
        </SubPageComponent>

        {false && (
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
        )}
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

const useImageCenterRootStyle = () => {
  return css`
    label: image-center-root-style;

    position: relative;
  `;
};

const useImageCenterStyle = () => {
  return css`
    label: image-center-style;

    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    position: absolute;
  `;
};

const useNameStyle = () => {
  const theme = usePageBaseTheme();
  return css`
    label: name-style;

    margin: 8px;
    padding-bottom: 8px;

    text-align: center;
    font-size: xxx-large;

    color: ${theme.mainColors?.ligther ?? "white"};

    border-bottom: 1px solid ${theme.mainColors?.ligther ?? "white"};
  `;
};

const useSubpageHeaderStyle = () => {
  const theme = usePageBaseTheme();
  return css`
    label: subpage-header-style;

    margin: 8px;

    text-align: center;
    font-size: x-large;

    color: ${theme.mainColors?.ligther ?? "white"};
  `;
};

export default App;
