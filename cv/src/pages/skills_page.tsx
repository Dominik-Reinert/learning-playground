import * as React from "react";
import { css, jsx } from "@emotion/core";
import { usePageBaseTheme } from "../hooks/use_page_base_theme";
import { ImageComponent } from "../image/image_component";
import { useTranslation } from "react-i18next";
import { useHeaderStyle } from "../shared_styles/shared_styles";
/** @jsx jsx */

interface SkillsPageComponentProps {}

export const SkillsPageComponent: React.FunctionComponent<React.PropsWithChildren<
  SkillsPageComponentProps
>> = (props: React.PropsWithChildren<SkillsPageComponentProps>) => {
  const { t, i18n } = useTranslation();
  const skillsRootStyle = useSkillsRootStyle();
  const skillsLayouterStyle = useLayouterStyle();

  return (
    <div className="skills-root" css={skillsRootStyle}>
      <div className="ts-root">
        <div className="ts-title">Typescript</div>
        <div className="ts-stars">TS Stars</div>
      </div>
      <div className="layouter" css={skillsLayouterStyle}>
        <div className="oop-root">
          <div className="oop-title">OOP</div>
          <div className="oop-stars">OOP Stars</div>
        </div>
        <div className="react-root">
          <div className="react-title">React</div>
          <div className="react-stars">React Stars</div>
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
