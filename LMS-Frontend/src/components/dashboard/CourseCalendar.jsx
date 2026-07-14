import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaVideo,
  FaClipboardCheck,
  FaBookOpen,
} from "react-icons/fa";

const events = [
  {
    date: "Mon",
    day: "07",
    title: "React Live Class",
    time: "10:00 AM",
    icon: <FaVideo />,
    color: "bg-cyan-500",
  },
  {
    date: "Tue",
    day: "08",
    title: "DSA Quiz",
    time: "2:00 PM",
    icon: <FaClipboardCheck />,
    color: "bg-purple-500",
  },
  {
    date: "Wed",
    day: "09",
    title: "MongoDB Practice",
    time: "5:30 PM",
    icon: <FaBookOpen />,
    color: "bg-green-500",
  },
  {
    date: "Thu",
    day: "10",
    title: "System Design Session",
    time: "7:00 PM",
    icon: <FaCalendarAlt />,
    color: "bg-orange-500",
  },
];

const CourseCalendar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg"
    >
      <h2 className="text-2xl font-bold text-white mb-6">
        Course Calendar
      </h2>

      <div className="space-y-5">
        {events.map((event, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="flex items-center justify-between bg-slate-800 rounded-xl p-4"
          >
            <div className="flex items-center gap-4">
              <div className="bg-slate-700 rounded-xl px-4 py-2 text-center">
                <p className="text-xs text-gray-400">
                  {event.date}
                </p>

                <h3 className="text-xl font-bold text-white">
                  {event.day}
                </h3>
              </div>

              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-white ${event.color}`}
              >
                {event.icon}
              </div>

              <div>
                <h3 className="text-white font-semibold">
                  {event.title}
                </h3>

                <p className="text-gray-400 text-sm">
                  {event.time}
                </p>
              </div>
            </div>

            <button className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white transition">
              Join
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CourseCalendar;