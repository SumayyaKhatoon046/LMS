import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 py-24 px-6">

      <motion.div
        initial={{ opacity: 0, scale: .9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >

        <h2 className="text-6xl font-black text-white">

          Ready To Become
          <br />
          Job Ready?

        </h2>

        <p className="text-blue-100 mt-8 text-xl">

          Join thousands of students learning with LearnHub.

        </p>

        <Link
          to="/register"
          className="inline-block mt-12 px-10 py-4 rounded-xl bg-white text-blue-700 font-bold hover:scale-105 transition"
        >
          Start Learning Free
        </Link>

      </motion.div>

    </section>
  );
};

export default CTA;