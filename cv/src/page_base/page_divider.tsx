import * as React from "react";
import { ImageComponent } from "../image/image_component";
import { css, jsx } from "@emotion/core";
import { TabsComponentProps } from "../tabs/tabs_component";
/** @jsx jsx */

interface PageDividerProps {
  backgroundImage: string;
  children: React.FunctionComponentElement<TabsComponentProps>;
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
      <div css={pageContentStyle}>{props.children}</div>
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
    max-height: 30vh;
    max-width: 100vw;
  `;
};

const usePageContentCss = () => {
  return css`
    label: page-content;

    position: absolute;
    width: 100vw;
    height: 80vh;
    top: 20vh;

    flex: 12 0 0;
  `;
};
