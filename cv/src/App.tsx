import * as React from "react";
import { useTranslation } from "react-i18next";
import { Anchor, AnchorItem } from "./anchor/anchor";
import "./App.css";
import { BackgroundComponent } from "./background/background";
import "./data/i18n";
import { useThemeState } from "./hooks/use_theme_state";
import { LandingPageComponent } from "./landing_page/landing_page";
import { Callback } from "./manual_typings/generic_types";
import { Modal } from "./modal/modal";
import { useModal } from "./modal/use_modal";
import { CvPageComponent } from "./pages/cv_page";
import { ProfilePageComponent } from "./pages/profile_page";
import { SkillsPageComponent } from "./pages/skills_page";
import { PageBase } from "./page_base/page_base";
import { PageFooter } from "./page_footer/page_footer";
import { SubPageComponent } from "./subpage/subpage_component";

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

  const [users, setUsers] = React.useState(undefined);
  const [openUsers, closeUsers] = useModal({
    content: <div>hello {users}</div>,
  });
  fetch("/api/users/all")
    .then((u) => u.body.getReader({ mode: "byob" }))
    .then((u) => setUsers(u));
  React.useEffect(() => openUsers(), [users]);

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
