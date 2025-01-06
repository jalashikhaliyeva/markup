// pages/blogs/index.js

import React, { useState } from "react";
import BlogCard from "@/components/BlogCard";
import Container from "@/components/Container";
import Header from "@/components/Header";
import SingleTitle from "@/components/SingleTitle";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import Breadcrumb from "@/components/Breadcrumb";
import { getBlogs } from "@/services/getBlogs";
import Head from "next/head";
import { getSettings } from "@/services/getSettings";
import { useTranslation } from "react-i18next";

function Blogs({ blogsData, metaTag, settingsData }) {
    const { t } = useTranslation();
  const headerBgColor = "#ffff";
  const headerDarkBgColor = "#333435";
  const router = useRouter();
  const [visibleBlogs, setVisibleBlogs] = useState(6); // Initially show 6 blogs
console.log(blogsData, "blogsData");

  const loadMoreBlogs = () => {
    setVisibleBlogs((prevVisible) => prevVisible + 6); // Load 6 each time
  };

  console.log(metaTag, "metaTag blogs");

  const hasMoreBlogs = visibleBlogs < blogsData?.length;

  return (
    <div className="pt-20 bg-mainGray dark:bg-bgDark">
      {/* Head component to set meta tags dynamically */}
      <Head>
        <title>{metaTag.meta_title || "Blogs"}</title>
        <meta name="description" content={metaTag.meta_description} />
        <meta name="keywords" content={metaTag.meta_keywords} />
      </Head>

      <main>
        <Header bgColor={headerBgColor} darkBgColor={headerDarkBgColor} />
        <Container>
          <Breadcrumb />
        </Container>

        <h1 className="text-black dark:text-white font-medium md:leading-83 leading-6 flex items-center justify-center md:text-title text-3xl">
        {t("nav.blogs")}
        </h1>
        <div className="flex items-center justify-center pb-custom-space">
          <p className="text-pink-500 text-xl justify-center items-center  leading-7 font-medium bg-custom-gradient bg-clip-text text-transparent">
            description
          </p>
        </div>
        <Container>
          {/* Using grid for better responsiveness */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-20">
            {blogsData.slice(0, visibleBlogs).map((blog) => (
              <BlogCard
                key={blog.slug} // Assuming 'slug' is unique
                imageSrc={blog.thumb_image} // Using thumbnail for performance
                title={blog.title}
                date={blog.created_at}
                slug={blog.slug}
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
        <Footer data={settingsData} />
      </main>
    </div>
  );
}

export default Blogs;

// Server-side data fetching
export async function getServerSideProps(context) {
  const lang = context.locale || "az"; // Default to "az" if locale is not set

  try {
    const data = await getBlogs(lang);
    const settingsData = await getSettings(lang);
    return {
      props: {
        blogsData: data.item || [], // Pass the blogs array
        metaTag: data.meta_tag || {}, // Pass meta tags
        settingsData,
      },
    };
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    return {
      props: {
        blogsData: [],

        metaTag: {
          meta_title: "Blogs",
          meta_description: "Default description for blogs.",
          meta_keywords: "blogs, default keywords",
        },
        settingsData,
      },
    };
  }
}
