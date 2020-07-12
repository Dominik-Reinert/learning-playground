import { css } from "@emotion/core";
import * as React from "react";
import { usePageBaseTheme } from "../hooks/use_page_base_theme";

interface BackgroundProps {}

export const BackgroundComponent: React.FunctionComponent<React.PropsWithChildren<
  BackgroundProps
>> = (props: React.PropsWithChildren<BackgroundProps>) => {
  const backgroundStyle = useBackgroundStyle();
  return <div css={backgroundStyle}>{props.children}</div>;
};

const useBackgroundStyle = () => {
  const theme = usePageBaseTheme();
  return css`
    label: background;

    height: 100%;
    background-color: ${theme.background};
  `;
};
