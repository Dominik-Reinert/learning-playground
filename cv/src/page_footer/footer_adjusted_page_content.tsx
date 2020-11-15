import { css } from "@emotion/core";
import * as React from "react";

export const FooterAdjustedPageContent = ({ children }) => {
  const className = useFooterAdjustedPageContentStyle();
  return (
    <div css={className}>
      <div className="content">{children}</div>
    </div>
  );
};

const useFooterAdjustedPageContentStyle = () => {
  return css`
    label: footer-adjusted-page-content-wrapper;

    min-height: 100%;

    .content {
      padding-bottom: 60px;
    }
  `;
};
