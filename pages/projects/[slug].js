// pages/projects/[slug].js
import React from "react";
import { useRouter } from "next/router";
import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import Header from "@/components/Header";
import TitleButtonProject from "@/components/TitleButtonProject";
import CategoriesProject from "@/components/CategoriesProject";

import SimilarProjectsTitle from "@/components/SimilarProjectsTitle";
import OurAdvantagesSection from "@/components/OurAdvantagesSection";
import Footer from "@/components/Footer";
import { getSingleProject } from "@/services/getSingleProject";
import { getSettings } from "@/services/getSettings";
import Customers from "@/components/Customers";
import Head from "next/head";
import Slider from "@/components/EmblaCarouselAdvantage/EmblaCarousel";
import ProjectDetails from "@/components/ProjectDetails";
import AboutProject from "@/components/AboutProject";
import ProjectSlider from "@/components/ProjectSlider";

function ProjectPage({ project, settingsData, similarProjects }) {
  const router = useRouter();
console.log(project, "project");

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const headerBgColor = "#ffff";
  const headerDarkBgColor = "#333435";

  if (!project) {
    return (
      <>
        <Header bgColor={headerBgColor} darkBgColor={headerDarkBgColor} />
        <div className="flex flex-col justify-center items-center min-h-screen bg-mainGray dark:bg-bgDark">
          <p className="text-center text-2xl text-gray-700 dark:text-gray-300">
            Üzr istəyirik, layihə tapılmadı.
          </p>
          <img
            src="/notFound/Animation - 1734951558516.gif"
            alt="Project not found animation"
            className="max-w-full max-h-full w-[400px]"
          />
        </div>
      </>
    );
  }

  return (
    <div className="pt-20 bg-mainGray dark:bg-bgDark">
      <Head>
        <title>{project.meta_title}</title>
        <meta name="description" content={project.meta_description} />
        <meta name="keywords" content={project.meta_keywords} />
      </Head>
      <main>
        <Header bgColor={headerBgColor} darkBgColor={headerDarkBgColor} />
        <Container>
          <Breadcrumb />
        </Container>
        <Container>
          <div className="bg-white dark:bg-black p-5 rounded-xl">
            <TitleButtonProject title={project.title} link={project.link} />
            <CategoriesProject
              categoryTitles={project.category.map((cat) => cat.title)}
            />
            <ProjectDetails image={project.image} />
            <AboutProject description={project.desc} />
            <ProjectSlider   data={project.images} />

            {/* <Customers slides={similarProjects} singleCarousel={true} /> */}
            {/* <OurAdvantagesSection data={similarProjects} /> */}
            <SimilarProjectsTitle />

            <Slider data={similarProjects} type="project" />
          </div>
        </Container>
        <div className="mt-10">
          <Footer data={settingsData} />
        </div>
      </main>
    </div>
  );
}

export default ProjectPage;
/**
 * Server-Side Rendering:
 * - We'll fetch the project by slug each time the page is requested.
 * - This also captures the locale if you have i18n configured (defaulting to 'az').
 */
export async function getServerSideProps(context) {
  const { slug } = context.params;
  const { locale = "az" } = context; // use your i18n setup or a default

  try {
    // Using your getSingleProject function:
    const data = await getSingleProject(locale, slug);
    const settingsData = await getSettings(locale);

    // Suppose the API returns data in the shape: { item: { ...projectFields } }
    if (!data?.item) {
      return { notFound: true };
    }

    return {
      props: {
        project: data.item,

        similarProjects: data.related_project,
        settingsData,
      },
    };
  } catch (error) {
    console.error(`Failed to fetch the project [${slug}]:`, error);
    return {
      notFound: true,
    };
  }
}
