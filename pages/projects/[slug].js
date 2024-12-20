// pages/projects/[slug].js

import React from "react";
import { useRouter } from "next/router";
import { projectsData } from "@/shared/data/projectsData";
import ProjectsCard from "@/components/ProjectsCard";
import Header from "@/components/Header";
import Container from "@/components/Container";
import SingleTitle from "@/components/SingleTitle";
import NavigationTitle from "@/components/NavigationTitle";
import CategoriesProject from "@/components/CategoriesProject";
import TitleButtonProject from "@/components/TitleButtonProject";
import AboutProject from "@/components/AboutProject";
import Projects from "@/components/Projects";
import OurAdvantagesSection from "@/components/OurAdvantagesSection";
import SimilarProjectsTitle from "@/components/SimilarProjectsTitle";
import Footer from "@/components/Footer";

function ProjectPage({ project }) {
  const headerBgColor = "#ffff"; 
  const headerDarkBgColor = "#333435"; 
  const data = {
    advantage: [
      {
        id: 4,
        title: "Azərbaycan kub assosasiyası ",
        desc: "Ətraflı",
        btn: "Website",
        image: "/projects/projects.png",
      },
      {
        id: 5,
        title: "Azərbaycan kub assosasiyası ",
        desc: "Ətraflı",
        btn: "Website",
        image: "/projects/projects.png",
      },
      {
        id: 6,
        title: "Azərbaycan kub assosasiyası ",
        desc: "Ətraflı",
        btn: "Website",
        image: "/projects/projects.png",
      },
      {
        id: 6,
        title: "Azərbaycan kub assosasiyası ",
        desc: "Ətraflı",
        btn: "Website",
        image: "/projects/projects.png",
      },
      {
        id: 6,
        title: "Azərbaycan kub assosasiyası ",
        desc: "Ətraflı",
        btn: "Website",
        image: "/projects/projects.png",
      },
      {
        id: 6,
        title: "Azərbaycan kub assosasiyası ",
        desc: "Ətraflı",
        btn: "Website",
        image: "/projects/projects.png",
      },
      {
        id: 6,
        title: "Azərbaycan kub assosasiyası ",
        desc: "Ətraflı",
        btn: "Website",
        image: "/projects/projects.png",
      },
      {
        id: 6,
        title: "Azərbaycan kub assosasiyası ",
        desc: "Ətraflı",
        btn: "Website",
        image: "/projects/projects.png",
      },
    ],
  };

  const router = useRouter();
  const handleNavigate = () => {
    router.push("/projects"); // Navigate to /services
  };
  // If the page is not yet generated, show a loading state
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="pt-20 bg-mainGray dark:bg-bgDark">
      <main>
        <Header bgColor={headerBgColor} darkBgColor={headerDarkBgColor} />

        <Container>
          <TitleButtonProject project={project} />
          <CategoriesProject category={project.category} />
          <AboutProject />
          <SimilarProjectsTitle />
          {/* projects slider  */}
          <OurAdvantagesSection data={data.advantage} />
        </Container>
        <Footer />
      </main>
    </div>
  );
}

export default ProjectPage;

// Fetch all possible slugs
export async function getStaticPaths() {
  const paths = projectsData.map((project) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: true }; // Enable fallback for new projects
}

// Fetch data for a single project based on slug
export async function getStaticProps({ params }) {
  const { slug } = params;
  const project = projectsData.find((proj) => proj.slug === slug) || null;

  return {
    props: {
      project,
    },
    revalidate: 60, // Revalidate at most once every minute
  };
}
