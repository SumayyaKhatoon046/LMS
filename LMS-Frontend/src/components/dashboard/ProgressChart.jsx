import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "Mon", progress: 20 },
  { day: "Tue", progress: 35 },
  { day: "Wed", progress: 45 },
  { day: "Thu", progress: 60 },
  { day: "Fri", progress: 75 },
  { day: "Sat", progress: 85 },
  { day: "Sun", progress: 95 },
];

const ProgressChart = () => {
  return (
    <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">

      <h2 className="text-2xl font-bold text-white mb-6">
        Weekly Progress
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#334155" strokeDasharray="3 3" />
          <XAxis dataKey="day" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="progress"
            stroke="#06b6d4"
            strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
};

export default ProgressChart;