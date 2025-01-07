import React, { useState } from "react";
import CategoryFilter from "@/components/CategoryFilter";
import ProjectsCard from "@/components/ProjectsCard";
import Container from "@/components/Container";
import Header from "@/components/Header";
import SingleTitle from "@/components/SingleTitle";
import Breadcrumb from "@/components/Breadcrumb";
import { getAllProjects } from "@/services/getAllProjects"; // Ensure correct path
import Head from "next/head";
import Footer from "@/components/Footer";
import { getSettings } from "@/services/getSettings";
import { useTranslation } from "react-i18next";

function Projects({ projectsData, categories, metaTag, settingsData }) {
  const { t } = useTranslation();
  const [selectedFilter, setSelectedFilter] = useState("Hamısı");
  const headerBgColor = "#ffff";
  const headerDarkBgColor = "#333435";
  const filters = ["Hamısı", ...categories?.map((category) => category.title)];
  const filteredProjects =
    selectedFilter === "Hamısı"
      ? projectsData
      : projectsData.filter((project) =>
          project.category.some((cat) => cat.title === selectedFilter)
        );

  return (
    <div className="pt-20 bg-mainGray dark:bg-bgDark">
      <Head>
        <title>{metaTag.meta_title}</title>
        <meta name="description" content={metaTag.meta_description} />
        <meta name="keywords" content={metaTag.meta_keywords} />
      </Head>
      <main>
        <Header bgColor={headerBgColor} darkBgColor={headerDarkBgColor} />
        <Container>
          <Breadcrumb />
        </Container>
        <SingleTitle>Layihələr</SingleTitle>
        <Container>
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            {filters.map((filter) => (
              <CategoryFilter
                key={filter}
                label={filter}
                isSelected={filter === selectedFilter}
                onClick={() => setSelectedFilter(filter)}
              />
            ))}
          </div>
          {filteredProjects.length > 0 ? (
            <div
              className="flex flex-wrap justify-center items-center"
              style={{ gap: "33px" }}
            >
              {filteredProjects.map((project) => (
                <ProjectsCard
                  key={project.slug}
                  imageSrc={project.thumb_image}
                  category={project.category.map((cat) => cat.title).join(", ")}
                  title={project.title}
                  slug={project.slug}
                />
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center h-64">
              <p className="text-lg text-gray-500">{t("projectNotFound")}</p>
            </div>
          )}
        </Container>
        <div className="pt-10">
          <Footer data={settingsData} />
        </div>
      </main>
    </div>
  );
}

export default Projects;

export async function getServerSideProps(context) {
  const lang = context.locale || "az"; // Default to "az" if locale is not set

  try {
    // Fetch all projects data
    const data = await getAllProjects(lang);

    // Destructure the response
    const {
      item: projectsData,
      category: categories,
      meta_tag: metaTag,
    } = data;

    // Fetch settings data
    const settingsData = await getSettings(lang);

    return {
      props: {
        projectsData,
        categories,
        metaTag,
        settingsData,
      },
    };
  } catch (error) {
    console.error("Failed to fetch projects data:", error);

    // Optionally, you can still attempt to fetch settings data even if fetching projects fails
    let settingsData = null;
    try {
      settingsData = await getSettings(lang);
    } catch (settingsError) {
      console.error("Failed to fetch settings data:", settingsError);
    }

    return {
      props: {
        projectsData: [],
        categories: [],
        metaTag: {
          meta_title: "Projects",
          meta_description: "Projects description",
          meta_keywords: "projects, projects keywords",
        },
        settingsData, // <-- Pass settingsData as a prop (could be null)
      },
    };
  }
}
