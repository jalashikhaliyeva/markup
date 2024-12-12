import Blogs from "@/components/Blogs";
import Customers from "@/components/Customers";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import styles from "@/styles/gradient.module.css";

export default function Home() {
  return (
    <>
      <main>
        <div className={styles.background}>
          <Header />
          <Hero />
        </div>

        <Services />
        <Projects />
        <Customers />
        <Blogs />
        <InfoSection />

        <Footer />
      </main>
    </>
  );
}
