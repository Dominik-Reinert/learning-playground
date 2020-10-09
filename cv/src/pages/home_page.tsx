import { css } from "@emotion/core";
import { AlternatingCardsComponent } from "../alternating_cards/alternating_cards_component";
import { usePageBaseTheme } from "../hooks/use_page_base_theme";
import { PageFooter } from "../page_footer/page_footer";
import { RouteURL } from "../router/router";

export const HomePageComponent = () => {
  const homepageStyle = useHomepageStyle();
  return (
    <div css={homepageStyle}>
      <AlternatingCardsComponent
        cards={[
          {
            link: RouteURL.NEWSLETTER,
            linkLabel: "Newsletter",
            picture: "public/20200226_183837-01.jpeg",
            text:
              "Check out my awesome newsletter with info on reomte work across europe!",
          },
          {
            link: RouteURL.CV,
            linkLabel: "Curriculum vitae",
            picture: "public/tab-cv-bg.jpg",
            text: "Check out my my curriculum vitae to get to know me better!",
          },
        ]}
      />
      <PageFooter />
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
      text-align: center;

      a {
        text-decoration: none;
        color: ${theme.mainColors.darker};
      }
    }
  `;
};
