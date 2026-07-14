import Navbar from "../components/common/Navbar";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Stats from "../components/home/Stats";
import Footer from "../components/common/Footer";
import TrustedCompanies from "../components/home/TrustedCompanies";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";
import FAQ from "../components/home/FAQ";
import Newsletter from "../components/home/Newsletter";
import CoursePreview from "../components/home/CoursePreview";

const Home = () => {
  return (
    <>
      <Navbar />

      <Hero />

      <TrustedCompanies />

      <Features />

      <CoursePreview />

      <Stats />

      <Testimonials />

      <CTA />

      <FAQ />

      <Newsletter />

      <Footer />
    </>
  );
};

export default Home;