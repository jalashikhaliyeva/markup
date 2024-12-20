import React from "react";
import NavigationTitle from "../NavigationTitle";
import { useRouter } from "next/router";

function SimilarProjectsTitle() {
  const router = useRouter();
  const handleNavigate = () => {
    router.push("/projects"); // Navigate to /services
  };
  return (
    <div className="flex justify-between items-center py-custom-space">
      <NavigationTitle>Bənzər layihələr</NavigationTitle>

      <div className="hidden lg:block">
        <button
          onClick={handleNavigate}
          className="py-3 px-4 text-center flex justify-center rounded-2xl border border-neutralBlack dark:border-white text-lg leading-6  items-center gap-2 hover:bg-neutralBlack hover:text-white dark:text-white transition-colors duration-300 group"
        >
          Hamısına bax
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
  );
}

export default SimilarProjectsTitle;
