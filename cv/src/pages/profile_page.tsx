import * as React from "react";
import { css, jsx } from "@emotion/core";
import { usePageBaseTheme } from "../hooks/use_page_base_theme";
import { ImageComponent } from "../image/image_component";
/** @jsx jsx */

interface ProfilePageComponentProps {}

export const ProfilePageComponent: React.FunctionComponent<React.PropsWithChildren<
  ProfilePageComponentProps
>> = (props: React.PropsWithChildren<ProfilePageComponentProps>) => {
  const style = useProfilePageComponentStyle();
  const profilePicStyle = useProfilePicStyle();

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
        <Header>About me:</Header>
        <Content>
          <ContentPart header="">
            I am an allround web developer. I am a senior programmer with good
            knowledge of front-end techniques. I love structure and order and I
            also stand for quality. I love spending time on fixing little
            details and optimizing web apps. Also I like working in a team,
            you'll learn faster and much more. As the saying goes: 'two heads
            are better than one'.
          </ContentPart>
        </Content>
      </Divider>
      <Divider>
        <ImageComponent src="20200226_183837-01.jpeg" css={profilePicStyle} />
      </Divider>
      <Divider>
        <Header>Details</Header>
        <Content>
          <ContentPart header="Name:">Dominik Reinert</ContentPart>
          <ContentPart header="Age:">27 years</ContentPart>
          <ContentPart header="Location:">
            Am Jungenwäldchen 8, 66663 Merzig
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
