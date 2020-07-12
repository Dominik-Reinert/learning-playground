import * as React from "react";
import { useTranslation } from "react-i18next";
import { CardComponent } from "../card/card_component";
import { CompanyComponentProps } from "../company/company_component";

interface VerticalTimelineProps {
  children: React.FunctionComponentElement<CompanyComponentProps>;
}

export const VerticalTimelineComponent: React.FunctionComponent<VerticalTimelineProps> = (
  props: VerticalTimelineProps
) => {
  const { t } = useTranslation();
  return (
    <CardComponent
      headerProps={{
        title: t("timeline"),
      }}
    >
      {props.children}
    </CardComponent>
  );
};
