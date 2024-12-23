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
import styles from "@/styles/gradient.module.css";

export default function Home() {
  const headerBgColor = "#F5F5F7";
  const headerDarkBgColor = "#333435";
  return (
    <>
      <main>
        <div className={styles.background}>
          <Header bgColor={headerBgColor} darkBgColor={headerDarkBgColor} />
          <Hero />
        </div>
        <Services />
        <CustomersTitleIndex />
        <Customers />
        <Projects />
        <FormsTitleIndex />
        <Forms />
        <Blogs />
        <InfoSection />

        <Footer />
      </main>
    </>
  );
}
