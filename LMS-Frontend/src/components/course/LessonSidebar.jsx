import { useEffect, useState } from "react";
import {
  FaCheckCircle,
  FaLock,
  FaPlayCircle,
} from "react-icons/fa";

import { getCourseProgress } from "../../services/progressService";

const LessonSidebar = ({
  courseId,
  lectures,
  currentLecture,
  setCurrentLecture,
  refreshProgress,
}) => {

  const [progress, setProgress] = useState(null);

  const fetchProgress = async () => {
    try {
      const data = await getCourseProgress(courseId);
      setProgress(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProgress();
  }, [courseId, refreshProgress]);

  return (
    <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6">

      <h2 className="text-2xl text-white font-bold mb-8">
        Course Content
      </h2>

      <div className="space-y-4">

        {lectures.map((lecture, index) => {

          // Completed lecture hamesha unlocked rahega
          const completed =
            progress?.completedLectures?.includes(
              lecture._id
            ) || false;

          // Next unlocked lecture
          const unlocked =
            completed ||
            progress?.unlockedLectures?.includes(
              lecture._id
            );

          return (

            <div
              key={lecture._id}
              onClick={() => {
                if (unlocked) {
                  setCurrentLecture(lecture);
                }
              }}
              className={`p-4 rounded-xl transition
              ${
                currentLecture?._id === lecture._id
                  ? "bg-cyan-600"
                  : "bg-slate-800 hover:bg-slate-700"
              }
              ${
                unlocked
                  ? "cursor-pointer"
                  : "opacity-60 cursor-not-allowed"
              }`}
            >

              <div className="flex items-center gap-3">

                {!unlocked ? (
                  <FaLock className="text-red-400" />
                ) : completed ? (
                  <FaCheckCircle className="text-green-400" />
                ) : (
                  <FaPlayCircle className="text-cyan-400" />
                )}

                <div>

                  <h3 className="text-white font-medium">
                    {index + 1}. {lecture.title}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    Video Lecture
                  </p>

                </div>

              </div>

            </div>

          );

        })}

      </div>

      {progress && (
        <div className="mt-8">

          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-400">
              Course Progress
            </span>

            <span className="text-cyan-400 font-semibold">
              {progress.progressPercentage}%
            </span>
          </div>

          <div className="w-full h-3 bg-slate-700 rounded-full">

            <div
              className="h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-500"
              style={{
                width: `${progress.progressPercentage}%`,
              }}
            />

          </div>

        </div>
      )}

    </div>
  );
};

export default LessonSidebar;