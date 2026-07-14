import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaCheckCircle,
  FaCertificate,
  FaFire,
} from "react-icons/fa";

const stats = [
  {
    title: "Courses Enrolled",
    value: "12",
    icon: <FaBookOpen />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Completed",
    value: "8",
    icon: <FaCheckCircle />,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Certificates",
    value: "5",
    icon: <FaCertificate />,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Study Streak",
    value: "27 Days",
    icon: <FaFire />,
    color: "from-red-500 to-pink-500",
  },
];

const ProfileStats = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.04 }}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg"
        >
          <div
            className={`w-14 h-14 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white text-2xl`}
          >
            {item.icon}
          </div>

          <h3 className="text-gray-400 mt-5">
            {item.title}
          </h3>

          <h2 className="text-3xl font-bold text-white mt-2">
            {item.value}
          </h2>
        </motion.div>
      ))}
    </div>
  );
};

export default ProfileStats;