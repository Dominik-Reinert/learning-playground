import * as React from "react";
import { css, jsx } from "@emotion/core";
import { usePageBaseTheme } from "../hooks/use_page_base_theme";
import { ImageComponent } from "../image/image_component";
import { useTranslation } from "react-i18next";
import { useHeaderStyle } from "../shared_styles/shared_styles";
import {
  WebfontIcon,
  WebfontSolidIconComponent,
} from "../webfont_icon/webfont_icon";
import { BrandIconComponent, BrandIcon } from "../webfont_icon/brand_icon";
/** @jsx jsx */

interface SkillsPageComponentProps {}

export const SkillsPageComponent: React.FunctionComponent<React.PropsWithChildren<
  SkillsPageComponentProps
>> = (props: React.PropsWithChildren<SkillsPageComponentProps>) => {
  const { t, i18n } = useTranslation();
  const skillsRootStyle = useSkillsRootStyle();
  const skillsLayouterStyle = useLayouterStyle();

  const FiveFullStars = (props: { keyAddendum: string }) => (
    <React.Fragment>
      {Array(5)
        .fill(0)
        .map((item, idx) => (
          <WebfontSolidIconComponent
            key={`${idx}-star-${props.keyAddendum}`}
            webfontIcon={WebfontIcon.STAR}
          />
        ))}
    </React.Fragment>
  );

  const SkillTitle = (props) => (
    <div className="skill-title">{props.children}</div>
  );
  const Technology = (props) => (
    <span className="technology">{props.children}</span>
  );

  return (
    <div className="skills-root" css={skillsRootStyle}>
      <div className="ts-root">
        <SkillTitle>
          <Technology>Typescript</Technology>
        </SkillTitle>
        <div className="stars">
          <FiveFullStars keyAddendum="typescript" />
        </div>
      </div>
      <div className="layouter" css={skillsLayouterStyle}>
        <div className="oop-root">
          <SkillTitle>
            <Technology>OOP</Technology>
          </SkillTitle>
          <div className="stars">
            <FiveFullStars keyAddendum="oop" />
          </div>
        </div>
        <div className="react-root">
          <SkillTitle>
            <BrandIconComponent brandIcon={BrandIcon.REACT} />
            <Technology>React</Technology>
          </SkillTitle>
          <div className="stars">
            <FiveFullStars keyAddendum="react" />
          </div>
        </div>
      </div>
    </div>
  );
};

const useSkillsRootStyle = () => {
  const theme = usePageBaseTheme();
  return css`
    label: skills-root;

    display: flex;
    flex-direction: column;
    text-align: center;

    .technology {
      font-weight: bold;
      font-size: x-large;

      color: ${theme.mainColors.ligther};
    }
  `;
};

const useLayouterStyle = () => {
  return css`
    label: skills-layouter;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media only screen and (max-width: 1000px) {
      flex-direction: column;
    }
  `;
};
