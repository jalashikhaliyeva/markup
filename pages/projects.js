import React, { useState } from "react";
import CategoryFilter from "@/components/CategoryFilter";
import ProjectsCard from "@/components/ProjectsCard";
import Container from "@/components/Container";
import Header from "@/components/Header";
import SingleTitle from "@/components/SingleTitle";

const projectsData = [
  {
    id: 1,
    imageSrc: "/projects/projects.png",
    category: "Website",
    title: "Project Title 1",
  },
  {
    id: 2,
    imageSrc: "/projects/projects.png",
    category: "App",
    title: "Project Title 2",
  },
  {
    id: 3,
    imageSrc: "/projects/projects.png",
    category: "Design",
    title: "Project Title 3",
  },
  {
    id: 4,
    imageSrc: "/projects/projects.png",
    category: "Marketing",
    title: "Project Title 4",
  },
  {
    id: 5,
    imageSrc: "/projects/projects.png",
    category: "SEO",
    title: "Project Title 5",
  },
  {
    id: 6,
    imageSrc: "/projects/projects.png",
    category: "Development",
    title: "Project Title 6",
  },
  {
    id: 7,
    imageSrc: "/projects/projects.png",
    category: "Consulting",
    title: "Project Title 7",
  },
  {
    id: 8,
    imageSrc: "/projects/projects.png",
    category: "Support",
    title: "Project Title 8",
  },
  {
    id: 9,
    imageSrc: "/projects/projects.png",
    category: "Analysis",
    title: "Project Title 9",
  },
];

const filters = [
  "Hamısı",
  ...new Set(projectsData.map((project) => project.category)),
];

function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("Hamısı");

  const filteredProjects =
    selectedFilter === "Hamısı"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedFilter);

  return (
    <div className="py-20 bg-mainGray">
      <main>
        <Header />
        <SingleTitle>Xidmətlərimiz</SingleTitle>
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
              />
            ))}
          </div>
        </Container>
      </main>
    </div>
  );
}

export default Projects;
