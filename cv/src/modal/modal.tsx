import { css } from "@emotion/core";
import * as React from "react";
import { useDisableScroll } from "../hooks/use_disable_scroll";
import { useOnClickOutside } from "../hooks/use_on_click_outside";
import { usePageBaseTheme } from "../hooks/use_page_base_theme";
import { Callback } from "../manual_typings/generic_types";

export interface ModalProps {
  openRef: React.MutableRefObject<Callback<boolean>>;
  contentRef: React.MutableRefObject<React.ReactElement>;
}

export const Modal = (props: React.PropsWithChildren<ModalProps>) => {
  const [open, setOpen] = React.useState(false);
  const modalStyle = useModalStyle(open);
  const [disableScroll, enableScroll] = useDisableScroll();
  React.useEffect(() => (open ? disableScroll() : enableScroll()), [open]);

  const contentWrapperRef = React.useRef(undefined);
  useOnClickOutside(contentWrapperRef, () => setOpen(false));
  props.openRef.current = setOpen;
  return (
    <div className="modal" css={modalStyle}>
      <div ref={contentWrapperRef} className="modal-content">
        {props.contentRef.current}
      </div>
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

  const backgroundRgb = hexToRgb(theme.grayscale.labelOnBackground);
  const rgbaValue = backgroundRgb
    ? `rgba(${backgroundRgb.r}, ${backgroundRgb.g}, ${backgroundRgb.b}, 0.8)`
    : "";

  return css`
    label: modal;

    display: flex;

    visibility: ${open ? "visible" : "hidden"};

    position: fixed;
    z-index: 1;
    background-color: ${rgbaValue};

    width: 100%;
    height: 100%;

    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .modal-content {
      background-color: ${theme.grayscale.labelOnBackground};

      min-width: 200px;
      min-height: 200px;
      width: fit-content;
      height: fit-content;

      border-radius: 8px;

      margin: auto;
    }
  `;
};
