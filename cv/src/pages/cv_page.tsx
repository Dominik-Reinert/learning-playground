import * as React from "react";
import { css, jsx } from "@emotion/core";
import { usePageBaseTheme } from "../hooks/use_page_base_theme";
import { useTranslation } from "react-i18next";
import { useHeaderStyle } from "../shared_styles/shared_styles";
import { CvExperience } from "./cv_experience";
import { scholaryExperience } from "../data/cv_data";
/** @jsx jsx */

interface CvPageComponentProps {}

export const CvPageComponent: React.FunctionComponent<React.PropsWithChildren<
  CvPageComponentProps
>> = (props: React.PropsWithChildren<CvPageComponentProps>) => {
  const Header = ({ title }: { title: string }) => (
    <div className="cv-header">{title}</div>
  );

  const Experience = (
    {
      institute,
      date,
      headline,
      text,
      location,
      locationWebsite,
    }: CvExperience,
    index: number
  ) => (
    <div key={`experience-${index}-${institute}`} className="cv-entry">
      <div className="cv-left">
        <b className="cv-institute">{institute}</b>
        <div className="cv-date">
          <span>{date.start}</span>-<span>{date.end}</span>
        </div>
      </div>
      <div className="cv-right">
        <b className="cv-headline">{headline}</b>
        {text && <div className="cv-text">{text}</div>}
        <div className="cv-location">
          {location}
          {locationWebsite && (
            <a
              className="cv-location-website"
              href={locationWebsite}
              target="_blank"
            >
              {locationWebsite}
            </a>
          )}
        </div>
      </div>
    </div>
  );

  const cvPageStyle = useCvPageStyle();

  return (
    <div css={cvPageStyle}>
      <Header title="Schulische Laufbahn" />
      {scholaryExperience
        .sort(
          /* TODO: check localization to turn around order for english */
          (experienceA, experienceB) => experienceA.order - experienceB.order
        )
        .map((experience) => (
          <Experience {...experience} />
        ))}
    </div>
  );
};

const useCvPageStyle = () => {
  const theme = usePageBaseTheme();
  const headerStyle = useHeaderStyle();
  return css`
    label: cv-page;

    .cv {
      &-entry {
        margin-bottom: 80px;

        display: flex;
      }

      &-left {
        flex: 8 0 0;
      }

      &-right {
        flex: 12 0 0;
      }

      &-header {
        ${headerStyle}
      }

      &-institute {
        font-size: large;
        margin: 8px;
      }

      &-date {
        margin: 8px 8px 16px;
      }

      &-headline {
        font-size: normal;
        margin: 8px;
      }

      &-text {
        margin: 8px 8px 16px;
      }

      &-location {
        margin: 8px 8px 16px;
        color: ${theme.mainColors.ligther};

        &-website {
          margin-left: 8px;
          padding-left: 8px;

          border-left: 1px solid ${theme.mainColors.ligther};
        }
      }
    }
  `;
};
