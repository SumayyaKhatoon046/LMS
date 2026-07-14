import {
  FaAward,
  FaFire,
  FaMedal,
} from "react-icons/fa";

const Achievements = () => {
  return (
    <section className="mt-12">

      <h2 className="text-3xl text-white font-bold mb-8">
        Achievements
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">

          <FaAward className="text-5xl text-yellow-400" />

          <h3 className="text-white text-xl mt-5">
            Top Performer
          </h3>

          <p className="text-gray-400 mt-2">
            Completed 10 Courses
          </p>

        </div>

        <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">

          <FaFire className="text-5xl text-orange-500" />

          <h3 className="text-white text-xl mt-5">
            25 Day Streak
          </h3>

          <p className="text-gray-400 mt-2">
            Keep Learning Daily
          </p>

        </div>

        <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">

          <FaMedal className="text-5xl text-cyan-400" />

          <h3 className="text-white text-xl mt-5">
            5 Certificates
          </h3>

          <p className="text-gray-400 mt-2">
            Successfully Earned
          </p>

        </div>

      </div>

    </section>
  );
};

export default Achievements;