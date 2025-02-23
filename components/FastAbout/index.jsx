import React from "react";
import NavigationTitle from "../NavigationTitle";
import NeonButton from "../NeonButton";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
function FastAbout({ aboutInfo }) {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <div className="rounded-3xl gap-14 bg-mainGray dark:bg-darkHeader py-custom-space px-5 flex flex-col justify-between w-full lg:w-[50%]">
      <p className="text-lg font-normal leading-6 text-textGray w-full lg:w-[400px]">
        {/* Biz kimik? Yaradıcılıq və innovasiyaya önəm verən bir komandayıq.
        Məqsədimiz, unikal və müştərilərimizin ehtiyaclarına uyğun həllər təqdim
        edərək mükəmməlliyə nail olmaqdır. */}

        {aboutInfo.description}
      </p>

      <div className="flex  flex-col md:flex-row items-center justify-between gap-5 lg:gap-0">
        <NavigationTitle>{t("nav.about")}</NavigationTitle>
        <NeonButton
          onClick={() => router.push("/about")}
          // onClick={() => alert("Button Clicked!")}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M16.0037 10.3842L7.39712 18.9908L5.98291 17.5766L14.5895 8.96997H7.00373V6.96997H18.0037V17.97H16.0037V10.3842Z"
                fill="currentColor"
              />
            </svg>
          }
        >
          {t("nav.about")}
        </NeonButton>
      </div>
    </div>
  );
}

export default FastAbout;
