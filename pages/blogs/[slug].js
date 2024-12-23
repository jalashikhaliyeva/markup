// pages/blog/[slug].js

import { useRouter } from "next/router";
import blogsData from "@/shared/data/blogsData"; // Adjust the path as needed
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import SingleTitle from "@/components/SingleTitle";
import BlogCardSingle from "@/components/BlogCardSingle";
import BlogsSingleTitle from "@/components/BlogSingleTitle";
import Breadcrumb from "@/components/Breadcrumb";

function BlogSingle() {
  const headerBgColor = "#ffff";
  const headerDarkBgColor = "#333435"; 
  const router = useRouter();
  const { slug } = router.query;

  // Find the blog data based on the slug
  const blog = blogsData.find((item) => item.slug === slug);

  // Handle the case where the blog is not found
  if (!blog) {
    return (
      <>
        <div className="py-custom-space bg-white dark:bg-bgDark">
          <Header />
          <Container>
            <h1 className="text-2xl py-96 flex justify-center items-center ">
              Blog not found
            </h1>
          </Container>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <div className="pt-20 bg-mainGray dark:bg-bgDark">
      <Header bgColor={headerBgColor}  darkBgColor={headerDarkBgColor}/>
      <Container>
          <Breadcrumb />
        </Container>
      <Container>
        <BlogsSingleTitle blog={blog} />
        <BlogCardSingle blog={blog} />
      </Container>
      <Footer />
    </div>
  );
}

export default BlogSingle;
