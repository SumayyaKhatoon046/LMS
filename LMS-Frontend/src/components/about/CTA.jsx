import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="bg-gradient-to-r from-cyan-600 to-blue-700 py-24">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, scale: .9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          <h2 className="text-5xl font-bold text-white">
            Ready To Start Learning?
          </h2>

          <p className="text-cyan-100 mt-6 text-xl leading-8">

            Join thousands of students learning AI,
            Full Stack Development, DSA and Placement
            Preparation in one platform.

          </p>

          <div className="flex justify-center gap-6 mt-10 flex-wrap">

            <Link
              to="/register"
              className="px-8 py-4 rounded-xl bg-white text-cyan-700 font-bold hover:scale-105 transition"
            >
              Get Started
            </Link>

            <Link
              to="/courses"
              className="px-8 py-4 rounded-xl border-2 border-white text-white hover:bg-white hover:text-cyan-700 transition"
            >
              Browse Courses
            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default CTA;