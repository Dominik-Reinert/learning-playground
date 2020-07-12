import { css } from "@emotion/core";
import * as React from "react";
import { usePageBaseTheme } from "../hooks/use_page_base_theme";

export interface TabSelectorProps {
  active: boolean;
  children: React.ReactNode;
}

export const TabSelector: React.FunctionComponent<TabSelectorProps> = React.forwardRef<
  HTMLDivElement,
  TabSelectorProps
>((props: React.PropsWithChildren<TabSelectorProps>, ref) => {
  const style = useTabSelectorCss(props.active);
  return (
    <div ref={ref} css={style}>
      {props.children}
    </div>
  );
});

const useTabSelectorCss = (active?: boolean) => {
  const theme = usePageBaseTheme();
  return css`
    label: tab-selector;

    border-radius: 50%;

    img {
      width: 100%;
      height: 100%;
    }

    ${active
      ? `
      width: 55px;
      height: 55px;
      border: 2px solid ${theme.mainColors.normal};
    `
      : `
        width: 40px;
        height: 40px;
        border: 1px solid ${theme.mainColors.ligthest};
    `}
  `;
};
