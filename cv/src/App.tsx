import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./data/i18n";
import { Callback } from "./manual_typings/generic_types";
import { Modal } from "./modal/modal";
import { CvPageComponent } from "./pages/cv_page";
import { HomePageComponent } from "./pages/home_page";
import { NewsletterPageComponent } from "./pages/newsletter_page";
import { NewsletterVerificationPageComponent } from "./pages/newsletter_verfication_page";
import { PageBase } from "./page_base/page_base";
import { FooterAdjustedPageContent } from "./page_footer/footer_adjusted_page_content";
import { PageFooter } from "./page_footer/page_footer";
import { RouteURL } from "./router/router";

export let openModalCallback: React.MutableRefObject<Callback<boolean>>;
export let modalContent: React.MutableRefObject<React.ReactElement>;
export let anchor: React.MutableRefObject<React.ReactElement>;
export let anchorScroll: React.MutableRefObject<HTMLDivElement>;

const App = () => {
  openModalCallback = React.useRef<Callback<boolean>>(undefined);
  modalContent = React.useRef<React.ReactElement>(undefined);
  anchorScroll = React.useRef<HTMLDivElement>(undefined);
  return (
    <div
      className="anchor-scroll"
      style={{ height: "100%" }}
      ref={anchorScroll}
    >
      <PageBase>
        <Modal openRef={openModalCallback} contentRef={modalContent} />
        <FooterAdjustedPageContent>
          <Router>
            <Switch>
              <Route path={`${RouteURL.NEWSLETTER_VERIFY}`}>
                <NewsletterVerificationPageComponent />
              </Route>
              <Route path={`${RouteURL.NEWSLETTER}`}>
                <NewsletterPageComponent />
              </Route>
              <Route path={`${RouteURL.CV}`}>
                <CvPageComponent />
              </Route>
              <Route path={`${RouteURL.HOME}`}>
                <HomePageComponent />
              </Route>
            </Switch>
          </Router>
        </FooterAdjustedPageContent>
        <PageFooter />
      </PageBase>
    </div>
  );
};

export default App;
