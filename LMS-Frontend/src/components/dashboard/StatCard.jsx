import { motion } from "framer-motion";

const StatCard = ({
  title,
  value,
  color,
}) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      className="rounded-3xl p-8 bg-slate-900 border border-slate-800"
    >

      <div
        className={`w-14 h-14 rounded-2xl ${color} mb-5`}
      ></div>

      <h3 className="text-gray-400">
        {title}
      </h3>

      <p className="text-4xl font-bold text-white mt-3">
        {value}
      </p>

    </motion.div>
  );
};

export default StatCard;