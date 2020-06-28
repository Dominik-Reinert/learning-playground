import * as React from "react";
import { css, jsx } from "@emotion/core";
import { usePageBaseTheme } from "../hooks/use_page_base_theme";
import { Callback } from "../manual_typings/generic_types";

/** @jsx jsx */

export interface ModalProps {
  openRef: React.MutableRefObject<Callback<boolean>>;
  contentRef: React.MutableRefObject<React.ReactElement>;
}

export const Modal = (props: React.PropsWithChildren<ModalProps>) => {
  const [open, setOpen] = React.useState(false);
  const modalStyle = useModalStyle(open);
  props.openRef.current = setOpen;
  return (
    <div className="modal" css={modalStyle}>
      <div className="modal-content">{props.contentRef.current}</div>
    </div>
  );
};

const useModalStyle = (open: boolean) => {
  const theme = usePageBaseTheme();

  const hexToRgb = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : undefined;
  };

  const backgroundRgb = hexToRgb(theme.mainColors.darkest);
  const rgbaValue = backgroundRgb
    ? `rgba(${backgroundRgb.r}, ${backgroundRgb.g}, ${backgroundRgb.b}, 0.8)`
    : "";

  return css`
    label: modal;

    display: ${open ? "flex" : "none"};

    position: absolute;
    z-index: 1;
    background-color: ${rgbaValue};

    width: 100%;
    height: 100%;

    .modal-content {
      background-color: ${theme.background};

      width: 200px;
      height: 300px;
      margin: auto;
    }
  `;
};
