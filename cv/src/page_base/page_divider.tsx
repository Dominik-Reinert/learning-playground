import * as React from "react";
import { ImageComponent } from "../image/image_component";
import { css, jsx } from "@emotion/core";
/** @jsx jsx */

interface PageDividerProps {
  backgroundImage: string;
}

export const PageDividerComponent: React.FunctionComponent<PageDividerProps> = props => {
  const pageDividerStyle = usePageDividerCss();
  const backgroundImageStyle = useBackgroundImageCss();
  const pageContentStyle = usePageContentCss();
  return (
    <div css={pageDividerStyle}>
      <ImageComponent
        src={props.backgroundImage}
        cssStyle={backgroundImageStyle}
      />
      <div css={pageContentStyle}>Content</div>
    </div>
  );
};

const usePageDividerCss = () => {
  return css`
    label: page-divider;

    height: 100%;

    display: flex;
    flex-direction: column;
  `;
};

const useBackgroundImageCss = () => {
  return css`
    label: background-image;

    flex: 6 0 0;
  `;
};

const usePageContentCss = () => {
  return css`
    label: page-content;

    flex: 12 0 0;
  `;
};
