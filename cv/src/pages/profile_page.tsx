import * as React from "react";
import { css, jsx } from "@emotion/core";
import { usePageBaseTheme } from "../hooks/use_page_base_theme";
import { ImageComponent } from "../image/image_component";
import { useTranslation } from "react-i18next";
/** @jsx jsx */

interface ProfilePageComponentProps {}

export const ProfilePageComponent: React.FunctionComponent<React.PropsWithChildren<
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
      <b>{props.header}</b>
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
        <ImageComponent src="20200226_183837-01.jpeg" css={profilePicStyle} />
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
  return css`
    label: profile-page;

    display: flex;
    flexdirection: row;

    .profile-page {
      &-divider {
        flex: 1 0 0;
      }

      &-header {
        color: ${theme.mainColors.ligther};
        font-size: x-large;

        margin: 16px 8px;
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
    border: 5px solid ${theme.mainColors.ligther};

    > img {
      display: inline;
      margin: 0 auto;
      margin-left: -25%; //centers the image
      height: 100%;
      width: auto;
    }
  `;
};
