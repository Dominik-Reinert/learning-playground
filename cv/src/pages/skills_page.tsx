import * as React from "react";
import { css, jsx } from "@emotion/core";
import { usePageBaseTheme } from "../hooks/use_page_base_theme";
import { ImageComponent } from "../image/image_component";
import { useTranslation } from "react-i18next";
import { useHeaderStyle } from "../shared_styles/shared_styles";
import {
  WebfontIcon,
  WebfontSolidIconComponent,
  WebfontRegularIconComponent,
} from "../webfont_icon/webfont_icon";
import { BrandIconComponent, BrandIcon } from "../webfont_icon/brand_icon";
/** @jsx jsx */

interface SkillsPageComponentProps {}

export const SkillsPageComponent: React.FunctionComponent<React.PropsWithChildren<
  SkillsPageComponentProps
>> = (props: React.PropsWithChildren<SkillsPageComponentProps>) => {
  const { t, i18n } = useTranslation();
  const skillsRootStyle = useSkillsRootStyle();
  const skillsListStyle = useSkillsListStyle();
  const skillsLayouterStyle = useLayouterStyle();

  const Stars = (props) => <div className="stars">{props.children}</div>;

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

  const TopTechnology = (props: { name: string; icon?: BrandIcon }) => (
    <div className={`${props.name.toLowerCase()}-root`}>
      <SkillTitle>
        {props.icon && <BrandIconComponent brandIcon={props.icon} />}
        <Technology>{props.name}</Technology>
      </SkillTitle>
      <Stars>
        <FiveFullStars keyAddendum={`${props.name.toLowerCase()}`} />
      </Stars>
    </div>
  );

  const Skill = (props: { name: string; stars: number }) => (
    <div className="skill" css={skillsListStyle}>
      <SkillTitle>{props.name}</SkillTitle>
      {Array(props.stars)
        .fill(0)
        .map((item, idx) => (
          <WebfontSolidIconComponent
            key={`${idx}-star-${props.name}`}
            webfontIcon={WebfontIcon.STAR}
          />
        ))}
      {Array(5 - props.stars)
        .fill(0)
        .map((item, idx) => (
          <WebfontRegularIconComponent
            key={`${idx}-star-${props.name}`}
            webfontIcon={WebfontIcon.STAR}
          />
        ))}
    </div>
  );

  return (
    <div className="skills-root" css={skillsRootStyle}>
      <div className="top-skills">
        <TopTechnology name="Typescript" />
        <div className="layouter" css={skillsLayouterStyle}>
          <TopTechnology name="OOP" />
          <TopTechnology name="React" icon={BrandIcon.REACT} />
        </div>
      </div>
      <div className="skills-list">
        <Skill name="Skill a" stars={3} />
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

    .fa-star {
      margin-left: 4px;
    }

    .technology {
      font-weight: bold;
      font-size: x-large;
    }

    .stars {
      margin-top: 8px;
      color: ${theme.mainColors.ligther};
    }

    .top-skills {
      margin-bottom: 40px;
    }
  `;
};

const useSkillsListStyle = () => {
  const theme = usePageBaseTheme();
  return css`
    label: skills-list;

    display: flex;

    .skill-title {
      font-size: larger;
      flex: 12 0 0;
      text-align: left;
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
