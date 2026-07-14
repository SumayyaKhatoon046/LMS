const goals = [
  "Complete React Module",
  "Solve 3 DSA Problems",
  "Watch AI Lecture",
  "Revise JavaScript",
];

const DailyGoals = () => {
  return (
    <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">

      <h2 className="text-2xl font-bold text-white mb-6">
        Today's Goals
      </h2>

      <div className="space-y-4">

        {goals.map((goal, index) => (
          <label
            key={index}
            className="flex items-center gap-4 text-gray-300"
          >
            <input type="checkbox" />
            {goal}
          </label>
        ))}

      </div>

    </div>
  );
};

export default DailyGoals;