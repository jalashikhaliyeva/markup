import React from "react";
import Container from "../Container";

function ContactForm() {
  return (
    <div className="bg-white  dark:bg-bgHoverCategory  shadow-md p-12 rounded-2xl w-full lg:w-[40%]">
      <h3 className="text-black dark:text-white font-bold text-2xl leading-8 pb-4">
        Request A Quote — let’s work together.
      </h3>
      <p className="text-darkGray dark:text-white text-base font-normal leading-6 pb-6">
        Got a project? Drop me a line if you want to work together on something
        exciting. Or do you need our help? Feel free to contact us.
      </p>

      <form className="space-y-6  dark:bg-bgHoverCategory ">
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-normal text-black dark:text-white mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="Full name"
              className="w-full p-3 border border-gray-200  dark:bg-bgHoverCategory   rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 hover:bg-gray-100 hover:border-gray-300 transition duration-300"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-normal dark:text-white text-black mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Full name"
              className="w-full p-3 border  dark:bg-bgHoverCategory  border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition duration-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500"
            />
          </div>
        </div>

        {/* Subject Field */}
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-normal dark:text-white text-black mb-2"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            placeholder="Full name"
            className="w-full p-3 border rounded-md  dark:bg-bgHoverCategory  border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition duration-300rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500"
          />
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-normal dark:text-white text-black mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            placeholder="Tell us about your project..."
            className="w-full p-3 border  dark:bg-bgHoverCategory  border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition duration-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500"
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button className="self-start bg-black  dark:bg-white  text-white   dark:text-black    px-4 py-3 hover:bg-blackButtonHover transition duration-300 rounded-2xl  text-left flex items-center gap-2 text-xl leading-6 font-medium group">
            Göndər
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              className="transform transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1 group-hover:translate-y-[-2px]"
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
