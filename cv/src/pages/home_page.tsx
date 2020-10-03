import { css } from "@emotion/core";
import { Link } from "react-router-dom";
import { usePageBaseTheme } from "../hooks/use_page_base_theme";
import { RouteURL } from "../router/router";

export const HomePageComponent = () => {
  const homepageStyle = useHomepageStyle();
  return (
    <div css={homepageStyle}>
      <div className="links">
        <div className="link-wrapper">
          <Link to={`${RouteURL.CV}`}>Curriculum vitae</Link>
        </div>
        <div className="link-wrapper">
          <Link to={`${RouteURL.NEWSLETTER}`}>Newsletter</Link>
        </div>
      </div>
    </div>
  );
};

const useHomepageStyle = () => {
  const theme = usePageBaseTheme();
  return css`
    label: homepage;

    display: flex;
    flex-direction: column;

    .links {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }

    .link-wrapper {
      cursor: pointer;
      color: ${theme.mainColors.darker};
      background-color: ${theme.mainColors.ligthest};
      padding: 6px;
      margin: 18px;

      a {
        text-decoration: none;
        color: ${theme.mainColors.darker};
      }
    }
  `;
};
