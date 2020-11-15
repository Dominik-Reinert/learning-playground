import { css } from "@emotion/core";
import * as React from "react";
import { usePageBaseTheme } from "../hooks/use_page_base_theme";
import { Callback } from "../manual_typings/generic_types";

interface SubPageComponentProps {
  headline: string;
  quote: string;
  quoteAuthor?: string;
  colorBackground?: boolean;

  anchorId: string;
  onBecomeBiggestElement: Callback<string>;
}

export const SubPageComponent: React.FunctionComponent<React.PropsWithChildren<
  SubPageComponentProps
>> = (props: React.PropsWithChildren<SubPageComponentProps>) => {
  const subPageStyle = useSubPageStyle(props.colorBackground);
  const heightRefElement = React.useRef<HTMLDivElement>(undefined);
  const handleScroll = React.useCallback(() => {
    /* credits to https://bit.ly/3eopcu5 */
    const elementHeight: number = heightRefElement.current.offsetHeight;
    const {
      top: elementTop,
      bottom: elementBottom,
    } = heightRefElement.current.getBoundingClientRect();
    const windowHeight: number = window.innerHeight;
    const pxInViewport = Math.max(
      0,
      elementTop > 0
        ? Math.min(elementHeight, windowHeight - elementTop)
        : elementBottom < windowHeight
        ? elementBottom
        : windowHeight
    );
    if (pxInViewport > windowHeight / 2) {
      props.onBecomeBiggestElement(props.anchorId);
    }
  }, []);
  React.useEffect(() => {
    if (heightRefElement.current) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [heightRefElement.current]);
  return (
    <React.Fragment>
      <span id={props.anchorId} />
      <div css={subPageStyle} ref={heightRefElement}>
        <div className="spacer" />
        <div className="content">
          <div className="header">
            <h1>{props.headline}</h1>
            <p className="quote">"{props.quote}"</p>
            {props.quoteAuthor && (
              <p className="quote-author">{props.quoteAuthor}</p>
            )}
          </div>
          <div className="body">{props.children}</div>
        </div>
        <div className="spacer" />
      </div>
    </React.Fragment>
  );
};

const useSubPageStyle = (colorBackground?: boolean) => {
  const theme = usePageBaseTheme();
  return css`
    label: subpage-style;

    display: flex;

    background-color: ${theme.grayscale.background};

    min-height: 80vh;
    width: 100%;

    .spacer {
      flex: 12 0 0;
    }

    .content {
      flex: 24 0 0;

      .header {
        text-align: center;

        border-bottom: 1px solid ${theme.grayscale.borderOnBackground};

        margin-bottom: 24px;

        h1 {
          color: ${theme.colors.normal};
          font-size: ${theme.fonts.headline.size};
          font-weight: ${theme.fonts.headline.weight};
        }

        p {
          font-size: ${theme.fonts.subHeadline.size};
          font-weight: ${theme.fonts.subHeadline.weight};
          color: ${theme.grayscale.labelOnBackground};

          &.quote {
            font-style: italic;
          }

          &.quote-author {
            text-align: right;
            font-size: large;
          }
        }
      }
    }
  `;
};
