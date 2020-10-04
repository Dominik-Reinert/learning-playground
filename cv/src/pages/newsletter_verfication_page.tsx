import * as React from "react";
import { useParams } from "react-router-dom";
import { BackButtonComponent } from "../back_button/back_button_component";
import { PageFooter } from "../page_footer/page_footer";
import { RouteURL } from "../router/router";

export const NewsletterVerificationPageComponent = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState<boolean>(true);
  const [errorMsg, setErrorMsg] = React.useState<string>(undefined);
  React.useEffect(() => {
    fetch(`http://localhost:3001/api/newsletter/verify/${id}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setErrorMsg(res.body.error);
      });
  }, []);

  return (
    <div>
      <BackButtonComponent backLink={RouteURL.HOME} />
      <div>Subscribed with id {id}</div>
      {errorMsg && <div>Error {errorMsg}</div>}
      <PageFooter />
    </div>
  );
};
