// pages/projects/index.js

import React, { useState } from "react";
import CategoryFilter from "@/components/CategoryFilter";
import ProjectsCard from "@/components/ProjectsCard";
import Container from "@/components/Container";
import Header from "@/components/Header";
import SingleTitle from "@/components/SingleTitle";
import { projectsData } from "@/shared/data/projectsData"; // Importing the data
import Breadcrumb from "@/components/Breadcrumb";

const filters = [
  "Hamısı",
  ...new Set(projectsData.map((project) => project.category)),
];

function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("Hamısı");
  const headerBgColor = "#ffff"; 
  const headerDarkBgColor = "#333435"; 
  const filteredProjects =
    selectedFilter === "Hamısı"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedFilter);

  return (
    <div className="py-20 bg-mainGray dark:bg-bgDark">
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
                key={project.id}
                imageSrc={project.imageSrc}
                category={project.category}
                title={project.title}
                slug={project.slug} // Pass slug to ProjectsCard
              />
            ))}
          </div>
        </Container>
      </main>
    </div>
  );
}

export default Projects;
