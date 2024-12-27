import Blogs from "@/components/Blogs";
import Container from "@/components/Container";
import Customers from "@/components/Customers";
import CustomersTitleIndex from "@/components/CustomersTitleIndex";
import Footer from "@/components/Footer";
import Forms from "@/components/Forms";
import FormsTitleIndex from "@/components/FormsTitleIndex";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import NavigationTitle from "@/components/NavigationTitle";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import UsefulLinks from "@/components/UsefulLinks";
import styles from "@/styles/gradient.module.css";
import { useRouter } from "next/router";
import Head from "next/head";
import LoadingAnimation from "@/components/LoadingAnimation";
import { getHero } from "@/services/getHero";
import { getServices } from "@/services/getServices";
import { getClients } from "@/services/getClients";
import { getProjects } from "@/services/getProjects"; // Import getProjects
import { getForums } from "@/services/getForums";
import { getBlogs } from "@/services/getBlogs";
import { getSettings } from "@/services/getSettings";

export default function Home({
  heroData,
  servicesData,
  clientsData,
  projectsData,
  forumsData,
  blogsData,
  settingsData,
}) {
  const router = useRouter();
  const { locale } = router;
  const headerBgColor = "#F5F5F7";
  const headerDarkBgColor = "#333435";
  console.log(clientsData, "clientsData");

  if (
    !heroData ||
    !servicesData ||
    !clientsData ||
    !projectsData ||
    !blogsData ||
    !settingsData ||
    !forumsData
  ) {
    // Include projectsData in the check
    return <LoadingAnimation />;
  }

  const { item, meta_tag } = heroData;

  return (
    <>
      <Head>
        <title>{meta_tag.meta_title}</title>
        <meta name="description" content={meta_tag.meta_description} />
        <meta name="keywords" content={meta_tag.meta_keywords} />
      </Head>
      <main>
        <div className={styles.background}>
          <Header bgColor={headerBgColor} darkBgColor={headerDarkBgColor} />
          <Hero title={item.title} videoUrl={item.video} />
        </div>
        <Services services={servicesData} />
        <div className="border-b-gradient ">
          <CustomersTitleIndex />
          <Customers slides={clientsData.item} />
        </div>
        <Projects projects={projectsData.item} /> {/* Pass projectsData */}
        <FormsTitleIndex />
        <Forms forums={forumsData.item} />
        <Blogs blogs={blogsData.item} />
        <InfoSection />
        <UsefulLinks />
        <Footer data={settingsData} />
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const lang = context.locale || "az"; // Default to "az" if locale is not set

  try {
    const [
      heroData,
      servicesData,
      clientsData,
      projectsData,
      forumsData,
      blogsData,
      settingsData,
    ] = await Promise.all([
      getHero(lang),
      getServices(lang),
      getClients(lang), // Fetch clients data
      getProjects(lang), // Fetch projects data
      getForums(lang), // Fetch projects data
      getBlogs(lang), // Fetch projects data
      getSettings(lang), // Fetch projects data
    ]);

    return {
      props: {
        heroData, // Data for the Hero component
        servicesData, // Data for the Services component
        clientsData, // Data for the Customers component
        projectsData, // Data for the Projects component
        forumsData,
        blogsData,
        settingsData,
      },
    };
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return {
      props: {
        heroData: null,
        servicesData: null,
        clientsData: null,
        projectsData: null, // Handle projects data failure,
        forumsData: null, // Handle projects data failure,
        blogsData: null, // Handle projects data failure,
        settingsData: null, // Handle projects data failure,
      },
    };
  }
}
