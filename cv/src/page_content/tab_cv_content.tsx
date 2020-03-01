import * as React from "react";
import { jsx, css } from "@emotion/core";
import { Tabs } from "../hooks/use_tab_state";
import { ImageComponent } from "../image/image_component";
import { TabComponent, TabContent } from "../tabs/tab_component";
import { CardComponent } from "../card/card_component";
import { bigFiveEn } from "../data/big_five";
import { CardDividerComponent } from "../page_base/card_divider";
import { useTranslation, Trans } from "react-i18next";
/** @jsx jsx */

export const TabCvContent: React.FunctionComponent<{}> = () => {
  const cvContentStyle = useCvContentStyle();
  const cvSidebarStyle = useCvSidebarStyle();
  const cvMainContentStyle = useCvMainContentStyle();
  const { t, i18n } = useTranslation();
  return (
    <React.Fragment>
      <CardComponent headerProps={{ title: t("welcome") }}>
        <Trans i18nKey="welcomeMsg" />
      </CardComponent>

      <CardComponent headerProps={{ title: "The big five" }}>
        <Trans i18nKey="bigFive" />
      </CardComponent>
    </React.Fragment>
  );
};

const useCvContentStyle = () => css`
  label: cv-content;
  display: flex;
  height: 100%;
`;

const useCvSidebarStyle = () => css`
  label: cv-sidebar;
  flex: 12 0 0;
  background-color: red;
  border-right: 2px solid black;
  height: 100%;
`;

const useCvMainContentStyle = () => css`
  label: cv-main-content;
  flex: 24 0 0;
  background-color: blue;
  height: 100%;
`;
