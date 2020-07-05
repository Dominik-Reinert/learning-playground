import { css, jsx } from "@emotion/core";
import * as React from "react";
import { usePageBaseTheme } from "../hooks/use_page_base_theme";
import { ArrowCta } from "../arrow_cta/arrow_cta";
import { useTranslation } from "react-i18next";
/** @jsx jsx */

interface LandingPageProps {}

export const LandingPageComponent: React.FunctionComponent<React.PropsWithChildren<
  LandingPageProps
>> = (props: React.PropsWithChildren<LandingPageProps>) => {
  const { t, i18n } = useTranslation();
  const imageCenterRootStyle = useImageCenterRootStyle();
  const imageCenterStyle = useImageCenterStyle();
  const nameStyle = useNameStyle();
  const subpageheaderStyle = useSubpageHeaderStyle();
  return (
    <div css={imageCenterRootStyle}>
      <div css={imageCenterStyle}>
        <h1 css={nameStyle}>Dominik Reinert</h1>
        <p css={subpageheaderStyle}>{t("interactiveResume")}</p>
      </div>
      <ArrowCta />
    </div>
  );
};

const useImageCenterRootStyle = () => {
  const theme = usePageBaseTheme();
  return css`
    label: image-center-root-style;

    height: 100vh;
    background-color: ${theme.background};
    background: linear-gradient(
      0deg,
      ${theme.background} 0%,
      ${theme.mainColors.ligthest} 100%
    );

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

const useNameStyle = () => {
  const theme = usePageBaseTheme();
  return css`
    label: name-style;

    margin: 8px;
    padding-bottom: 8px;

    text-align: center;
    font-size: xxx-large;

    color: ${theme.mainColors?.ligther};

    border-bottom: 1px solid ${theme.mainColors?.ligther};
  `;
};

const useSubpageHeaderStyle = () => {
  const theme = usePageBaseTheme();
  return css`
    label: subpage-header-style;

    margin: 8px;

    text-align: center;
    font-size: x-large;

    color: ${theme.mainColors?.ligther};
  `;
};
