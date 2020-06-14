import * as React from "react";
import { css, jsx } from "@emotion/core";
import { usePageBaseTheme } from "../hooks/use_page_base_theme";
/** @jsx jsx */

interface ProfilePageComponentProps {}

export const ProfilePageComponent: React.FunctionComponent<React.PropsWithChildren<
  ProfilePageComponentProps
>> = (props: React.PropsWithChildren<ProfilePageComponentProps>) => {
  const style = useProfilePageComponentStyle();

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
      <Divider>Here will be an awesome profile pic!</Divider>
      <Divider>
        <Header>Details</Header>
        <Content>
          <ContentPart header="Name:">Dominik Reinert</ContentPart>
          <ContentPart header="Age:">33 years</ContentPart>
          <ContentPart header="Location:">
            's-Hertogenbosch, The Netherlands, Earth
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
        color: ${theme.mainColors.normal};
        font-size: x-large;

        margin: 16px 8px;
      }

      &-content {
        color: ${theme.mainColors.ligther};
        font-size: normal;
      }
    }
  `;
};
