import React from "react";
import Container from "../Container";
import NavigationTitle from "../NavigationTitle";

function CustomersTitleIndex() {
  return (
    <div className="bg-mainGray dark:bg-bgDarkGray pt-custom-space border-t-gradient">
      <Container>
        <NavigationTitle>Müştərilər</NavigationTitle>
        <p className="text-textGray text-lg leading-6 pt-5 lg:pt-0">
          Böyük ideyalar, güclü tərəfdaşlıqlar
        </p>
      </Container>
    </div>
  );
}

export default CustomersTitleIndex;
