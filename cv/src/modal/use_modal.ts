import * as React from "react";
import { modalContent, openModalCallback } from "../App";

export interface UseModalProps {
  content: React.ReactElement;
}

export const useModal = (props: UseModalProps) => {
  const openModal = React.useCallback(() => {
    modalContent.current = props.content;
    openModalCallback.current(true);
  }, [props.content]);
  const closeModal = () => openModalCallback.current(false);
  return [openModal, closeModal];
};
