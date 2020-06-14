import { css, jsx } from '@emotion/core';
import * as React from 'react';
/** @jsx jsx */

interface BackgroundImageComponentProps {
    backgroundImage: string;
}

export const BackgroundImageComponent: React.FunctionComponent<React.PropsWithChildren<BackgroundImageComponentProps>> = (props: React.PropsWithChildren<BackgroundImageComponentProps>) => {
    const backgroundImageStyle = useBackgroundImageStyle();
    return <img css={backgroundImageStyle} src={props.backgroundImage} />
}

const useBackgroundImageStyle = () => {
    return css`
      label: background-image;
  
      height: 100vh;
      width: 100vw;
    `;
};