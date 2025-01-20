import React from "react";
import { useTranslation } from "react-i18next";

function TeamTitle() {
   const { t } = useTranslation();
  return (
    <h4 className="text-black dark:text-white font-medium leading-10 md:leading-83 flex items-center justify-center text-4xl md:text-title pb-custom-space ">
      {t("nav.team")}
    </h4>
  );
}

export default TeamTitle;
