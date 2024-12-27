import React from "react";
import Container from "../Container";
import NavigationTitle from "../NavigationTitle";
import OurAdvantagesSection from "../OurAdvantagesSection";
import NavigationButton from "../NavigationButton";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
function Blogs({blogs}) {
  
  const { t } = useTranslation();
  const router = useRouter();
  // const data = {
  //   advantage: [
  //     {
  //       id: 1,
  //       title: "Uğura Aparan Rəqəmsal Həllər",
  //       desc: "Ətraflı",
  //       btn: "12.12.2024",
  //       image: "/blogs/blogs.png",
  //     },
  //     {
  //       id: 2,
  //       title: "Uğura Aparan Rəqəmsal Həllər",
  //       desc: "Ətraflı",
  //       btn: "12.12.2024",
  //       image: "/blogs/blogs.png",
  //     },
  //     {
  //       id: 3,
  //       title: "Uğura Aparan Rəqəmsal Həllər",
  //       desc: "Ətraflı",
  //       btn: "12.12.2024",
  //       image: "/blogs/blogs.png",
  //     },
  //     {
  //       id: 4,
  //       title: "Uğura Aparan Rəqəmsal Həllər",
  //       desc: "Ətraflı",
  //       btn: "12.12.2024",
  //       image: "/blogs/blogs.png",
  //     },
  //     {
  //       id: 5,
  //       title: "Uğura Aparan Rəqəmsal Həllər",
  //       desc: "Ətraflı",
  //       btn: "12.12.2024",
  //       image: "/blogs/blogs.png",
  //     },
  //     {
  //       id: 6,
  //       title: "Uğura Aparan Rəqəmsal Həllər",
  //       desc: "Ətraflı",
  //       btn: "12.12.2024",
  //       image: "/blogs/blogs.png",
  //     },
  //     {
  //       id: 7,
  //       title: "Uğura Aparan Rəqəmsal Həllər",
  //       desc: "Ətraflı",
  //       btn: "12.12.2024",
  //       image: "/blogs/blogs.png",
  //     },
  //     {
  //       id: 8,
  //       title: "Uğura Aparan Rəqəmsal Həllər",
  //       desc: "Ətraflı",
  //       btn: "12.12.2024",
  //       image: "/blogs/blogs.png",
  //     },
  //   ],
  // };
  

  const handleNavigate = () => {
    router.push("/blogs"); // Navigate to /services
  };
  return (
    <div className="pt-custom-space pb-10 dark:bg-bgDarkGray">
      <Container>
        <div className="flex justify-between items-center py-custom-space">
          <NavigationTitle>{t("nav.blogs")}</NavigationTitle>
          <div className="hidden lg:block">
            <NavigationButton
              onClick={handleNavigate}
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
        </div>
      </Container>
      <div>
        {/* Pass the advantage array directly */}
        <Container>
          <OurAdvantagesSection data={blogs} />
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
              Hamısına bax
            </NavigationButton>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Blogs;
