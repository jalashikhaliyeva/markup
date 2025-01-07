import React from "react";
import Container from "../Container";
import NavigationTitle from "../NavigationTitle";
import { useTranslation } from "react-i18next";
import ShortDescription from "../ShortDescription";

function CustomersTitleIndex({ title }) {
  const { t } = useTranslation();
  return (
    <div className="bg-mainGray dark:bg-bgDarkGray pt-custom-space border-t-gradient">
      <Container>
        <NavigationTitle>{t("nav.clients")}</NavigationTitle>
        <ShortDescription desc={title} />
      </Container>
    </div>
  );
}

export default CustomersTitleIndex;
