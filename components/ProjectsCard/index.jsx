import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./ProjectsCard.module.css";
import { useTranslation } from "react-i18next";

function ProjectsCard({ imageSrc, category, title, slug }) {
  const router = useRouter();
     const { t } = useTranslation();

  const handleNavigate = () => {
    router.push(`/projects/${slug}`);
  };

  return (
    <div
      onClick={handleNavigate}
      className={`relative flex flex-col space-y-4 cursor-pointer  group ${styles.card}`}
    >
      {/* Content */}
      <Image
        src={imageSrc}
        width={403}
        height={384}
        className="rounded-2xl"
        alt={title}
      />
      <span className="text-sm w-fit rounded-full text-textSecondaryDefault font-normal py-1 px-3 bg-lightPurpleCard">
        {category}
      </span>
      <h5 className="text-2xl leading-7 text-textSecondaryDefault font-medium pb-2 dark:text-white line-clamp-2">
        {title}
      </h5>
      <div className="flex items-center gap-2 pb-3 dark:text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          className="transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1 group-hover:translate-y-[-2px]"
        >
          <path
            d="M16.0037 10.3842L7.39712 18.9908L5.98291 17.5766L14.5895 8.96997H7.00373V6.96997H18.0037V17.97H16.0037V10.3842Z"
            fill="currentColor"
          />
        </svg>
        <p className="text-lg font-medium text-grayTextinBox tracking-036 leading-normal">
        {t("more")}
        </p>
      </div>

      {/* Additional wrapper for the other two borders */}
      <div className={styles.borderWrapper}></div>
    </div>
  );
}

export default ProjectsCard;
