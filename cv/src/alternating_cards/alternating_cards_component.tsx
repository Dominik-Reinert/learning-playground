import { css } from "@emotion/core";
import * as React from "react";
import { Link } from "react-router-dom";
import { ButtonComponent } from "../button/button_component";
import { RouteURL } from "../router/router";

export interface AlternatingCardsComponentProps {
  cards: CardComponentProps[];
}

interface CardComponentProps {
  link: RouteURL;
  linkLabel: string;
  text: string;
  picture: string;
}

export const AlternatingCardsComponent = (
  props: AlternatingCardsComponentProps
) => {
  const style = useAlternatingCardsStyle();
  return (
    <div css={style}>
      {props.cards.map((card) => (
        <CardComponent key={card.link} {...card} />
      ))}
    </div>
  );
};

const useAlternatingCardsStyle = () => {
  return css`
    label: alternating-cards;
    flex-direction: column;

    display: flex;

    .card {
      height: 400px;

      margin: 40px;

      display: flex;
      flex: 12 0 0;
      flex-direction: row;
      justify-content: space-between;

      > * {
        margin: 40px;
      }

      &-content-wrapper {
        height: 100%;

        display: flex;
        flex: 12 0 0;
        flex-direction: column;
      }

      &-picture-wrapper {
        height: 100%;

        flex: 12 0 0;
        background-color: red;
      }

      &-text {
        flex: 12 0 0;
        padding: 24px;

        font-size: 20px;
        line-height: 32px;
        font-weight: bolder;
      }
    }

    .card:nth-of-type(even) {
      flex-direction: row-reverse;
    }
  `;
};

const CardComponent = (props: CardComponentProps) => {
  return (
    <div className="card">
      <div className="card-content-wrapper">
        <div className="card-text">{props.text}</div>
        <div className="card-link link-wrapper">
          <ButtonComponent label='go to newsletter' onClick={() => {}}  />
          <Link to={`${props.link}`}>{props.linkLabel}</Link>
        </div>
      </div>
      <div className="card-picture-wrapper">
        <img src={props.picture} />
      </div>
    </div>
  );
};
