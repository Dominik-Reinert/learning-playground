import { css, jsx } from "@emotion/core";
import * as React from "react";
import { Trans, useTranslation } from "react-i18next";
import { CardComponent } from "../card/card_component";
/** @jsx jsx */

export const TabCvContent: React.FunctionComponent<{}> = () => {
  const cvContentStyle = useCvContentStyle();
  const cvSidebarStyle = useCvSidebarStyle();
  const cvMainContentStyle = useCvMainContentStyle();
  const { t, i18n } = useTranslation();
  return (
    <React.Fragment>
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
