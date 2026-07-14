import { motion } from "framer-motion";

const data = [
  [1, 3, 2, 4, 1, 0, 2],
  [2, 4, 3, 1, 2, 3, 4],
  [0, 2, 1, 3, 4, 2, 1],
  [4, 3, 2, 1, 2, 4, 3],
  [1, 2, 4, 3, 2, 1, 0],
];

const colors = [
  "bg-slate-800",
  "bg-cyan-900",
  "bg-cyan-700",
  "bg-cyan-500",
  "bg-cyan-300",
];

const LearningHeatmap = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-slate-900 rounded-2xl p-6 border border-slate-800"
    >
      <h2 className="text-2xl font-bold text-white mb-6">
        Learning Heatmap
      </h2>

      <div className="space-y-3">
        {data.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-3">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className={`w-8 h-8 rounded-md ${colors[cell]} hover:scale-110 transition`}
              />
            ))}
          </div>
        ))}
      </div>

      <p className="text-gray-400 mt-6 text-sm">
        Your daily learning consistency for the last 5 weeks.
      </p>
    </motion.div>
  );
};

export default LearningHeatmap;