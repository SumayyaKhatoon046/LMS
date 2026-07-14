import { motion } from "framer-motion";
import {
  FaRobot,
  FaLaptopCode,
  FaCertificate,
  FaBriefcase,
} from "react-icons/fa";

const features = [
  {
    icon: <FaRobot />,
    title: "AI Mentor",
    desc: "Ask doubts, generate notes, quizzes and get instant AI guidance.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: <FaLaptopCode />,
    title: "Live Projects",
    desc: "Build industry-level MERN, AI and Full Stack projects.",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: <FaCertificate />,
    title: "Certificates",
    desc: "Earn certificates after completing courses and quizzes.",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: <FaBriefcase />,
    title: "Placement Ready",
    desc: "DSA, Aptitude, Mock Interviews and Resume Builder.",
    color: "from-orange-500 to-red-500",
  },
];

const Features = () => {
  return (
    <section className="bg-slate-950 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-white">
            Why Choose Our LMS?
          </h2>

          <p className="text-gray-400 mt-5 text-lg">
            Everything you need to become placement ready.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="rounded-3xl bg-slate-900 border border-slate-800 p-8 text-center"
            >

              <div
                className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white text-3xl mb-6`}
              >
                {item.icon}
              </div>

              <h3 className="text-2xl text-white font-bold">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Features;