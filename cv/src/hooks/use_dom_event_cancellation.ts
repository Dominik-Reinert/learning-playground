import * as React from "react";

export const useDomEventCancellation = (
  ref: React.MutableRefObject<React.ReactElement>,
  eventsToCancel: string[]
) => {
  React.useEffect(() => {
    eventsToCancel.forEach((event) => {
      document.addEventListener(event, (evt) => {
        evt.stopPropagation();
      });
    });
    return () => {
      eventsToCancel.forEach((event) => {
        document.removeEventListener(event, (evt) => evt.stopPropagation());
      });
    };
  }, [ref]);
};
