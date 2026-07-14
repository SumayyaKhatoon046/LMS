import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Java",
  "DSA",
  "REST API",
  "Git",
  "GitHub",
  "Tailwind CSS",
  "Docker",
  "AI",
  "Machine Learning",
];

const SkillCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-lg"
    >
      <h2 className="text-2xl font-bold text-white mb-8">
        Skills
      </h2>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.08,
              y: -3,
            }}
            className="px-5 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium cursor-pointer shadow-lg"
          >
            {skill}
          </motion.div>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="text-white text-lg font-semibold mb-4">
          Skill Progress
        </h3>

        <div className="space-y-5">

          <div>
            <div className="flex justify-between text-gray-300 mb-2">
              <span>React</span>
              <span>90%</span>
            </div>

            <div className="w-full bg-slate-700 rounded-full h-3">
              <div
                className="bg-cyan-500 h-3 rounded-full"
                style={{ width: "90%" }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-gray-300 mb-2">
              <span>Node.js</span>
              <span>80%</span>
            </div>

            <div className="w-full bg-slate-700 rounded-full h-3">
              <div
                className="bg-green-500 h-3 rounded-full"
                style={{ width: "80%" }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-gray-300 mb-2">
              <span>DSA</span>
              <span>75%</span>
            </div>

            <div className="w-full bg-slate-700 rounded-full h-3">
              <div
                className="bg-purple-500 h-3 rounded-full"
                style={{ width: "75%" }}
              />
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;