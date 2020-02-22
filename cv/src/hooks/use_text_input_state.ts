import { Callback, Delegate } from "../manual_typings/generic_types";
import * as React from "react";

type TextInputState = [string, Callback<string>];

export const useTextInputState: Delegate<string, TextInputState> = (
  initialState: string
) => {
  const [currentInput, setCurrentInput] = React.useState<string>(
    "This is the current input!"
  );

  const handleInputChange = React.useCallback(
    value => setCurrentInput(value),
    []
  );
  return [currentInput, handleInputChange];
};
