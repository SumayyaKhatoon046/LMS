import { motion } from "framer-motion";
import { FaBullseye, FaRocket } from "react-icons/fa";

const Story = () => {
  return (
    <section className="bg-slate-900 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <span className="text-cyan-400 font-semibold uppercase tracking-wider">
              Our Story
            </span>

            <h2 className="text-5xl font-bold text-white mt-4 leading-tight">
              We Believe Learning Should Be Practical.
            </h2>

            <p className="text-gray-400 mt-8 leading-8 text-lg">
              Our AI-powered Learning Management System is designed
              to bridge the gap between theoretical knowledge and
              real-world industry skills.

              Students don't just watch videos—they build projects,
              practice coding, solve DSA problems, prepare for
              interviews, and receive AI-powered guidance throughout
              their learning journey.
            </p>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8">

              <FaBullseye className="text-5xl text-cyan-400 mb-5" />

              <h3 className="text-2xl font-bold text-white">
                Our Mission
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                Deliver affordable, practical and AI-powered education
                that prepares every learner for real-world careers.
              </p>

            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8">

              <FaRocket className="text-5xl text-purple-400 mb-5" />

              <h3 className="text-2xl font-bold text-white">
                Our Vision
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                Become the world's most innovative AI learning platform
                where students can learn, build, collaborate and get
                hired faster.
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default Story;