import React from "react";
import Container from "../Container";
import NavigationTitle from "../NavigationTitle";
import { useTranslation } from "react-i18next";

function CustomersTitleIndex() {
  const { t } = useTranslation();
  return (
    <div className="bg-mainGray dark:bg-bgDarkGray pt-custom-space border-t-gradient">
      <Container>
        <NavigationTitle>{t("nav.clients")}</NavigationTitle>
        <p className="text-textGray text-lg leading-6 pt-5 lg:pt-0">
          Böyük ideyalar, güclü tərəfdaşlıqlar
        </p>
      </Container>
    </div>
  );
}

export default CustomersTitleIndex;
