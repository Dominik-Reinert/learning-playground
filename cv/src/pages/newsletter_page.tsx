import * as React from "react";
import {
  WebfontIcon,
  WebfontRegularIconComponent,
} from "../webfont_icon/webfont_icon";

export const NewsletterPageComponent  = () => {
  const [subscribed, setSubscribed] = React.useState<boolean>(false);
  const inputRef = React.useRef<HTMLInputElement>(undefined);
  const handleSubmit = React.useCallback(() => {
    if (inputRef.current.validity.valid) {
      fetch("http://localhost:3001/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: inputRef.current.value }),
      }).then((response) => {
        if (response.ok) {
          setSubscribed(true);
        }
      });
    }
  }, [inputRef.current]);

  let [subscriptions, setSubscriptions] = React.useState<any[]>([]);
  React.useEffect(() => {
    fetch("http://localhost:3001/api/newsletter/all")
      .then((res) => res.json())
      .then((res) => setSubscriptions(res.subscriptions));
  }, [subscribed]);

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

      {subscribed && (
        <div>
          Successfully described to newsletter! Please check your email for the
          activation link!
        </div>
      )}

      <div>
        Subscriptions:
        {subscriptions.map((u) => (
          <div key={u._id}>{u.email}</div>
        ))}
      </div>
    </div>
  );
};
