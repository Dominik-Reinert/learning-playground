import { css } from "@emotion/core";
import * as React from "react";
import { usePageBaseTheme } from "../hooks/use_page_base_theme";

export interface AnchorItem {
  title: string;
  anchor: string;
}

export interface AnchorProps {
  items: AnchorItem[];
  selectedItem: string;
}

export const Anchor = (props: React.PropsWithChildren<AnchorProps>) => {
  const style = useAnchorStyle();
  return (
    <div css={style}>
      {props.items.map((item) => (
        <span key={`item-${item.title}`} className="item">
          <a
            href={`#${item.anchor}`}
            className={`item-anchor ${
              item.anchor === props.selectedItem ? "selected" : ""
            }`}
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

      &:first-of-type {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
      }

      &:last-of-type {
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
      }

      &-anchor {
        text-decoration: none;
        outline: none;
        color: ${theme.mainColors.ligthest};

        &.selected {
          color: ${theme.mainColors.normal};
        }
      }

      @media only screen and (max-width: 1000px) {
        visibility: hidden;
      }
    }
  `;
};
