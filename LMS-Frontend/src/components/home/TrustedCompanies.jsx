import { motion } from "framer-motion";

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Meta",
  "Netflix",
  "Adobe",
  "Infosys",
  "TCS",
];

const TrustedCompanies = () => {
  return (
    <section className="bg-slate-950 py-20 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-gray-400 uppercase tracking-[8px] mb-14">
          Trusted By Learners Preparing For
        </h2>

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
          className="flex gap-16 whitespace-nowrap"
        >
          {[...companies, ...companies].map((company, index) => (
            <div
              key={index}
              className="text-3xl font-bold text-gray-600 hover:text-cyan-400 transition"
            >
              {company}
            </div>
          ))}
        </motion.div>

      </div>

    </section>
  );
};

export default TrustedCompanies;