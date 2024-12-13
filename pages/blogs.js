import React, { useState } from "react";
import CategoryFilter from "@/components/CategoryFilter";
import BlogCard from "@/components/BlogCard";
import Container from "@/components/Container";
import Header from "@/components/Header";
import SingleTitle from "@/components/SingleTitle";
import Footer from "@/components/Footer";

const projectsData = [
  {
    id: 1,
    imageSrc: "/blogs/blogs.png",
    date: "11.01.2024",
    title: "Blog Title",
  },
  {
    id: 1,
    imageSrc: "/blogs/blogs.png",
    date: "11.01.2024",
    title: "Blog Title",
  },
  {
    id: 1,
    imageSrc: "/blogs/blogs.png",
    date: "11.01.2024",
    title: "Blog Title",
  },
  {
    id: 1,
    imageSrc: "/blogs/blogs.png",
    date: "11.01.2024",
    title: "Blog Title",
  },
  {
    id: 1,
    imageSrc: "/blogs/blogs.png",
    date: "11.01.2024",
    title: "Blog Title",
  },
  {
    id: 1,
    imageSrc: "/blogs/blogs.png",
    date: "11.01.2024",
    title: "Blog Title",
  },

];

function Blogs() {


  return (
    <div className="pt-20 bg-mainGray">
      <main>
        <Header />
        <SingleTitle>Bloqlar</SingleTitle>
        <Container>
       
          <div
            className="flex flex-wrap justify-center items-center mb-20"
            style={{ gap: "33px" }}
          >
            {projectsData.map((project) => (
              <BlogCard
                key={project.id}
                imageSrc={project.imageSrc}
                title={project.title}
                date={project.date}
              />
            ))}
          </div>
        </Container>
        <Footer />
      </main>
    </div>
  );
}

export default Blogs;
