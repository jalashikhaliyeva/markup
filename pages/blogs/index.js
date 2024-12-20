import React, { useState } from "react";
import CategoryFilter from "@/components/CategoryFilter";
import BlogCard from "@/components/BlogCard";
import Container from "@/components/Container";
import Header from "@/components/Header";
import SingleTitle from "@/components/SingleTitle";
import Footer from "@/components/Footer";
import blogsData from "@/shared/data/blogsData";

function Blogs() {
  const headerBgColor = "#ffff";
  const headerDarkBgColor = "#333435"; 
  return (
    <div className="pt-20 bg-mainGray dark:bg-bgDark">
      <main>
        <Header bgColor={headerBgColor} darkBgColor={headerDarkBgColor} />
        <SingleTitle>Bloqlar</SingleTitle>
        <Container>
          <div
            className="flex flex-wrap justify-center items-center mb-20"
            style={{ gap: "33px" }}
          >
            {blogsData.map((project) => (
              <BlogCard
                key={project.id}
                imageSrc={project.imageSrc}
                title={project.title}
                date={project.date}
                slug={project.slug}
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
