import * as React from "react";
import { css, jsx } from "@emotion/core";
import { usePageBaseTheme } from "../hooks/use_page_base_theme";

/** @jsx jsx */
export interface AnchorItem {
  title: string;
  anchor: string;
  selected: boolean;
}

export interface AnchorProps {
  items: AnchorItem[];
}

export const Anchor = (props: React.PropsWithChildren<AnchorProps>) => {
  const style = useAnchorStyle();
  return (
    <div css={style}>
      {props.items.map((item) => (
        <span className="item">
          <a
            key={`item-${item.title}`}
            href={`#${item.anchor}`}
            className="item-anchor"
          >
            {item.title}
          </a>
        </span>
      ))}
    </div>
  );
};

const useAnchorStyle = () => {
  const theme = usePageBaseTheme();
  return css`
    label: anchor;

    position: sticky;
    z-index: 1;

    height: 0;

    left: calc(85% - 80px);
    top: 15%;

    width: 100px;

    .item {
      height: 100px;

      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;

      background-color: ${theme.overlayBackground};
      
      &-anchor {
        text-decoration: none;
        outline: none;
        color: ${theme.mainColors.ligthest};
      }
    }
  `;
};
