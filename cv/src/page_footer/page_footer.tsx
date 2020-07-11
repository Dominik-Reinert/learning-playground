import * as React from "react";
import { css, jsx } from "@emotion/core";
import { usePageBaseTheme } from "../hooks/use_page_base_theme";
import { useModal } from "../modal/use_modal";
import { useImpressumModal } from "../impressum/use_impressum_modal";

/** @jsx jsx */

export const PageFooter = (props) => {
  const pageFooterStyle = usePageFooterStyle();
  const [openImpressum] = useImpressumModal();
  return (
    <div className="page-footer" css={pageFooterStyle}>
      <div className="github">
        <a href="https://github.com/Dominik-Reinert/CV" target="_blank">
          Go to project github page
        </a>
      </div>
      <div className="impressum" onClick={() => openImpressum()}>
        Impressum
      </div>
      <div className="copyright">&copy; 2020</div>
    </div>
  );
};

const usePageFooterStyle = () => {
  const theme = usePageBaseTheme();
  return css`
    label: page-footer;

    display: flex;

    justify-content: space-evenly;

    color: ${theme.mainColors.ligthest};
    background-color: ${theme.overlayBackground};

    padding: 20px 0;

    > div {
      flex: 12 0 0;
      text-align: center;
    }

    a {
      color: ${theme.mainColors.ligthest};
    }

    .impressum {
      cursor: pointer;
    }

    .github {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;

      min-width: 180px;
    }
  `;
};
