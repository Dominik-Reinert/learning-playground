import * as React from "react";
import { css, jsx } from "@emotion/core";

/** @jsx jsx */

export const Anchor = (props) => {
  const style = useAnchorStyle();
  return (
    <div css={style}>
      <div className="item">some other content</div>
    </div>
  );
};

const useAnchorStyle = () => {
  return css`
    label: anchor;

    position: sticky;
    z-index: 1;

    height: 0;

    left: calc(85% - 100px);
    top: 15%;

    width: 100px;

    .item {
      height: 100px;
      background-color: red;
    }
  `;
};
