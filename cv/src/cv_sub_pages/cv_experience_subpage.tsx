import { css } from "@emotion/core";
import * as React from "react";
import { jobExperience, scholaryExperience } from "../data/cv_data";
import { usePageBaseTheme } from "../hooks/use_page_base_theme";
import { useHeaderStyle } from "../shared_styles/shared_styles";
import { CvExperience } from "./cv_experience";

interface ExperienceSubPageComponentProps {}

export const CvExperienceSubPageComponent: React.FunctionComponent<React.PropsWithChildren<
  ExperienceSubPageComponentProps
>> = (props: React.PropsWithChildren<ExperienceSubPageComponentProps>) => {
  const Header = ({ title }: { title: string }) => (
    <div className="experience-subheader">{title}</div>
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
    <div key={`experience-${index}-${institute}`} className="experience-entry">
      <div className="experience-left">
        <div className="experience-institute">{institute}</div>
        <div className="experience-date">
          <span>{date.start}</span>-<span>{date.end}</span>
        </div>
      </div>
      <div className="experience-right">
        <div className="experience-headline">{headline}</div>
        {text && <div className="experience-text">{text}</div>}
        <div className="experience-location">
          {location}
          {locationWebsite && (
            <a
              className="experience-location-website"
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
          <Experience key={experience.headline} {...experience} />
        ))}
      <Header title="Berufserfahrung" />
      {jobExperience
        .sort(
          /* TODO: check localization to turn around order for english */
          (experienceA, experienceB) => experienceA.order - experienceB.order
        )
        .map((experience) => (
          <Experience key={experience.headline} {...experience} />
        ))}
    </div>
  );
};

const useCvPageStyle = () => {
  const theme = usePageBaseTheme();
  const headerStyle = useHeaderStyle();
  return css`
    label: experience-page;

    @media only screen and (max-width: 1000px) {
      .experience {
        &-entry {
          flex-direction: column;
        }

        &-left {
          border-bottom: 1px solid ${theme.grayscale.borderOnBackground};
          margin-bottom: 25px;
        }
      }
    }

    .experience {
      &-entry {
        margin-bottom: 80px;

        display: flex;
      }

      &-left {
        display: flex;
        flex-direction: column;
        flex: 8 0 0;
      }

      &-right {
        flex: 12 0 0;
      }

      &-subheader {
        ${headerStyle}

        &:not(:first-of-type) {
          margin: 8px 8px 16px;
          padding: 72px 0 0 0;
          border-top: 1px solid ${theme.grayscale.borderOnBackground};
        }
      }

      &-institute {
        color: ${theme.grayscale.labelOnBackground};
        font-size: ${theme.fonts.subHeadline.size};
        font-weight: ${theme.fonts.subHeadline.weight};
        margin: 0 8px 8px;
        float: left;
      }

      &-date {
        color: ${theme.grayscale.labelOnBackground};
        font-size: ${theme.fonts.additionalInfo.size};
        font-weight: ${theme.fonts.additionalInfo.weight};
        margin: 8px 8px 16px;
      }

      &-headline {
        color: ${theme.grayscale.labelOnBackground};
        font-size: ${theme.fonts.subHeadline.size};
        font-weight: ${theme.fonts.subHeadline.weight};
        margin: 8px;
      }

      &-text {
        margin: 8px 8px 16px;
        color: ${theme.grayscale.labelOnBackground};
        font-size: ${theme.fonts.normal.size};
        font-weight: ${theme.fonts.normal.weight};
      }

      &-location {
        margin: 8px 8px 16px;
        color: ${theme.grayscale.labelOnBackground};
        white-space: nowrap;

        font-size: ${theme.fonts.additionalInfo.size};
        font-weight: ${theme.fonts.additionalInfo.weight};

        &-website {
          margin-left: 8px;
          padding-left: 8px;

          border-left: 1px solid ${theme.grayscale.borderOnBackground};
        }
      }
    }
  `;
};
