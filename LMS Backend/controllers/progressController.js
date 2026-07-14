const Progress = require("../models/Progress");
const Lecture = require("../models/Lecture");

exports.markLectureComplete = async (req, res) => {
  console.log("NEW CONTROLLER RUNNING");

  try {
    const { lectureId } = req.body;

    const lecture = await Lecture.findById(lectureId);

    if (!lecture) {
      return res.status(404).json({
        success: false,
        message: "Lecture Not Found",
      });
    }

    let progress = await Progress.findOne({
      user: req.user._id,
      course: lecture.course,
    });

    if (!progress) {
      progress = await Progress.create({
        user: req.user._id,
        course: lecture.course,
        completedLectures: [],
        unlockedLectures: [],
        passedQuizzes: [],
        currentLecture: null,
        progressPercentage: 0,
      });
    }

    // Mark lecture complete
    if (!progress.completedLectures.includes(lecture._id)) {
      progress.completedLectures.push(lecture._id);
    }

    // Current lecture
    progress.currentLecture = lecture._id;

    // Unlock next lecture
    // Unlock next lecture
let nextLecture = null;

if (typeof lecture.order === "number") {

  nextLecture = await Lecture.findOne({
    course: lecture.course,
    order: lecture.order + 1,
  });

  if (
    nextLecture &&
    !progress.unlockedLectures.includes(nextLecture._id)
  ) {
    progress.unlockedLectures.push(nextLecture._id);
  }

}

    // Calculate progress %
    const totalLectures = await Lecture.countDocuments({
      course: lecture.course,
    });

    progress.progressPercentage =
      totalLectures === 0
        ? 0
        : Math.round(
            (progress.completedLectures.length / totalLectures) * 100
          );

    await progress.save();

    res.status(200).json({
      success: true,
      message: "Lecture Completed Successfully",
      progress,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getCourseProgress = async (req, res) => {
  try {
    const progress = await Progress.findOne({
      user: req.user._id,
      course: req.params.courseId,
    });

    if (!progress) {
      return res.status(200).json({
        success: true,
        completedLectures: [],
        unlockedLectures: [],
        currentLecture: null,
        progressPercentage: 0,
      });
    }

    res.status(200).json({
      success: true,
      completedLectures: progress.completedLectures,
      unlockedLectures: progress.unlockedLectures,
      currentLecture: progress.currentLecture,
      progressPercentage: progress.progressPercentage,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};