import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-slate-950 py-24">

      <div className="max-w-7xl mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
        >

          <span className="px-5 py-2 rounded-full bg-cyan-500/20 text-cyan-400">
            📩 Contact Us
          </span>

          <h1 className="text-6xl font-black text-white mt-8">
            We'd Love To
            <span className="text-cyan-400"> Hear From You</span>
          </h1>

          <p className="text-gray-400 text-xl mt-8 max-w-3xl mx-auto leading-8">
            Have questions about our courses, AI features or placements?
            Our team is always here to help.
          </p>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;