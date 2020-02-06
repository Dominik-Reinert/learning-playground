import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { TextAreaComponent } from "./text_area/text_area_component";
import { Callback } from "./manual_typings/generic_types";
import { ImageComponent } from "./image/image_component";
import { PageBase } from "./page_base/page_base";

const App = () => {
  const [currentInput, setCurrentInput] = React.useState<string>(
    "This is the current input!"
  );
  const handleInputChange = React.useCallback(
    value => setCurrentInput(value),
    []
  );
  return (
    <PageBase>
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
