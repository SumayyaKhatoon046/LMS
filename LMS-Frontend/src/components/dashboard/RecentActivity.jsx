import { motion } from "framer-motion";

const activities = [
  {
    title: "Completed React Hooks Quiz",
    time: "10 min ago",
  },
  {
    title: "Finished Node.js Module",
    time: "1 hour ago",
  },
  {
    title: "Earned MERN Certificate",
    time: "Yesterday",
  },
  {
    title: "AI Mentor Session Completed",
    time: "2 days ago",
  },
];

const RecentActivity = () => {
  return (
    <section className="mt-12">

      <h2 className="text-3xl font-bold text-white mb-8">
        Recent Activity
      </h2>

      <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8">

        {activities.map((activity, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 }}
            className="flex justify-between items-center py-5 border-b border-slate-800 last:border-none"
          >

            <div>

              <h3 className="text-white font-semibold">
                {activity.title}
              </h3>

              <p className="text-gray-400 mt-1">
                {activity.time}
              </p>

            </div>

            <span className="w-4 h-4 rounded-full bg-cyan-400"></span>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default RecentActivity;