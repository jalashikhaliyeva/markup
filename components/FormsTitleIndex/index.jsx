import React from "react";
import Container from "../Container";
import NavigationTitle from "../NavigationTitle";
import { useTranslation } from "react-i18next";
import ShortDescription from "../ShortDescription";
function FormsTitleIndex({ title }) {
  const { t } = useTranslation();
  return (
    <div className="bg-mainGray dark:bg-bgDarkGray pt-custom-space">
      <Container>
        <NavigationTitle>{t("nav.forums")}</NavigationTitle>
        <ShortDescription desc={title} />
      </Container>
    </div>
  );
}

export default FormsTitleIndex;
