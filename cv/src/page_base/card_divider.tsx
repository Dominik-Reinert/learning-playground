import * as React from "react";
import { ImageComponent } from "../image/image_component";
import { css, jsx } from "@emotion/core";
import { TabsComponentProps } from "../tabs/tabs_component";
/** @jsx jsx */

interface CardDividerProps {
  backgroundImage: string;
  children: React.FunctionComponentElement<TabsComponentProps>;
}

export const CardDividerComponent: React.FunctionComponent<CardDividerProps> = props => {
  const cardDividerStyle = useCardDividerCss();
  const backgroundImageStyle = useBackgroundImageCss();
  const cardContentStyle = useCardContentCss();
  return (
    <div css={cardDividerStyle}>
      <ImageComponent
        src={props.backgroundImage}
        cssStyle={backgroundImageStyle}
      />
      <div css={cardContentStyle}>{props.children}</div>
    </div>
  );
};

const useCardDividerCss = () => {
  return css`
    label: card-divider;

    height: 100%;

    display: flex;
    flex-direction: column;
  `;
};

const useBackgroundImageCss = () => {
  return css`
    label: background-image;

    flex: 12 0 0;
  `;
};

const useCardContentCss = () => {
  return css`
    label: card-content;
    flex: 36 0 0;
    position: absolute;
    top: 40%;

    width: 100%;
    height: 44.9%;
  `;
};
