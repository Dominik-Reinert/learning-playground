import * as React from "react";
import { modalContent, openModalCallback } from "../App";

export interface UseModalProps {
  content: React.ReactElement;
}

export const useModal = (props: UseModalProps) => {
  modalContent.current = props.content;
  const openModal = () => openModalCallback.current(true);
  const closeModal = () => openModalCallback.current(false);
  return [openModal, closeModal];
};
