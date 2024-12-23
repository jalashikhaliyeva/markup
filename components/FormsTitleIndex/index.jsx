import React from "react";
import Container from "../Container";
import NavigationTitle from "../NavigationTitle";
function FormsTitleIndex() {
  return (
    <div className="bg-mainGray dark:bg-bgDarkGray pt-custom-space">
      <Container>
        <NavigationTitle>Forumlar</NavigationTitle>
        <p className="text-textGray text-lg leading-6 pt-5 lg:pt-0 ">
          Böyük ideyalar, güclü tərəfdaşlıqlar
        </p>
      </Container>
    </div>
  );
}

export default FormsTitleIndex;
