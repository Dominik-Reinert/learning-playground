import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { TextAreaComponent } from "./text_area/text_area_component";
import { Callback } from "./manual_typings/generic_types";
import { ImageComponent } from "./image/image_component";
import { PageBase } from "./page_base/page_base";
import { ButtonComponent } from "./button/button_component";
import { Theme } from "./page_base/page_base_theme_provider";
import { BrandIconComponent, BrandIcon } from "./webfont_icon/brand_icon";
import { WebfontIcon } from "./webfont_icon/webfont_icon";

const App = () => {
  const [currentInput, setCurrentInput] = React.useState<string>(
    "This is the current input!"
  );
  const handleInputChange = React.useCallback(
    value => setCurrentInput(value),
    []
  );
  const [theme, setTheme] = React.useState<Theme>(Theme.CORAL);
  const handleThemeChange = React.useCallback(
    () =>
      theme === Theme.CORAL ? setTheme(Theme.INDIGO) : setTheme(Theme.CORAL),
    [theme]
  );
  return (
    <PageBase theme={theme}>
      <div className="App">
        <header className="App-header">
          <ImageComponent
            src={logo}
            onClick={() => alert("click!")}
            className="logo"
          />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <ButtonComponent
            label="Change the theme"
            icon={{ webfontIcon: WebfontIcon.ACCESSABILITY }}
            onClick={handleThemeChange}
          />
          <TextAreaComponent
            value={currentInput}
            onChange={handleInputChange}
          />
        </header>
      </div>
    </PageBase>
  );
};

export default App;
