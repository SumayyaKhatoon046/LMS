import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getCourseById } from "../services/courseService";
import { getLectures } from "../services/lectureService";
import { getQuizByLecture } from "../services/quizService";
import { getCourseProgress } from "../services/progressService";

import {
  generateCertificate,
  downloadCertificate,
  checkCertificate,
} from "../services/certificateService";

import VideoPlayer from "../components/course/VideoPlayer";
import LessonSidebar from "../components/course/LessonSidebar";
import Notes from "../components/course/Notes";
import Resources from "../components/course/Resources";
import QuizModal from "../components/course/QuizModal";
import ReviewForm from "../components/course/ReviewForm";
import ReviewList from "../components/course/ReviewList";

const CourseDetails = () => {
  const { id } = useParams();

  const [course, setCourse] = useState(null);

  const [lectures, setLectures] = useState([]);

  const [currentLecture, setCurrentLecture] =
    useState(null);

  const [quiz, setQuiz] = useState(null);

  const [showQuiz, setShowQuiz] = useState(false);

  const [refreshReviews, setRefreshReviews] =
    useState(0);

  const [refreshProgress, setRefreshProgress] =
    useState(0);

  const [progress, setProgress] = useState(null);

  const [certificateGenerated, setCertificateGenerated] =
    useState(false);

  const [certificateLoading, setCertificateLoading] =
    useState(false);

  // ===========================
  // Fetch Course
  // ===========================
  const fetchCourse = async () => {
    try {
      const data = await getCourseById(id);
      setCourse(data);
    } catch (err) {
      console.log(err);
    }
  };

  // ===========================
  // Fetch Lectures
  // ===========================
  const fetchLectures = async () => {
    try {
      const data = await getLectures(id);

      setLectures(data.lectures || []);

      if (data.lectures.length > 0) {
        setCurrentLecture(
          (prev) => prev || data.lectures[0]
        );
      }

    } catch (err) {
      console.log(err);
    }
  };

  // ===========================
  // Fetch Progress
  // ===========================
  const fetchProgress = async () => {
    try {
      const data = await getCourseProgress(id);
      setProgress(data);
    } catch (err) {
      console.log(err);
    }
  };

  // ===========================
  // Check Certificate
  // ===========================
  const checkCertificateStatus = async () => {
    try {
      const data = await checkCertificate(id);
      setCertificateGenerated(data.generated);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {

    fetchCourse();

    fetchLectures();

    fetchProgress();

    checkCertificateStatus();

  }, [id, refreshProgress]);

  // ===========================
  // Open Quiz
  // ===========================
  const openQuiz = async () => {

    try {

      if (!currentLecture) return;

      const data =
        await getQuizByLecture(currentLecture._id);

      setQuiz(data);

      setShowQuiz(true);

    } catch (err) {

      console.log(err);

      alert("Quiz Not Found");

    }

  };

  // ===========================
  // Lecture Complete
  // ===========================
  const handleLectureComplete = async () => {

    await fetchLectures();

    await fetchProgress();

    setRefreshProgress((prev) => prev + 1);

    openQuiz();

  };

  // ===========================
  // Quiz Passed
  // ===========================
  const quizPassed = async () => {

    alert("🎉 Quiz Passed");

    setShowQuiz(false);

    await fetchLectures();

    await fetchProgress();

    setRefreshProgress((prev) => prev + 1);

    setRefreshReviews((prev) => prev + 1);

  };

  // ===========================
  // Review Added
  // ===========================
  const reviewAdded = () => {

    setRefreshReviews((prev) => prev + 1);

  };

  // ===========================
  // Generate Certificate
  // ===========================
  const handleGenerateCertificate = async () => {

    try {

      setCertificateLoading(true);

      await generateCertificate(id);

      alert("🎉 Certificate Generated Successfully");

      setCertificateGenerated(true);

    } catch (err) {

      console.log(err);

      alert(
        err.response?.data?.message ||
        "Failed to Generate Certificate"
      );

    } finally {

      setCertificateLoading(false);

    }

  };


    if (!course) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left Side */}
          <div className="lg:col-span-2">

            <VideoPlayer
              currentLecture={currentLecture}
              onComplete={handleLectureComplete}
            />

            <Notes currentLecture={currentLecture} />

            <Resources currentLecture={currentLecture} />

            <div className="mt-8">

              <h1 className="text-4xl font-bold text-white">
                {course.title}
              </h1>

              <p className="text-gray-400 mt-5 leading-8">
                {course.description}
              </p>

              {/* Certificate */}

              {progress?.progressPercentage === 100 && (

                <div className="mt-10">

                  {certificateGenerated ? (

                    <button
                      onClick={() => downloadCertificate(id)}
                      className="bg-green-600 hover:bg-green-500 px-8 py-3 rounded-xl text-white font-semibold"
                    >
                      Download Certificate
                    </button>

                  ) : (

                    <button
                      onClick={handleGenerateCertificate}
                      disabled={certificateLoading}
                      className="bg-yellow-500 hover:bg-yellow-400 px-8 py-3 rounded-xl text-black font-bold"
                    >
                      {certificateLoading
                        ? "Generating..."
                        : "Generate Certificate"}
                    </button>

                  )}

                </div>

              )}

            </div>

            {/* ================= Reviews ================= */}

            <ReviewForm
              courseId={id}
              onReviewAdded={reviewAdded}
            />

            <ReviewList
              courseId={id}
              refresh={refreshReviews}
            />

          </div>

          {/* Sidebar */}

          <LessonSidebar
            courseId={id}
            lectures={lectures}
            currentLecture={currentLecture}
            setCurrentLecture={setCurrentLecture}
            refreshProgress={refreshProgress}
          />

        </div>

      </div>

      {/* Quiz */}

      {showQuiz && quiz && (

        <QuizModal
          quiz={quiz}
          onClose={() => setShowQuiz(false)}
          onPassed={quizPassed}
        />

      )}

    </div>
  );
};

export default CourseDetails;