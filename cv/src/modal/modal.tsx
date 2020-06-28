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
  return css`
    label: modal;

    display: ${open ? "block" : "hidden"};

    position: absolute;
    opacity: 0.4;
    background-color: ${theme.mainColors.darkest};

    min-width: 200px;
    min-height: 300px;

    .modal-content {
      background-color: ${theme.background};
    }
  `;
};
