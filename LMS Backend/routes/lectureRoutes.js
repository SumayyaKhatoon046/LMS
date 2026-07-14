const express = require("express");
const router = express.Router();

const {
    addLecture,
    getLectures,
    getLecturesByModule,
    deleteLecture,
    updateLecture
} = require("../controllers/lectureController");

const protect = require("../middleware/authMiddleware");
const roleCheck = require("../middleware/roleMiddleware");
const upload = require("../middleware/uploadMiddleware");

// Add Lecture
router.post(
    "/:courseId",
    protect,
    roleCheck("teacher", "admin"),
    upload.single("video"),
    addLecture
);

// Get Lectures of Course
router.get("/:courseId", getLectures);

// Get Lectures By Module
router.get("/module/:moduleId", getLecturesByModule);

// Delete Lecture
router.delete(
    "/:id",
    protect,
    roleCheck("teacher", "admin"),
    deleteLecture
);

// Update Lecture
router.put(
    "/:id",
    protect,
    roleCheck("teacher", "admin"),
    updateLecture
);

module.exports = router;