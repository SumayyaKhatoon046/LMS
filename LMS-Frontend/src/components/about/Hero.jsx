import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">

      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-transparent to-purple-600/20"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="text-center"
        >

          <span className="px-5 py-2 rounded-full bg-cyan-500/20 text-cyan-400">
            🚀 AI Powered Learning Platform
          </span>

          <h1 className="text-6xl font-black text-white mt-8 leading-tight">

            Learn Smarter
            <br />

            Build Faster
            <br />

            Get Hired

          </h1>

          <p className="text-gray-400 text-xl mt-8 max-w-3xl mx-auto">

            Master Full Stack Development, DSA, AI and
            Placement Preparation through one modern platform.

          </p>

          <div className="flex justify-center gap-6 mt-12">

            <Link
              to="/courses"
              className="px-8 py-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 transition text-white font-semibold"
            >
              Explore Courses
            </Link>

            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white transition"
            >
              Contact Us
            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;