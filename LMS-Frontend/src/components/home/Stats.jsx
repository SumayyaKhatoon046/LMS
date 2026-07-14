import { motion } from "framer-motion";
import {
  FaUsers,
  FaBookOpen,
  FaCertificate,
  FaStar,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers />,
    value: "15K+",
    title: "Students",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <FaBookOpen />,
    value: "350+",
    title: "Courses",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <FaCertificate />,
    value: "8K+",
    title: "Certificates",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <FaStar />,
    value: "4.9",
    title: "Rating",
    color: "from-yellow-400 to-orange-500",
  },
];

const Stats = () => {
  return (
    <section className="bg-slate-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white">
            Trusted Worldwide
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Numbers that speak for our platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 text-center"
            >
              <div
                className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-3xl text-white mb-6`}
              >
                {item.icon}
              </div>

              <h3 className="text-5xl font-black text-white">
                {item.value}
              </h3>

              <p className="text-gray-400 mt-4 text-lg">
                {item.title}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Stats;