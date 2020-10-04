import * as React from "react";
import { useParams } from "react-router-dom";

export const NewsletterVerificationPageComponent = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState<boolean>(true);
  const [errorMsg, setErrorMsg] = React.useState<string>(undefined);
  fetch(`http://localhost:3001/api/newsletter/verify/${id}`, {
    method: "POST",
  })
    .then((res) => res.json())
    .then((res) => {
      setLoading(false);
      setErrorMsg(res.body.error);
    });

  return (
    <div>
      <div>Subscribed with id {id}</div>
    </div>
  );
};
