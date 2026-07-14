import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaPlayCircle, FaUsers, FaBookOpen, FaAward } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">

      {/* Background Blur */}

      <div className="absolute w-96 h-96 bg-blue-600 rounded-full blur-[180px] opacity-30 -top-20 -left-20"></div>

      <div className="absolute w-96 h-96 bg-purple-600 rounded-full blur-[180px] opacity-30 bottom-0 right-0"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 px-6 items-center relative z-10">

        {/* Left */}

        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: .8 }}
        >

          <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400">
            🚀 AI Powered Learning Platform
          </span>

          <h1 className="mt-8 text-6xl font-black text-white leading-tight">

            Learn
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}Smarter
            </span>

            <br />

            Build Your Future

          </h1>

          <p className="mt-8 text-lg text-gray-300 leading-8">

            Industry level courses, assignments,
            quizzes, certificates and AI mentor in one place.

          </p>

          <div className="flex gap-5 mt-10">

            <Link
              to="/register"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-xl hover:scale-105 transition"
            >
              Start Learning
            </Link>

            <button className="px-8 py-4 rounded-xl border border-white/20 text-white flex items-center gap-3 hover:bg-white/10">

              <FaPlayCircle />

              Watch Demo

            </button>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: .8 }}
          className="relative"
        >

          <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-8 shadow-2xl">

            <h2 className="text-white text-2xl font-bold mb-8">
              Learning Statistics
            </h2>

            <div className="grid grid-cols-2 gap-6">

              <div className="rounded-2xl bg-white/10 p-6">

                <FaUsers className="text-4xl text-cyan-400 mb-4"/>

                <h3 className="text-4xl text-white font-bold">
                  15K+
                </h3>

                <p className="text-gray-300 mt-2">
                  Students
                </p>

              </div>

              <div className="rounded-2xl bg-white/10 p-6">

                <FaBookOpen className="text-4xl text-green-400 mb-4"/>

                <h3 className="text-4xl text-white font-bold">
                  350+
                </h3>

                <p className="text-gray-300 mt-2">
                  Courses
                </p>

              </div>

              <div className="rounded-2xl bg-white/10 p-6">

                <FaAward className="text-4xl text-yellow-400 mb-4"/>

                <h3 className="text-4xl text-white font-bold">
                  98%
                </h3>

                <p className="text-gray-300 mt-2">
                  Success
                </p>

              </div>

              <div className="rounded-2xl bg-white/10 p-6">

                <h3 className="text-4xl text-white font-bold">
                  24/7
                </h3>

                <p className="text-gray-300 mt-2">
                  AI Mentor
                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;