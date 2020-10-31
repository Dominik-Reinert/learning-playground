import { css } from "@emotion/core";
import * as React from "react";
import { BackButtonComponent } from "../back_button/back_button_component";
import { usePageBaseTheme } from "../hooks/use_page_base_theme";
import { PageFooter } from "../page_footer/page_footer";
import { RouteURL } from "../router/router";
import { Newsletter } from "./newsletter";

export const NewsletterPageComponent = () => {
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
      }).then((response: Response) => {
        if (response.ok) {
          setSubscribed(true);
        }
      });
    }
  }, [inputRef.current]);

  let [subscriptions, setSubscriptions] = React.useState<Newsletter[]>([]);
  React.useEffect(() => {
    fetch("http://localhost:3001/api/newsletter/all")
      .then((res) => res.json())
      .then((res) => setSubscriptions(res.subscriptions));
  }, [subscribed]);

  const subscribeStyle = useSubscribeStyle();
  return (
    <div css={subscribeStyle}>
      <BackButtonComponent backLink={RouteURL.HOME} />

      <div className="subscribe-form">
        <div className="headline">Subscribe</div>
        <div className="subline">Sign up</div>
        <div className="submit-group">
          <div className="input-wrapper">
            <input ref={inputRef} type="email" required={true} />
          </div>
          <div className="submit" onClick={handleSubmit}>
            Subscribe
          </div>
        </div>
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
      <PageFooter />
    </div>
  );
};

const useSubscribeStyle = () => {
  const theme = usePageBaseTheme();
  return css`
    label: subscribe-form;

    .subscribe-form {
      display: flex;
      flex-direction: column;

      min-height: 180px;

      padding: 8px;

      width: 50%;
      margin: auto;

      color: ${theme.mainColors.ligthest};
      background-color: ${theme.mainColors.darker};

      > * {
        margin: auto;
      }

      .headline {
        text-transform: uppercase;

        font-size: x-large;
      }

      .submit-group {
        display: flex;

        .input-wrapper {
          background-color: white;

          padding: 2px;
          margin-right: 8px;

          input {
            border: none;
            font-size: 14px;
            padding: 6px;

            &:focus {
              outline: none;
            }
          }
        }

        .submit {
          cursor: pointer;
          color: ${theme.mainColors.darker};
          background-color: ${theme.mainColors.ligthest};
          padding: 6px;
        }
      }
    }
  `;
};
