// pages/blog/[slug].js

import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import BlogsSingleTitle from "@/components/BlogSingleTitle";
import BlogCardSingle from "@/components/BlogCardSingle";
import Breadcrumb from "@/components/Breadcrumb";
import { getSingleBlog } from "@/services/getSingleBlog";
import { getSettings } from "@/services/getSettings"; // <-- Import getSettings

function BlogSingle({ blog, settingsData }) {
  // Handle the case where the blog is not found
  if (!blog) {
    return (
      <>
        <Header />
        <Container>
          <h1 className="text-2xl py-96 flex justify-center items-center ">
            Blog not found
          </h1>
        </Container>
        <Footer data={settingsData} />
      </>
    );
  }
  console.log(blog, "blog");

  const headerBgColor = "#ffff";
  const headerDarkBgColor = "#333435";

  return (
    <>
      <Head>
        <title>{blog.meta_title}</title>
        <meta name="description" content={blog.meta_description} />
        <meta name="keywords" content={blog.meta_keywords} />
      </Head>
      <div className="pt-20 bg-mainGray dark:bg-bgDark">
        <Header bgColor={headerBgColor} darkBgColor={headerDarkBgColor} />
        <Container>
          <Breadcrumb />
        </Container>
        <Container>
          <BlogsSingleTitle blog={blog} />
          <BlogCardSingle blog={blog} />
        </Container>
        <Footer data={settingsData} />
      </div>
    </>
  );
}

export default BlogSingle;


export async function getServerSideProps(context) {
  const { locale = "az" } = context;
  const { slug } = context.params;
  try {
    const data = await getSingleBlog(locale, slug);

    if (!data?.item) {
      return {
        notFound: true, 
      };
    }

    const blog = data.item;

    const settingsData = await getSettings(locale);

    return {
      props: {
        blog,
        settingsData,
      },
    };
  } catch (error) {
    console.error("Failed to fetch single blog data:", error);
    return {
      notFound: true,
    };
  }
}
