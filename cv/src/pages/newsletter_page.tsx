import * as React from "react";
import {
  WebfontIcon,
  WebfontRegularIconComponent,
} from "../webfont_icon/webfont_icon";

export const NewsletterPageComponent = () => {
  const inputRef = React.useRef<HTMLInputElement>(undefined);
  const handleSubmit = React.useCallback(() => {
    if (inputRef.current.validity.valid) {
      const response = fetch("http://localhost:3001/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: inputRef.current.value }),
      });
      response.then(() => alert("success"));
    }
  }, [inputRef.current]);

  let [subscriptions, setSubscriptions] = React.useState<any[]>([]);
  React.useEffect(() => {
    fetch("http://localhost:3001/api/newsletter/all")
      .then((res) => res.json())
      .then((res) => setSubscriptions(res.users));
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
        Users:
        {subscriptions.map((u) => (
          <span>{u.name}</span>
        ))}
      </div>
    </div>
  );
};
