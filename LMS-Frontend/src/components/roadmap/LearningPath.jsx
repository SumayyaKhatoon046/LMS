import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaBrain,
  FaCloud,
} from "react-icons/fa";

const paths = [
  {
    title: "MERN Stack",
    icon: <FaCode />,
    color: "from-blue-500 to-cyan-500",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],
  },
  {
    title: "DSA",
    icon: <FaServer />,
    color: "from-purple-500 to-pink-500",
    skills: [
      "Arrays",
      "Strings",
      "Linked List",
      "Trees",
      "Graphs",
      "Dynamic Programming",
    ],
  },
  {
    title: "Artificial Intelligence",
    icon: <FaBrain />,
    color: "from-green-500 to-emerald-500",
    skills: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "LLMs",
    ],
  },
  {
    title: "DevOps",
    icon: <FaCloud />,
    color: "from-orange-500 to-red-500",
    skills: [
      "Linux",
      "Docker",
      "Kubernetes",
      "AWS",
      "CI/CD",
    ],
  },
];

const LearningPath = () => {
  return (
    <section className="bg-slate-900 py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-10">

          {paths.map((path, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="rounded-3xl bg-slate-800 border border-slate-700 p-8"
            >

              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${path.color} flex items-center justify-center text-3xl text-white`}
              >
                {path.icon}
              </div>

              <h3 className="text-3xl font-bold text-white mt-6">
                {path.title}
              </h3>

              <div className="flex flex-wrap gap-3 mt-8">

                {path.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-slate-700 text-gray-300 hover:bg-cyan-600 transition"
                  >
                    {skill}
                  </span>
                ))}

              </div>

              <button className="mt-8 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transition">

                Start Learning

              </button>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default LearningPath;