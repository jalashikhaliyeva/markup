import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import useTheme from "@/shared/hooks/useTheme"; // Assuming you have a ThemeContext for theme management
import Breadcrumb from "@/components/Breadcrumb";
import Head from "next/head";
import { getSettings } from "@/services/getSettings";

function Contact({ settings }) {
  const { isDarkMode } = useTheme(); // Access the dark mode state from the context
  const headerBgColor = "#ffff";
  const headerDarkBgColor = "#333435";

  console.log(settings, "settings data");

  return (
    <>
      <div
        className={`py-20 bg-no-repeat ${
          isDarkMode ? "bg-bgDark" : "bg-cover bg-white"
        }`}
        style={{
          backgroundImage: isDarkMode ? "none" : "url('/BG.png')",
        }}
        z
      >
        {/* <Head>
          <title>{meta_tag.meta_title}</title>
          <meta name="description" content={combinedMetaDescription} />
          <meta name="keywords" content={meta_tag.meta_keywords} />
        </Head> */}
        <main>
          <Header bgColor={headerBgColor} darkBgColor={headerDarkBgColor} />
          <Container>
            <Breadcrumb />
            <div className="flex flex-col  items-center lg:flex-row pt-5 justify-between">
              <ContactInfo data={settings.contact} socialLinks={settings.social_link} />
              <ContactForm />
            </div>
          </Container>
        </main>
      </div>
      <Footer data={settings} />
    </>
  );
}

export default Contact;

export async function getServerSideProps(context) {
  const { locale } = context; // Assuming you're using Next.js internationalization
  try {
    const settings = await getSettings(locale || "az");
    return {
      props: {
        settings,
      },
    };
  } catch (error) {
    console.error("Error fetching settings:", error);
    // Optionally, you can return fallback props or redirect
    return {
      props: {
        settings: null, // or provide default settings
      },
    };
  }
}
