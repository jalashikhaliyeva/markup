import { postContactForm } from "@/services/postContactForm";
import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FastContactModal({ onClose }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // State to store form errors
  const [errors, setErrors] = useState({});

  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple client-side validation
    const newErrors = {};

    if (!firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    // if (!message.trim()) {
    //   newErrors.message = "Message is required";
    // }

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

  // Close modal when clicking outside the modal content
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4" // Added padding for smaller screens
      onClick={handleOverlayClick}
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      <div
        className="relative bg-white dark:bg-bgHoverCategory shadow-lg p-6 md:p-8 rounded-2xl w-full max-w-lg mx-4 
                   max-h-[90vh] overflow-y-auto" // Set max-height and enable scrolling
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 focus:outline-none"
          aria-label="Close Modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <ToastContainer />

        <h3 id="modal-title" className="text-black dark:text-white font-bold text-xl md:text-2xl leading-6 md:leading-8 pb-4">
          Request A Quote — let’s work together.
        </h3>
        <p className="text-darkGray dark:text-white text-sm md:text-base font-normal leading-5 md:leading-6 pb-6">
          Got a project? Drop me a line if you want to work together on something exciting. Or do you need our help? Feel free to contact us.
        </p>

        <form className="space-y-4 md:space-y-6 dark:bg-bgHoverCategory" onSubmit={handleSubmit}>
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-normal text-black dark:text-white mb-1 md:mb-2">
                First name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={`w-full p-2 md:p-3 border rounded-md shadow-sm transition duration-300
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
                <p className="text-red-500 text-xs md:text-sm mt-1">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-normal dark:text-white text-black mb-1 md:mb-2">
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={`w-full p-2 md:p-3 border rounded-md shadow-sm transition duration-300
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
                <p className="text-red-500 text-xs md:text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="block text-sm font-normal dark:text-white text-black mb-1 md:mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Enter a subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className={`w-full p-2 md:p-3 border rounded-md shadow-sm transition duration-300
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
              <p className="text-red-500 text-xs md:text-sm mt-1">{errors.subject}</p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-normal dark:text-white text-black mb-1 md:mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Tell us about your project..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`w-full p-2 md:p-3 border rounded-md shadow-sm transition duration-300
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
              <p className="text-red-500 text-xs md:text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="self-start bg-black dark:bg-white text-white dark:text-black px-3 md:px-4 py-2 md:py-3 
                         hover:bg-blackButtonHover transition duration-300 
                         rounded-2xl flex items-center gap-2 text-base md:text-xl leading-5 md:leading-6 font-medium group"
            >
              Göndər
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
    </div>
  );
}

export default FastContactModal;
