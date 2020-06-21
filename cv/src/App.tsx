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
import { ProfilePageComponent } from "./pages/profile_page";
import { CvPageComponent } from "./pages/cv_page";
import { WebfontSolidIconComponent, WebfontIcon } from "./webfont_icon/webfont_icon";
import { SkillsPageComponent } from "./pages/skills_page";
/** @jsx jsx */

const App = () => {
  const [theme] = useThemeState();
  const [selectedTab, setSelectedTab] = useTabState(Tabs.CV);
  const backgroundStyle = useBackgroundStyle();
  const imageCenterRootStyle = useImageCenterRootStyle();
  const imageCenterStyle = useImageCenterStyle();
  const scrollDownCTAStyle = useScrollDownCTAStyle();
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
          <div css={scrollDownCTAStyle}>
            <WebfontSolidIconComponent webfontIcon={WebfontIcon.CHEVRON_DOWN} />
          </div>
        </div>
        <SubPageComponent
          headline={t("profile")}
          quote={t("profileQuote")}
          quoteAuthor={t("profileQuoteAuthor")}
        >
          <ProfilePageComponent />
        </SubPageComponent>

        <SubPageComponent
          headline={t("cvHeadline")}
          quote={t("cvQuote")}
          quoteAuthor={t("cvQuoteAuthor")}
          colorBackground={true}
        >
          <CvPageComponent />
        </SubPageComponent>

        <SubPageComponent
          headline={t("skillsHeadline")}
          quote={t("skillsQuote")}
          quoteAuthor={t("skillsQuoteAuthor")}
        >
          <SkillsPageComponent />
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

const useScrollDownCTAStyle = () => {
  return css`
    label: scroll-down-cta;

    position: absolute;
    height: 100px;
    width: 100px;
    background-color: blue;
    bottom: 50px;
    right: 50px;
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
