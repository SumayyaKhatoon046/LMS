const express = require("express");
const router = express.Router();

const {
  addReview,
  getCourseReviews,
  deleteReview,
} = require("../controllers/reviewController");

const protect = require("../middleware/authMiddleware");
const roleCheck = require("../middleware/roleMiddleware");

// Add Review
router.post(
  "/",
  protect,
  roleCheck("student"),
  addReview
);

// Get Reviews of Course
router.get(
  "/:courseId",
  getCourseReviews
);

// Delete Review
router.delete(
  "/:id",
  protect,
  roleCheck("student"),
  deleteReview
);

module.exports = router;