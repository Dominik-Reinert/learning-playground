import { css } from "@emotion/core";
import * as React from "react";
import { usePageBaseTheme } from "../hooks/use_page_base_theme";

interface HeaderProps {
  title: string;
}

interface CardComponentProps {
  headerProps?: HeaderProps;
}

export const CardComponent: React.FunctionComponent<React.PropsWithChildren<
  CardComponentProps
>> = (props: React.PropsWithChildren<CardComponentProps>) => {
  const style = useCardComponentStyle();
  const headerStyle = useCardComponentHeaderStyle();
  const contentStyle = useCardComponentContentStyle();
  return (
    <div css={style}>
      {props.headerProps && (
        <div css={headerStyle}>
          <span>{props.headerProps.title}</span>
        </div>
      )}
      <div css={contentStyle}>{props.children}</div>
    </div>
  );
};

const useCardComponentStyle = () => {
  const theme = usePageBaseTheme();
  return css`
    label: card;

    background-color: white;
    box-shadow: 3px 3px 5px 2px ${theme.mainColors.ligthest};
    border-radius: 2px;

    margin: 16px 0;
    max-width: 80vw;
    display: flex;
    flex-direction: column;
    position: relative;
  `;
};

const useCardComponentHeaderStyle = () => {
  const theme = usePageBaseTheme();
  return css`
    label: card-header;

    width: 100%;
    height: 32px;
    line-height: 32px;

    font-size: 20px;
    font-weight: bolder;

    display: flex;

    > span {
      margin: auto;
      text-align: center;
    }

    border-bottom: 1px solid ${theme.mainColors.ligthest};
  `;
};

const useCardComponentContentStyle = () => {
  return css`
    label: card-content;

    padding: 8px;
    line-height: 32px;
  `;
};
