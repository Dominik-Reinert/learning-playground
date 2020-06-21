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

  const FiveFullStars = (props) => (
    <React.Fragment>
      {Array(5)
        .fill(0)
        .map(() => (
          <WebfontSolidIconComponent webfontIcon={WebfontIcon.STAR} />
        ))}
    </React.Fragment>
  );

  return (
    <div className="skills-root" css={skillsRootStyle}>
      <div className="ts-root">
        <div className="ts-title">Typescript</div>
        <div className="ts-stars">
          <FiveFullStars />
        </div>
      </div>
      <div className="layouter" css={skillsLayouterStyle}>
        <div className="oop-root">
          <div className="oop-title">OOP</div>
          <div className="oop-stars">
            <FiveFullStars />
          </div>
        </div>
        <div className="react-root">
          <div className="react-title">
            <BrandIconComponent brandIcon={BrandIcon.REACT} />
            <span>React</span>
          </div>
          <div className="react-stars">
            <FiveFullStars />
          </div>
        </div>
      </div>
    </div>
  );
};

const useSkillsRootStyle = () => {
  return css`
    label: skills-root;

    display: flex;
    flex-direction: column;
    text-align: center;
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
