import * as React from "react";
import { Callback } from "../manual_typings/generic_types";

export const useOnClickOutside = (
  componentRef: React.MutableRefObject<any>,
  onClickOutside: Callback<void>
) => {
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (!componentRef.current?.contains(event.target)) {
        onClickOutside();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [componentRef]);
};
