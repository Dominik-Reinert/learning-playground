import * as React from "react";
import {
  WebfontIcon,
  WebfontRegularIconComponent,
} from "../webfont_icon/webfont_icon";

export const NewsletterPageComponent = () => {
  const inputRef = React.useRef<HTMLInputElement>(undefined);
  const handleSubmit = React.useCallback(() => {
    if (inputRef.current.validity.valid) {
      const response = fetch("http://localhost:3001/newsletter/subscribe");
      response.then(() => alert("success"));
    }
  }, [inputRef.current]);

  let users = [];
  React.useEffect(() => {
    fetch("http://localhost:3001/users/all")
      .then((res) => res.json())
      .then((res) => (users = res.users));
  }, []);

  return (
    <div>
      <div>Awesome Newsletter!</div>
      <div>Stay informed</div>
      <div>
        <WebfontRegularIconComponent webfontIcon={WebfontIcon.ENVELOPE} />
        <input ref={inputRef} type="email" required={true} />
      </div>
      <div>
        <button type="submit" onClick={handleSubmit}>
          Subscribe :)
        </button>
      </div>

      <div>
        Users:{" "}
        {users.map((u) => (
          <span>{u}</span>
        ))}
      </div>
    </div>
  );
};
