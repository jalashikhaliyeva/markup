// components/Projects.jsx
import React from "react";
import OurAdvantagesSection from "../OurAdvantagesSection";
import Container from "../Container";
import NavigationTitle from "../NavigationTitle";
import NavigationButton from "../NavigationButton";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import ShortDescription from "../ShortDescription";
function Projects({ projects }) {
  const { t } = useTranslation();
  const router = useRouter();
  // const data = {
  //   advantage: [
  //     {
  //       id: 4,
  //       title: "Azərbaycan kub assosasiyası ",
  //       desc: "Ətraflı",
  //       btn: "Website",
  //       image: "/projects/projects.png",
  //     },
  //     {
  //       id: 5,
  //       title: "Azərbaycan kub assosasiyası ",
  //       desc: "Ətraflı",
  //       btn: "Website",
  //       image: "/projects/projects.png",
  //     },
  //     {
  //       id: 6,
  //       title: "Azərbaycan kub assosasiyası ",
  //       desc: "Ətraflı",
  //       btn: "Website",
  //       image: "/projects/projects.png",
  //     },
  //     {
  //       id: 7,
  //       title: "Azərbaycan kub assosasiyası ",
  //       desc: "Ətraflı",
  //       btn: "Website",
  //       image: "/projects/projects.png",
  //     },
  //     {
  //       id: 8,
  //       title: "Azərbaycan kub assosasiyası ",
  //       desc: "Ətraflı",
  //       btn: "Website",
  //       image: "/projects/projects.png",
  //     },
  //     {
  //       id: 9,
  //       title: "Azərbaycan kub assosasiyası ",
  //       desc: "Ətraflı",
  //       btn: "Website",
  //       image: "/projects/projects.png",
  //     },
  //     {
  //       id: 10,
  //       title: "Azərbaycan kub assosasiyası ",
  //       desc: "Ətraflı",
  //       btn: "Website",
  //       image: "/projects/projects.png",
  //     },
  //     {
  //       id: 11,
  //       title: "Azərbaycan kub assosasiyası ",
  //       desc: "Ətraflı",
  //       btn: "Website",
  //       image: "/projects/projects.png",
  //     },
  //   ],
  // };

  const handleNavigate = () => {
    router.push("/projects"); // Navigate to /services
  };
  return (
    <div className="bg-white dark:bg-bgDark py-custom-space">
      <Container>
        <div className="flex justify-between items-center py-custom-space">
          <div>
          <NavigationTitle>{t("nav.projects")}</NavigationTitle>
          <ShortDescription desc={"Böyük ideyalar, güclü tərəfdaşlıqlar"} />

          </div>
 
          <div className="hidden lg:block">
            <button
              onClick={handleNavigate}
              className="py-3 px-4 text-center flex justify-center rounded-2xl border border-neutralBlack dark:border-white text-lg leading-6  items-center gap-2 hover:bg-neutralBlack hover:text-white dark:text-white transition-colors duration-300 group"
            >
              {t("nav.seeAll")}
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
      </Container>

      <Container>
        <OurAdvantagesSection data={projects} />
      </Container>

      <Container>
        <div className="block lg:hidden w-full">
          <NavigationButton
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
            {t("nav.seeAll")}
          </NavigationButton>
        </div>
      </Container>
    </div>
  );
}

export default Projects;
