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

function Projects({ projectsData, categories, metaTag }) {
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
    <div className="py-20 bg-mainGray dark:bg-bgDark">
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
          <div
            className="flex flex-wrap justify-center items-center"
            style={{ gap: "33px" }}
          >
            {filteredProjects.map((project) => (
              <ProjectsCard
                key={project.slug} // Assuming slug is unique
                imageSrc={project.thumb_image}
                category={project.category.map((cat) => cat.title).join(", ")}
                title={project.title}
                slug={project.slug}
              />
            ))}
          </div>
        </Container>
        {/* <Footer /> */}
      </main>
    </div>
  );
}

export default Projects;

export async function getServerSideProps(context) {
  const lang = context.locale || "az"; // Default to "az" if locale is not set

  try {
    const data = await getAllProjects(lang);

    // Destructure the response
    const {
      item: projectsData,
      category: categories,
      meta_tag: metaTag,
    } = data;

    return {
      props: {
        projectsData,
        categories,
        metaTag,
      },
    };
  } catch (error) {
    console.error("Failed to fetch projects data:", error);
    return {
      props: {
        projectsData: [],
        categories: [],
        metaTag: {
          meta_title: "Projects",
          meta_description: "Projects description",
          meta_keywords: "projects, projects keywords",
        },
      },
    };
  }
}
