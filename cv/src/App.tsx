import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./data/i18n";
import { useThemeState } from "./hooks/use_theme_state";
import { Callback } from "./manual_typings/generic_types";
import { Modal } from "./modal/modal";
import { CvPageComponent } from "./pages/cv_page";
import { NewsletterPageComponent } from "./pages/newsletter_page";
import { PageBase } from "./page_base/page_base";
import { RouteURL } from "./router/router";

export let openModalCallback: React.MutableRefObject<Callback<boolean>>;
export let modalContent: React.MutableRefObject<React.ReactElement>;
export let anchor: React.MutableRefObject<React.ReactElement>;
export let anchorScroll: React.MutableRefObject<HTMLDivElement>;

const App = () => {
  const [theme] = useThemeState();
  openModalCallback = React.useRef<Callback<boolean>>(undefined);
  modalContent = React.useRef<React.ReactElement>(undefined);
  anchorScroll = React.useRef<HTMLDivElement>(undefined);
  return (
    <div className="anchor-scroll" ref={anchorScroll}>
      <PageBase theme={theme}>
        <Modal openRef={openModalCallback} contentRef={modalContent} />
        <Router>
          <Switch>
            <Route path={`${RouteURL.NEWSLETTER}`}>
              <NewsletterPageComponent />
            </Route>
            <Route path={`${RouteURL.HOME}`}>
              <CvPageComponent />
            </Route>
          </Switch>
        </Router>
      </PageBase>
    </div>
  );
};

export default App;
