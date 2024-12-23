import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import useTheme from "@/shared/hooks/useTheme"; // Assuming you have a ThemeContext for theme management

function Contact() {
  const { isDarkMode } = useTheme(); // Access the dark mode state from the context
  const headerBgColor = "#ffff";
  const headerDarkBgColor = "#333435";

  return (
    <>
      <div
        className={`py-20 bg-no-repeat ${
          isDarkMode ? "bg-bgDark" : "bg-cover bg-white"
        }`}
        style={{
          backgroundImage: isDarkMode ? "none" : "url('/BG.png')",
        }}z
      >
        <main>
          <Header bgColor={headerBgColor} darkBgColor={headerDarkBgColor} />
          <Container>
            <div className="flex flex-col  items-center lg:flex-row pt-5 justify-between">
              <ContactInfo />
              <ContactForm />
            </div>
          </Container>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
