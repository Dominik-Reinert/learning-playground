import * as React from "react";
import { useParams } from "react-router-dom";

export const NewsletterVerificationPageComponent = () => {
  const { id } = useParams();
  return (
    <div>
      <div>Subscribed with id {id}</div>
    </div>
  );
};
