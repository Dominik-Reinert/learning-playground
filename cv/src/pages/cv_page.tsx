import * as React from "react";
import { css, jsx } from "@emotion/core";
import { usePageBaseTheme } from "../hooks/use_page_base_theme";
import { useTranslation } from "react-i18next";
import { useHeaderStyle } from "../shared_styles/shared_styles";
/** @jsx jsx */

interface CvPageComponentProps {}

interface CvExperience {
  institute: string;
  date: {
    start: number;
    end: number;
  };
  headline: string;
  text?: string;
  location: string;
  locationWebsite?: string;
}

export const CvPageComponent: React.FunctionComponent<React.PropsWithChildren<
  CvPageComponentProps
>> = (props: React.PropsWithChildren<CvPageComponentProps>) => {
  const exampleExperience: CvExperience = {
    institute: "Grundschule 'Marienschule' Brotdorf",
    date: {
      start: 1999,
      end: 2000,
    },
    headline: "Grundschule",
    text: "Ein schöner Ort für die grundsätzliche Sozialisierung kleiner Wesen",
    location: "Brotdorf",
    locationWebsite: "http://www.gs-brotdorf.de/",
  };

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
    <div key={`experience-${index}-${institute}`}>
      <b className="cv-institute">{institute}</b>
      <div className="cv-date">
        <span>{date.start}</span>-<span>{date.end}</span>
      </div>
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
  );

  const cvPageStyle = useCvPageStyle();

  return (
    <div css={cvPageStyle}>
      <Header title="Schulische Laufbahn" />
      <Experience {...exampleExperience} />
    </div>
  );
};

const useCvPageStyle = () => {
  const theme = usePageBaseTheme();
  const headerStyle = useHeaderStyle();
  return css`
    label: cv-page;

    .cv {
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
