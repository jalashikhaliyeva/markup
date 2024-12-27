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

function BlogSingle({ blog }) {
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
        <Footer />
      </>
    );
  }

  const headerBgColor = "#ffff";
  const headerDarkBgColor = "#333435";

  return (
    <>
      <Head>
        <title>{blog.meta_title}</title>
        <meta name="description" content={blog.meta_description} />
        <meta name="keywords" content={blog.meta_keywords} />
        {/* Add more meta tags as needed */}
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
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default BlogSingle;

/**
 * Fetches the blog data on each request.
 *
 * @param {object} context - Next.js context object
 * @returns {object} props
 */
export async function getServerSideProps(context) {
  const { locale = "az" } = context; // Fallback to 'az' if no locale is found
  const { slug } = context.params; // The dynamic route [slug].js

  try {
    // Fetch the data for this particular blog
    const data = await getSingleBlog(locale, slug);

    if (!data?.item) {
      return {
        notFound: true, // Triggers a 404 page if there's no item
      };
    }

    // Destructure `item` from the API response
    const blog = data.item;

    return {
      props: {
        blog,
      },
    };
  } catch (error) {
    console.error("Failed to fetch single blog data:", error);
    return {
      notFound: true,
    };
  }
}
