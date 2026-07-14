import { motion } from "framer-motion";

const courses = [
  {
    title: "MERN Stack Development",
    progress: 75,
    lessons: "42 / 56 Lessons",
  },
  {
    title: "Data Structures & Algorithms",
    progress: 50,
    lessons: "28 / 55 Lessons",
  },
  {
    title: "System Design",
    progress: 20,
    lessons: "8 / 40 Lessons",
  },
];

const ContinueLearning = () => {
  return (
    <section className="mt-12">

      <h2 className="text-3xl font-bold text-white mb-8">
        Continue Learning
      </h2>

      <div className="grid lg:grid-cols-3 gap-8">

        {courses.map((course, index) => (

          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            className="bg-slate-900 rounded-3xl border border-slate-800 p-6"
          >

            <h3 className="text-2xl text-white font-semibold">
              {course.title}
            </h3>

            <p className="text-gray-400 mt-2">
              {course.lessons}
            </p>

            <div className="w-full h-3 bg-slate-700 rounded-full mt-6">

              <div
                className="h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
                style={{ width: `${course.progress}%` }}
              />

            </div>

            <p className="text-cyan-400 mt-4 font-semibold">
              {course.progress}% Completed
            </p>

            <button className="mt-6 w-full py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 transition text-white font-semibold">
              Continue
            </button>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default ContinueLearning;