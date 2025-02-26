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
import { getProjects } from "@/services/getProjects";
import { getForums } from "@/services/getForums";
import { getBlogs } from "@/services/getBlogs";
import { getSettings } from "@/services/getSettings";
import { getUsefulLinks } from "@/services/getUsefulLinks";
import { getTitles } from "@/services/getTitles";

export default function Home({
  heroData,
  servicesData,
  clientsData,
  projectsData,
  forumsData,
  blogsData,
  settingsData,
  usefulLinksData,
  titlesData,
}) {
  const router = useRouter();
  const { locale } = router;
  const headerBgColor = "#F5F5F7";
  const headerDarkBgColor = "#333435";
  console.log(heroData, "heroData");
  if (
    !heroData ||
    !servicesData ||
    !clientsData ||
    !projectsData ||
    !blogsData ||
    !settingsData ||
    !usefulLinksData ||
    !titlesData ||
    !forumsData
  ) {
    return <LoadingAnimation />;
  }

  const { item, meta_tag, social_link } = heroData;
  const usefulLinksDescriptions = usefulLinksData.item
    .map((link) => link.meta_description)
    .join(" ");

  const combinedMetaDescription =
    `${meta_tag.meta_description} ${usefulLinksDescriptions}`.substring(0, 160);
  // console.log(combinedMetaDescription, "combinedMetaDescription");

  const homeServices = servicesData.item.filter((service) => service.is_home);
  // console.log(homeServices, "homeServices");

  const titlesMap = titlesData.item.reduce((acc, { name, title }) => {
    acc[name] = title;
    return acc;
  }, {});

  return (
    <>
      <Head>
        <title>{meta_tag.meta_title}</title>
        <meta name="description" content={combinedMetaDescription} />
        <meta name="keywords" content={meta_tag.meta_keywords} />
      </Head>
      <main>
        <div className={styles.background}>
          <Header bgColor={headerBgColor} darkBgColor={headerDarkBgColor} />
          <Hero
            socialLink={social_link}
            title={item.title}
            videoUrl={item.video}
          />
        </div>
        <Services services={homeServices} title={titlesMap.Service} />
        <div className="border-b-gradient ">
          <CustomersTitleIndex title={titlesMap.Client} />
          <Customers slides={clientsData.item} />
        </div>
        <Projects projects={projectsData.item} title={titlesMap.Project} />
        <FormsTitleIndex title={titlesMap.Forum} />
        <Forms forums={forumsData.item} />
        <Blogs blogs={blogsData.item} title={titlesMap.Bloq} />
        <InfoSection data={settingsData} />
        <UsefulLinks slides={usefulLinksData.item} />
        <Footer data={settingsData} />
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const lang = context.locale || "az";

  try {
    const [
      heroData,
      servicesData,
      clientsData,
      projectsData,
      forumsData,
      blogsData,
      settingsData,
      usefulLinksData,
      titlesData,
    ] = await Promise.all([
      getHero(lang),
      getServices(lang),
      getClients(lang),
      getProjects(lang),
      getForums(lang),
      getBlogs(lang),
      getSettings(lang),
      getUsefulLinks(lang),
      getTitles(lang),
    ]);

    return {
      props: {
        heroData,
        servicesData,
        clientsData,
        projectsData,
        forumsData,
        blogsData,
        settingsData,
        usefulLinksData,
        titlesData,
      },
    };
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return {
      props: {
        heroData: null,
        servicesData: null,
        clientsData: null,
        projectsData: null,
        forumsData: null,
        blogsData: null,
        settingsData: null,
        usefulLinksData: null,
        titlesData: null,
      },
    };
  }
}
