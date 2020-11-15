import { css } from "@emotion/core";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { usePageBaseTheme } from "../hooks/use_page_base_theme";
import { ImageComponent } from "../image/image_component";
import { useHeaderStyle } from "../shared_styles/shared_styles";

interface ProfilePageComponentProps {}

export const CvProfileSubpageComponent: React.FunctionComponent<React.PropsWithChildren<
  ProfilePageComponentProps
>> = (props: React.PropsWithChildren<ProfilePageComponentProps>) => {
  const style = useProfilePageComponentStyle();
  const profilePicStyle = useProfilePicStyle();
  const { t, i18n } = useTranslation();

  const Divider = (props) => (
    <div className="profile-page-divider">{props.children}</div>
  );

  const Header = (props) => (
    <div className="profile-page-header">{props.children}</div>
  );

  const Content = (props) => (
    <div className="profile-page-content">{props.children}</div>
  );

  const ContentPart = (props) => (
    <div className="profile-page-content-part">
      <div>{props.header}</div>
      <span>{props.children}</span>
    </div>
  );

  return (
    <div css={style}>
      <Divider>
        <Header>{t("aboutMeHeadline")}</Header>
        <Content>
          <ContentPart header="">{t("aboutMe")}</ContentPart>
        </Content>
      </Divider>
      <Divider>
        <ImageComponent src="" css={profilePicStyle} />
      </Divider>
      <Divider>
        <Header>{t("detailsHeadline")}</Header>
        <Content>
          <ContentPart header={t("nameHeadline")}>{t("name")}</ContentPart>
          <ContentPart header={t("ageHeadline")}>{t("age")}</ContentPart>
          <ContentPart header={t("locationHeadline")}>
            {t("location")}
          </ContentPart>
        </Content>
      </Divider>
    </div>
  );
};

export const useProfilePageComponentStyle = () => {
  const theme = usePageBaseTheme();
  const headerStyle = useHeaderStyle();
  return css`
    label: profile-page;

    display: flex;
    flexdirection: row;

    .profile-page {
      &-divider {
        flex: 1 0 0;
      }

      &-header {
        ${headerStyle}
      }

      &-content {
        color: black;
        font-size: normal;

        &-part {
          display: flex;
          flex-direction: column;

          margin-bottom 8px;
        }
      }
    }
  `;
};

const useProfilePicStyle = () => {
  const theme = usePageBaseTheme();
  return css`
    label: profile-pic;

    width: 100px;
    height: 100px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    border: 5px solid ${theme.grayscale.labelOnBackground};

    > img {
      display: inline;
      margin: 0 auto;
      margin-left: -25%; //centers the image
      height: 100%;
      width: auto;
    }
  `;
};
