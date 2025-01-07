import Image from "next/image";
import React, { useState } from "react";
import NeonButton from "../NeonButton";
import { useTranslation } from "react-i18next";
import ContactForm from "../ContactForm";
import FastContactModal from "../FastContactModal";
function ContactBanner() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => setIsModalOpen(true);

  // Function to close the modal
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="flex gap-10 bg-mainGray dark:bg-cardBgDark rounded-2xl mt-custom-space p-5">
      <Image
        src="/contact-banner/image1.png"
        width={384}
        height={238}
        alt="contact-banner"
        className="hidden lg:flex"
      />

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl md:text-36  font-medium leading-10 dark:text-white">
            Ideanızı birlikdə reallaşdıraq
          </h3>
          <p className="text-sm md:text-base font-normal dark:text-white ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
          </p>
        </div>

        <div className="flex-col md:flex-row flex  gap-2 pt-custom-space">
          <NeonButton
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
            onClick={openModal}
          >
            {t("nav.contact")}
          </NeonButton>
          <button className="py-3 px-4 text-center flex justify-center rounded-xl border border-neutralBlack bg-neutralBlack text-white dark:border-white text-lg leading-6 items-center gap-2 hover:bg-neutralBlack hover:text-white dark:text-white transition-colors duration-300 group">
            Whatsappa keçid
            <span className="transform transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1 group-hover:-translate-y-0.5">
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
            </span>
          </button>
        </div>
      </div>
      {/* Conditionally render the ContactForm modal */}
      {isModalOpen && <FastContactModal onClose={closeModal} />}
    </div>
  );
}

export default ContactBanner;
