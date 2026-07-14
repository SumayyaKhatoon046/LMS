import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getMyCourses } from "../services/courseService";

const MyCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const fetchCourses = async () => {
    try {
      const data = await getMyCourses();

      setCourses(data.courses || []);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex justify-center items-center">
        <h1 className="text-white text-3xl">
          Loading Courses...
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 p-10">

      <h1 className="text-4xl font-bold text-white mb-10">
        My Courses
      </h1>

      {courses.length === 0 ? (

        <div className="text-center text-gray-400 text-xl mt-20">
          You haven't enrolled in any course yet.
        </div>

      ) : (

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {courses.map((course) => (

            <div
              key={course._id}
              className="bg-slate-900 rounded-2xl p-6 border border-slate-700 hover:border-cyan-500 transition"
            >

              <img
                src={
                  course.thumbnail ||
                  "https://placehold.co/600x350"
                }
                alt={course.title}
                className="rounded-xl h-52 w-full object-cover"
              />

              <h2 className="text-white text-2xl font-bold mt-5">
                {course.title}
              </h2>

              <p className="text-gray-400 mt-3 line-clamp-3">
                {course.description}
              </p>

              <button
                onClick={() =>
                  navigate(`/courses/${course._id}`)
                }
                className="mt-6 w-full bg-cyan-600 hover:bg-cyan-500 py-3 rounded-xl text-white font-semibold"
              >
                Continue Learning
              </button>

            </div>

          ))}

        </div>

      )}
    </div>
  );
};

export default MyCourses;