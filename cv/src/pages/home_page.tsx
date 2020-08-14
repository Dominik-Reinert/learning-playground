import { Link } from "react-router-dom";
import { RouteURL } from "../router/router";

export const HomePageComponent = () => {
  return (
    <div>
      <div>
        <div>
          <Link to={`${RouteURL.CV}`}>CV</Link>
        </div>
        <div>
          <Link to={`${RouteURL.NEWSLETTER}`}>Newsletter</Link>
        </div>
      </div>
    </div>
  );
};
