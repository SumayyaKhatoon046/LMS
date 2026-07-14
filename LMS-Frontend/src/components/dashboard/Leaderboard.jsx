import { motion } from "framer-motion";
import {
  FaTrophy,
  FaMedal,
  FaAward,
  FaStar,
} from "react-icons/fa";

const leaders = [
  {
    rank: 1,
    name: "Rahul Sharma",
    points: 9850,
    icon: <FaTrophy />,
    color: "text-yellow-400",
  },
  {
    rank: 2,
    name: "Sumayya Khatoon",
    points: 9420,
    icon: <FaMedal />,
    color: "text-gray-300",
  },
  {
    rank: 3,
    name: "Aman Verma",
    points: 9180,
    icon: <FaAward />,
    color: "text-orange-400",
  },
  {
    rank: 4,
    name: "Priya Singh",
    points: 8900,
    icon: <FaStar />,
    color: "text-cyan-400",
  },
  {
    rank: 5,
    name: "Arjun Patel",
    points: 8750,
    icon: <FaStar />,
    color: "text-cyan-400",
  },
];

const Leaderboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg"
    >
      <h2 className="text-2xl font-bold text-white mb-6">
        🏆 Leaderboard
      </h2>

      <div className="space-y-4">
        {leaders.map((user, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="flex items-center justify-between bg-slate-800 rounded-xl p-4"
          >
            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold text-cyan-400 w-8">
                #{user.rank}
              </div>

              <div className={`text-2xl ${user.color}`}>
                {user.icon}
              </div>

              <div>
                <h3 className="text-white font-semibold">
                  {user.name}
                </h3>

                <p className="text-gray-400 text-sm">
                  Student
                </p>
              </div>
            </div>

            <div className="text-right">
              <h3 className="text-cyan-400 font-bold text-lg">
                {user.points}
              </h3>

              <p className="text-gray-500 text-xs">
                XP Points
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Leaderboard;