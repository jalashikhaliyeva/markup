import React from "react";
import Container from "../Container";
import NavigationTitle from "../NavigationTitle";
import NavigationButton from "../NavigationButton";
import { RxArrowTopRight } from "react-icons/rx";
import CervicesCard from "../CervicesCard";
function Services() {
  return (
    <div className="bg-mainBgColor">
      <Container>
        <div className="flex justify-between items-center py-custom-space">
          <NavigationTitle>Xidmətlər</NavigationTitle>
          <NavigationButton
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M16.0037 10.3842L7.39712 18.9908L5.98291 17.5766L14.5895 8.96997H7.00373V6.96997H18.0037V17.97H16.0037V10.3842Z"
                  fill="currentColor"
                />
              </svg>
            }
          >
            Hamısına bax
          </NavigationButton>
        </div>

        <CervicesCard />
      </Container>
    </div>
  );
}

export default Services;
