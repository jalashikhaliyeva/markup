import { postContactForm } from "@/services/postContactForm";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
    const { t } = useTranslation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // State to store form errors
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple client-side validation
    const newErrors = {};

    if (!firstName.trim()) {
      newErrors.firstName = `${t('firstNameRequired')}`;
    }
    if (!lastName.trim()) {
      newErrors.lastName = `${t('lastNameRequired')}`;
    }
    if (!subject.trim()) {
      newErrors.subject = `${t('subjectRequired')}`;
    }
    if (!message.trim()) {
      newErrors.message = `${t('messageRequired')}`;
    }

    // If there are errors, set them and don't submit
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Otherwise, clear any existing errors
    setErrors({});

    try {
      // Call your service
      await postContactForm({
        firstName,
        lastName,
        subject,
        message,
      });

      // Show success toast
      toast.success("Form successfully submitted!");

      // Reset form
      setFirstName("");
      setLastName("");
      setSubject("");
      setMessage("");
    } catch (error) {
      toast.error("Error submitting form, please try again.");
    }
  };

  return (
    <div className="bg-white dark:bg-bgHoverCategory shadow-md p-12 rounded-2xl w-full lg:w-[40%]">
      <ToastContainer />

      <h3 className="text-black dark:text-white font-bold text-2xl leading-8 pb-4">
 
        {t("contact-form.title")}
      </h3>
      <p className="text-darkGray dark:text-white text-base font-normal leading-6 pb-6">
      {t("contact-form.desc")}
      </p>

      <form
        className="space-y-6 dark:bg-bgHoverCategory"
        onSubmit={handleSubmit}
      >
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-normal text-black dark:text-white mb-2"
            >
            {t('firstName')}
            </label>
            <input
              type="text"
              id="firstName"
              placeholder={t('yourName')}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={`w-full p-3 border rounded-md shadow-sm transition duration-300
                ${
                  errors.firstName
                    ? "border-red-500"
                    : "border-gray-200 dark:bg-bgHoverCategory"
                }
                focus:ring-gray-500 focus:border-gray-500
                hover:bg-gray-100 hover:border-gray-300
              `}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-normal dark:text-white text-black mb-2"
            >
             {t('lastName')}
            </label>
            <input
              type="text"
              id="lastName"
              placeholder={t('yourLastName')}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={`w-full p-3 border rounded-md shadow-sm transition duration-300
                ${
                  errors.lastName
                    ? "border-red-500"
                    : "border-gray-200 dark:bg-bgHoverCategory"
                }
                focus:ring-gray-500 focus:border-gray-500
                hover:bg-gray-100 hover:border-gray-300
              `}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>

        {/* Subject Field */}
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-normal dark:text-white text-black mb-2"
          >
          {t('subject')}
          </label>
          <input
            type="text"
            id="subject"
            placeholder={t('enterSubject')}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className={`w-full p-3 border rounded-md shadow-sm transition duration-300
              ${
                errors.subject
                  ? "border-red-500"
                  : "border-gray-200 dark:bg-bgHoverCategory"
              }
              focus:ring-gray-500 focus:border-gray-500
              hover:bg-gray-100 hover:border-gray-300
            `}
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-normal dark:text-white text-black mb-2"
          >
           {t('message')}
          </label>
          <textarea
            id="message"
            rows="4"
            placeholder={t('tellUsAboutYourProject')}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`w-full p-3 border rounded-md shadow-sm transition duration-300
              ${
                errors.message
                  ? "border-red-500"
                  : "border-gray-200 dark:bg-bgHoverCategory"
              }
              focus:ring-gray-500 focus:border-gray-500
              hover:bg-gray-100 hover:border-gray-300
            `}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="self-start bg-black dark:bg-white text-white dark:text-black px-4 py-3 
                       hover:bg-blackButtonHover transition duration-300 
                       rounded-2xl flex items-center gap-2 text-xl leading-6 font-medium group"
          >
            {t('send')}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              className="transform transition-transform duration-300 
                         group-hover:rotate-45 group-hover:translate-x-1 
                         group-hover:translate-y-[-2px]"
            >
              <path
                d="M16.0037 10.3842L7.39712 18.9908L5.98291 17.5766L14.5895 8.96997H7.00373V6.96997H18.0037V17.97H16.0037V10.3842Z"
                className="fill-white dark:fill-black"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
