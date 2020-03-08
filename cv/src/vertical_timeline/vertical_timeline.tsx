import * as React from "react";
import { CompanyComponentProps } from "../company/company_component";
import { CardComponent } from "../card/card_component";
import { useTranslation } from "react-i18next";

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
        title: t("timeline")
      }}
    >
      {props.children}
    </CardComponent>
  );
};
