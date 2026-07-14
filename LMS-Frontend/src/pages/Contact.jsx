import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import Hero from "../components/contact/Hero";
import ContactCards from "../components/contact/ContactCards";
import ContactForm from "../components/contact/ContactForm";
import Map from "../components/contact/Map";
import FAQ from "../components/contact/FAQ";
import Social from "../components/contact/Social";
import CTA from "../components/contact/CTA";

const Contact = () => {
  return (
    <>
      <Navbar />

      <Hero />

      <ContactCards />

      <ContactForm />

      <Map />

      <FAQ />

      <Social />

      <CTA />

      <Footer />
    </>
  );
};

export default Contact;