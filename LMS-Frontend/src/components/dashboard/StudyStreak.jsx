import { FaFire } from "react-icons/fa";

const StudyStreak = () => {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8">

      <FaFire className="text-5xl text-white mb-4" />

      <h2 className="text-3xl font-bold text-white">
        12 Day Streak 🔥
      </h2>

      <p className="text-orange-100 mt-3">
        Keep learning daily to earn bonus XP and maintain your streak.
      </p>

    </div>
  );
};

export default StudyStreak;