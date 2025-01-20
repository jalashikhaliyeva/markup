// components/Faq.js

import React, { useRef } from "react";
import FaqTitle from "../FaqTitle";
import FaQuestions from "../FaqItem";
import { useTranslation } from "react-i18next";

function Faq({ data }) {
    const { t } = useTranslation();
  const faqRef = useRef(null);

  // Ensure data is an array
  const faqs = Array.isArray(data) ? data : [];

  return (
    <div className="flex flex-col gap-14">
      {/* Optional: Uncomment if FaqTitle is needed */}
      {/* <FaqTitle /> */}
      <div className="mx-auto rounded-xl ">
        <h2 className="text-black dark:text-white pt-custom-space font-medium leading-83 flex items-center justify-center text-sliderTitle ">
          Agency Questions
          {t("faq-title")}
        </h2>
        <p className="text-lg leading-6 flex items-center justify-center text-textGray400 pb-custom-space ">
        
          {t("faq-desc")}
        </p>
        {/* Pass dynamic faqs to FaQuestions */}
        <FaQuestions faqs={faqs} />
      </div>
    </div>
  );
}

export default Faq;
