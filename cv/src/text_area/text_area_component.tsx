import { Callback } from "../manual_typings/generic_types";
import * as React from "react";
import { useTheme } from "emotion-theming";
import { PageBaseTheme } from "../page_base/page_base_theme";
import { usePageBaseTheme } from "../hooks/use_page_base_theme";

interface TextAreaComponentProps {
  value: string;
  hint?: string;
  onChange?: Callback<string>;
}

export const TextAreaComponent = (props: TextAreaComponentProps) => {
  const handleInputChange = React.useCallback(
    event =>
      props.onChange?.((event.target as HTMLSpanElement).innerText),
    [props]
  );
  const theme = usePageBaseTheme()
  return (
    <div className="text-area" style={{'backgroundColor': theme.mainColor}}>
      <span className="hint">{props.hint}</span>
      <textarea className="value" onChange={handleInputChange}>
        {props.value}
      </textarea>
    </div>
  );
};
