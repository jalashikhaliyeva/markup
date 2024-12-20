import React from "react";
import NavigationTitle from "../NavigationTitle";
import NeonButton from "../NeonButton";

function FastContact() {
  return (
    <div className="bg-contactPurple dark:bg-darkPurple py-custom-space px-5 flex flex-col gap-14 lg:gap-28 justify-between rounded-3xl w-full lg:w-[50%]">
      <p className="text-lg font-normal leading-6 text-textGray w-full lg:w-[400px]">
        Sualınız var və ya dəstəyə ehtiyacınız var? Bizimlə istənilən vaxt əlaqə
        saxlayın! Komandamız bütün suallarınızı cavablandırmaq və sizə dəstək
        olmaq üçün buradadır
      </p>

      <div className="flex flex-col md:flex-row items-center justify-between gap-5 lg:gap-0">
        <NavigationTitle>Bizimlə əlaqə</NavigationTitle>
        <NeonButton
          onClick={() => alert("Button Clicked!")}
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
          Bizimlə əlaqə
        </NeonButton>
      </div>
    </div>
  );
}

export default FastContact;
