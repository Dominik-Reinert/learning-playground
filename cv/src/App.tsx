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
import {
  WebfontSolidIconComponent,
  WebfontIcon,
} from "./webfont_icon/webfont_icon";
import { SkillsPageComponent } from "./pages/skills_page";
import { PageFooter } from "./page_footer/page_footer";
import { Modal } from "./modal/modal";
import { Callback } from "./manual_typings/generic_types";
import { ArrowCta } from "./arrow_cta/arrow_cta";
import { Anchor, AnchorItem } from "./anchor/anchor";
import { BackgroundComponent } from "./background/background";
import { LandingPageComponent } from "./landing_page/landing_page";
/** @jsx jsx */

export let openModalCallback: React.MutableRefObject<Callback<boolean>>;
export let modalContent: React.MutableRefObject<React.ReactElement>;
export let anchor: React.MutableRefObject<React.ReactElement>;

const App = () => {
  const [theme] = useThemeState();
  openModalCallback = React.useRef<Callback<boolean>>(undefined);
  modalContent = React.useRef<React.ReactElement>(undefined);
  const anchorScroll = React.useRef<HTMLDivElement>(undefined);
  const handleScroll = React.useCallback(() => {}, []);
  React.useEffect(() => {
    if (anchorScroll.current) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [anchorScroll.current]);

  const { t } = useTranslation();
  const [selectedAnchor, setSelectedAnchor] = React.useState<string>(undefined);
  const profileAnchor: AnchorItem = {
    anchor: "profile",
    title: t("profile"),
  };
  const cvAnchor: AnchorItem = {
    anchor: "cv",
    title: t("cvHeadline"),
  };
  const skillsAnchor: AnchorItem = {
    anchor: "skills",
    title: t("skillsHeadline"),
  };
  const handleBecomeBiggestElement = React.useCallback(
    (anchor) => {
      anchor !== selectedAnchor && setSelectedAnchor(anchor);
    },
    [selectedAnchor]
  );
  return (
    <div className="anchor-scroll" ref={anchorScroll}>
      <PageBase theme={theme}>
        <Modal openRef={openModalCallback} contentRef={modalContent} />
        <BackgroundComponent>
          <LandingPageComponent />

          <Anchor
            items={[profileAnchor, cvAnchor, skillsAnchor]}
            selectedItem={selectedAnchor}
          />
          <SubPageComponent
            headline={t("profile")}
            quote={t("profileQuote")}
            anchorId={profileAnchor.anchor}
            onBecomeBiggestElement={handleBecomeBiggestElement}
          >
            <ProfilePageComponent />
          </SubPageComponent>

          <SubPageComponent
            headline={t("cvHeadline")}
            quote={t("cvQuote")}
            quoteAuthor={t("cvQuoteAuthor")}
            colorBackground={true}
            anchorId={cvAnchor.anchor}
            onBecomeBiggestElement={handleBecomeBiggestElement}
          >
            <CvPageComponent />
          </SubPageComponent>

          <SubPageComponent
            headline={t("skillsHeadline")}
            quote={t("skillsQuote")}
            quoteAuthor={t("skillsQuoteAuthor")}
            anchorId={skillsAnchor.anchor}
            onBecomeBiggestElement={handleBecomeBiggestElement}
          >
            <SkillsPageComponent />
          </SubPageComponent>

          <PageFooter />
        </BackgroundComponent>
      </PageBase>
    </div>
  );
};

export default App;
