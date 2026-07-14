const Review = require("../models/Review");
const Course = require("../models/Course");

// ========================================
// Add Review
// ========================================
exports.addReview = async (req, res) => {
  try {

    const { courseId, rating, comment } = req.body;

    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course Not Found",
      });
    }

    const existingReview = await Review.findOne({
      course: courseId,
      student: req.user._id,
    });

    if (existingReview) {
      return res.status(400).json({
        success: false,
        message: "You have already reviewed this course",
      });
    }

    const review = await Review.create({
      course: courseId,
      student: req.user._id,
      rating,
      comment,
    });

    res.status(201).json({
      success: true,
      message: "Review Added Successfully",
      review,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ========================================
// Get Reviews of Course
// ========================================
exports.getCourseReviews = async (req, res) => {
  try {

    const reviews = await Review.find({
      course: req.params.courseId,
    })
      .populate("student", "name")
      .sort({ createdAt: -1 });

    const totalReviews = reviews.length;

    const averageRating =
      totalReviews === 0
        ? 0
        : (
            reviews.reduce(
              (sum, item) => sum + item.rating,
              0
            ) / totalReviews
          ).toFixed(1);

    res.status(200).json({
      success: true,
      totalReviews,
      averageRating,
      reviews,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ========================================
// Delete Review
// ========================================
exports.deleteReview = async (req, res) => {
  try {

    const review = await Review.findById(req.params.id);

    if (!review) {
      return res.status(404).json({
        success: false,
        message: "Review Not Found",
      });
    }

    if (review.student.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized",
      });
    }

    await Review.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Review Deleted Successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};