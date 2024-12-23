// pages/blogs/index.js

import React, { useState } from "react";
import BlogCard from "@/components/BlogCard";
import Container from "@/components/Container";
import Header from "@/components/Header";
import SingleTitle from "@/components/SingleTitle";
import Footer from "@/components/Footer";
import blogsData from "@/shared/data/blogsData";
import { useRouter } from "next/router";
import Breadcrumb from "@/components/Breadcrumb";

function Blogs() {
  const headerBgColor = "#ffff";
  const headerDarkBgColor = "#333435";
  const router = useRouter();
  const [visibleBlogs, setVisibleBlogs] = useState(6); // Initially show 6 blogs
  const loadMoreBlogs = () => {
    setVisibleBlogs((prevVisible) => prevVisible + 6); // Load 6 each time
  };

  const hasMoreBlogs = visibleBlogs < blogsData.length;

  return (
    <div className="pt-20 bg-mainGray dark:bg-bgDark">
      <main>
        <Header bgColor={headerBgColor} darkBgColor={headerDarkBgColor} />
        <Container>
          <Breadcrumb />
        </Container>
        <SingleTitle>Bloqlar</SingleTitle>
        <Container>
          {/* Using grid for better responsiveness */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-20"
          >
            {blogsData.slice(0, visibleBlogs).map((project) => (
              <BlogCard
                key={project.id}
                imageSrc={project.imageSrc}
                title={project.title}
                date={project.date}
                slug={project.slug}
              />
            ))}
          </div>
          {hasMoreBlogs && (
            <div className="flex justify-center mb-10">
              <button
                onClick={loadMoreBlogs}
                className="py-3 px-6 text-center rounded-2xl border border-neutralBlack dark:border-white text-lg leading-6 items-center gap-2 hover:bg-neutralBlack hover:text-white dark:text-white transition-colors duration-300 group"
              >
                Daha çox yüklə
              </button>
            </div>
          )}
        </Container>
        <Footer />
      </main>
    </div>
  );
}

export default Blogs;
