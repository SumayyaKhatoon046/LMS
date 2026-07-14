import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaClock,
  FaCheckCircle,
  FaFire,
} from "react-icons/fa";

const report = [
  {
    title: "Hours Studied",
    value: "28 hrs",
    icon: <FaClock />,
    color: "bg-blue-500",
  },
  {
    title: "Lessons Completed",
    value: "16",
    icon: <FaBookOpen />,
    color: "bg-cyan-500",
  },
  {
    title: "Assignments Submitted",
    value: "7",
    icon: <FaCheckCircle />,
    color: "bg-green-500",
  },
  {
    title: "Current Streak",
    value: "12 Days",
    icon: <FaFire />,
    color: "bg-orange-500",
  },
];

const WeeklyReport = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg"
    >
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-white">
          Weekly Report
        </h2>

        <span className="text-cyan-400 text-sm">
          This Week
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {report.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-slate-800 rounded-xl p-5 flex items-center gap-4"
          >
            <div
              className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center text-white text-2xl`}
            >
              {item.icon}
            </div>

            <div>
              <h3 className="text-gray-400 text-sm">
                {item.title}
              </h3>

              <p className="text-2xl font-bold text-white mt-1">
                {item.value}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8">
        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <span>Weekly Goal</span>
          <span>82%</span>
        </div>

        <div className="w-full bg-slate-700 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full"
            style={{ width: "82%" }}
          ></div>
        </div>
      </div>
    </motion.div>
  );
};

export default WeeklyReport;