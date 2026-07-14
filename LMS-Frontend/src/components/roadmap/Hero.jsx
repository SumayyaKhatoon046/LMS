import { motion } from "framer-motion";
import { FaRoute } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">

      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-transparent to-purple-600/20"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/20 text-cyan-400">

            <FaRoute />

            <span>Career Roadmaps</span>

          </div>

          <h1 className="text-6xl font-black text-white mt-8 leading-tight">

            Choose Your
            <br />

            <span className="text-cyan-400">
              Dream Career
            </span>

          </h1>

          <p className="text-gray-400 text-xl mt-8 max-w-3xl mx-auto leading-8">

            Step-by-step learning paths designed by industry experts.
            Learn the right skills, build projects and get placement-ready.

          </p>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;