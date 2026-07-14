const courses = [
  {
    title: "React Mastery",
    progress: 80,
  },
  {
    title: "Node.js Backend",
    progress: 40,
  },
  {
    title: "MongoDB",
    progress: 20,
  },
];

const RecommendedCourses = () => {
  return (
    <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6">

      <h2 className="text-2xl font-bold text-white mb-6">
        Recommended Courses
      </h2>

      <div className="space-y-6">

        {courses.map((course, index) => (

          <div key={index}>

            <div className="flex justify-between text-white mb-2">

              <span>{course.title}</span>

              <span>{course.progress}%</span>

            </div>

            <div className="w-full h-3 rounded-full bg-slate-700">

              <div
                className="h-3 rounded-full bg-cyan-500"
                style={{ width: `${course.progress}%` }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default RecommendedCourses;