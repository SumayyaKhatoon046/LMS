import { motion } from "framer-motion";
import {
  FaUsers,
  FaBookOpen,
  FaChalkboardTeacher,
  FaBriefcase,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers />,
    number: "50K+",
    title: "Active Students",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: <FaBookOpen />,
    number: "500+",
    title: "Premium Courses",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: <FaChalkboardTeacher />,
    number: "120+",
    title: "Expert Mentors",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: <FaBriefcase />,
    number: "10K+",
    title: "Placements",
    color: "from-orange-500 to-red-500",
  },
];

const Stats = () => {
  return (
    <section className="bg-slate-900 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-white">
            Our Impact
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Trusted by thousands of learners worldwide.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -10,
              }}
              className="bg-slate-800 border border-slate-700 rounded-3xl p-8 text-center"
            >

              <div
                className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white text-3xl mb-6`}
              >
                {item.icon}
              </div>

              <h3 className="text-5xl font-black text-white">
                {item.number}
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