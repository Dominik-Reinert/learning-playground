import { css } from "@emotion/core";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { ArrowCta } from "../arrow_cta/arrow_cta";
import { usePageBaseTheme } from "../hooks/use_page_base_theme";

interface LandingPageProps {}

export const CvLandingPageComponent: React.FunctionComponent<React.PropsWithChildren<
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
    background-color: ${theme.colors.dark};
    background: linear-gradient(
      0deg,
      ${theme.colors.dark} 0%,
      ${theme.grayscale.background} 100%
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
    font-size: ${theme.fonts.headline.size};
    font-weight: ${theme.fonts.headline.weight};

    color: ${theme.grayscale.dark};

    border-bottom: 1px solid ${theme.grayscale.borderOnBackground};
  `;
};

const useSubpageHeaderStyle = () => {
  const theme = usePageBaseTheme();
  return css`
    label: subpage-header-style;

    margin: 8px;

    text-align: center;
    font-size: ${theme.fonts.subHeadline.size};
    font-weight: ${theme.fonts.subHeadline.weight};

    color: ${theme.grayscale.labelOnBackground};
  `;
};
