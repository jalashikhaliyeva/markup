import CervicesCard from "@/components/CervicesCard";
import Container from "@/components/Container";
import Header from "@/components/Header";
import SingleTitle from "@/components/SingleTitle";
import React from "react";

function Services() {
  return (
    <div className="pt-20 bg-mainGray">
      <main>
        <Header />
        <SingleTitle>Xidmətlərimiz</SingleTitle>
        <Container>
        <CervicesCard />

        </Container>
      </main>
    </div>
  );
}

export default Services;
