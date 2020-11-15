import { css } from "@emotion/core";
import * as React from "react";
import { usePageBaseTheme } from "../hooks/use_page_base_theme";
import { useModal } from "../modal/use_modal";

export const useImpressumModal = () => {
  const impressumStyle = useImpressumModalStyle();
  return useModal({
    content: (
      <div className="impressum-modal" css={impressumStyle}>
        <div>
          <div className="title">Impressum</div>
          <div className="subtitle">Angaben gemäß § 5 TMG</div>
        </div>
        <div>
          <div className="header">Adresse</div>
          <div>Dominik Reinert</div>
          <div>Am Jungenwäldchen 8</div>
          <div>66663 Merzig</div>
        </div>
        <div>
          <div className="header">Kontakt</div>
          <div className="divider">
            <span className="left">Telefon:</span>
            <span className="right">0160 722 84 11</span>
          </div>
          <div className="divider">
            <span className="left">Email:</span>
            <span className="right">dominik.reinert.merzig@gmail.com</span>
          </div>
        </div>
        <div>
          <div className="header">UmsatzsteuerId</div>
          <div>yyyyyxxxxx</div>
        </div>
      </div>
    ),
  });
};

const useImpressumModalStyle = () => {
  const theme = usePageBaseTheme();
  return css`
    label: impressum-modal;

    border-radius: 8px;

    padding: 24px;

    width: 400px;

    .title {
      font-weight: bolder;
      text-align: center;
      font-size: ${theme.fonts.subHeadline.size};
      font-weight: ${theme.fonts.subHeadline.weight};
    }

    .subtitle {
      font-weight: bold;
      text-align: center;
      font-size: large;
    }

    .header {
      font-weight: bold;
      margin-top: 24px;
    }

    .divider {
      display: flex;

      .right {
        flex: 12 0 0;
      }

      .left {
        text-align: left;
        flex: 0 0 100px;
      }
    }
  `;
};
