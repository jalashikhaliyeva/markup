import CerviceAbout from "@/components/ServiceAbout";
import CerviceTitle from "@/components/ServiceTitle";
import Container from "@/components/Container";
import Header from "@/components/Header";
import { services } from "@/shared/data/servicesData";
import React from "react";
import ServiceAbout from "@/components/ServiceAbout";
import ServiceTitle from "@/components/ServiceTitle";
import ServicesOffer from "@/components/ServicesOffer";

export async function getStaticPaths() {
  // Generate paths based on available services
  const paths = services.map((service) => ({
    params: { slug: service.slug },
  }));

  return {
    paths,
    fallback: false, // Show a 404 if the slug doesn't exist
  };
}

export async function getStaticProps({ params }) {
  // Find the service data based on the slug
  const serviceData = services.find((service) => service.slug === params.slug);

  return {
    props: {
      serviceData,
    },
  };
}

function ProjectSingle({ serviceData }) {
  const headerBgColor = "#ffff"; 
  const headerDarkBgColor = "#333435"; 
  return (
    <div className="pt-20 bg-mainGray dark:bg-bgDark">
      <Container>
        <main className="bg-white dark:bg-black p-10 rounded-2xl mt-custom-space">
          <Header bgColor={headerBgColor} darkBgColor={headerDarkBgColor} />
          <ServiceTitle title={serviceData.title} />
          <ServiceAbout description={serviceData.description} />
          <ServicesOffer />
        </main>
      </Container>
    </div>
  );
}

export default ProjectSingle;
