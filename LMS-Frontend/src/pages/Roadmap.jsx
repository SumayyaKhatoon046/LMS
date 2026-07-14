import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import Hero from "../components/roadmap/Hero";
import LearningPath from "../components/roadmap/LearningPath";

const Roadmap = () => {
  return (
    <>
      <Navbar />

      <main className="pt-24 bg-slate-950 min-h-screen">

        <Hero />

        <LearningPath />

      </main>

      <Footer />
    </>
  );
};

export default Roadmap;