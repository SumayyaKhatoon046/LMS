import { FaRobot } from "react-icons/fa";

const AIMentorCard = () => {
  return (
    <section className="mt-12">

      <div className="rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-700 p-10">

        <div className="flex items-center gap-6">

          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">

            <FaRobot className="text-4xl text-cyan-600" />

          </div>

          <div>

            <h2 className="text-3xl text-white font-bold">
              AI Mentor
            </h2>

            <p className="text-cyan-100 mt-3">
              Ask coding doubts, placement questions and get instant guidance.
            </p>

            <button className="mt-6 px-8 py-3 rounded-xl bg-white text-cyan-700 font-bold hover:scale-105 transition">
              Chat Now
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AIMentorCard;