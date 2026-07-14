import { motion } from "framer-motion";
import {
  FaClock,
  FaBook,
  FaCode,
  FaClipboardCheck,
} from "react-icons/fa";

const deadlines = [
  {
    title: "React Assignment",
    course: "MERN Stack",
    due: "Today - 8:00 PM",
    icon: <FaCode />,
    color: "bg-cyan-500",
  },
  {
    title: "DSA Quiz",
    course: "Data Structures",
    due: "Tomorrow - 10:00 AM",
    icon: <FaClipboardCheck />,
    color: "bg-purple-500",
  },
  {
    title: "Node.js Project",
    course: "Backend Development",
    due: "3 Days Left",
    icon: <FaBook />,
    color: "bg-green-500",
  },
];

const UpcomingDeadlines = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg"
    >
      <h2 className="text-2xl font-bold text-white mb-6">
        Upcoming Deadlines
      </h2>

      <div className="space-y-5">
        {deadlines.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="flex items-center justify-between bg-slate-800 rounded-xl p-4"
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-white ${item.color}`}
              >
                {item.icon}
              </div>

              <div>
                <h3 className="text-white font-semibold">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm">
                  {item.course}
                </p>
              </div>
            </div>

            <div className="text-right">
              <div className="flex items-center gap-2 text-orange-400 justify-end">
                <FaClock />
                <span className="text-sm">{item.due}</span>
              </div>

              <button className="mt-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-lg text-white text-sm transition">
                View
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default UpcomingDeadlines;