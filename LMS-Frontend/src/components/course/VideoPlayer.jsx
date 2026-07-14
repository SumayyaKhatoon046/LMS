import { useRef, useState, useEffect } from "react";

import { markLectureComplete } from "../../services/progressService";
import { getQuizByLecture } from "../../services/quizService";

import QuizModal from "./QuizModal";

const VideoPlayer = ({ currentLecture, onComplete }) => {
  const videoRef = useRef(null);

  const [watchPercent, setWatchPercent] = useState(0);
  const [loading, setLoading] = useState(false);

  const [quiz, setQuiz] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);

  useEffect(() => {
    if (currentLecture) {
      setWatchPercent(0);
      setQuiz(null);
      setShowQuiz(false);
    }
  }, [currentLecture]);

  if (!currentLecture) {
    return (
      <div className="bg-slate-900 rounded-3xl h-[450px] flex items-center justify-center text-white">
        Select a Lecture
      </div>
    );
  }

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;

    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration;

    if (!duration) return;

    const percent = Math.floor((current / duration) * 100);
    setWatchPercent(percent);
  };

  const markComplete = async () => {
    try {
      setLoading(true);

      // Save progress
      await markLectureComplete(currentLecture._id);

      // Refresh sidebar & progress first
      if (onComplete) {
        await onComplete();
      }

      // Then load quiz
      try {
        const quizData = await getQuizByLecture(currentLecture._id);

        if (quizData) {
          setQuiz(quizData);
          setShowQuiz(true);
        }
      } catch (err) {
        console.log("Quiz Not Found");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800">
        <video
          ref={videoRef}
          controls
          className="w-full aspect-video"
          onTimeUpdate={handleTimeUpdate}
        >
          <source
            src={currentLecture.videoUrl}
            type="video/mp4"
          />
        </video>

        <div className="p-6">
          <h2 className="text-3xl font-bold text-white">
            {currentLecture.title}
          </h2>

          <div className="mt-6">
            <div className="w-full h-3 rounded-full bg-slate-700">
              <div
                className="bg-cyan-500 h-3 rounded-full transition-all duration-300"
                style={{
                  width: `${watchPercent}%`,
                }}
              />
            </div>

            <p className="text-gray-300 mt-2">
              Watched {watchPercent}%
            </p>
          </div>

          <button
            disabled={loading || watchPercent < 90}
            onClick={markComplete}
            className={`mt-8 px-6 py-3 rounded-xl text-white font-semibold transition ${
              watchPercent >= 90
                ? "bg-green-600 hover:bg-green-500"
                : "bg-slate-700 cursor-not-allowed"
            }`}
          >
            {loading ? "Saving..." : "Mark as Complete"}
          </button>
        </div>
      </div>

      {showQuiz && quiz && (
        <QuizModal
          quiz={quiz}
          onClose={() => setShowQuiz(false)}
          onPassed={async () => {
            setShowQuiz(false);

            if (onComplete) {
              await onComplete();
            }
          }}
        />
      )}
    </>
  );
};

export default VideoPlayer;