const express = require("express");
const router = express.Router();

const {
    addAssignment,
    getAllAssignments,
    getAssignmentById,
    deleteAssignment,
    updateAssignment
} = require("../controllers/assignmentController");

const protect = require("../middleware/authMiddleware");
const roleCheck = require("../middleware/roleMiddleware");
const upload = require("../middleware/uploadMiddleware");

// Add Assignment
router.post(
    "/:courseId",
    protect,
    roleCheck("teacher", "admin"),
    upload.single("assignment"),
    addAssignment
);

// Get All Assignments of Course
router.get("/course/:courseId", getAllAssignments);

// Get Assignment By ID
router.get("/:id", getAssignmentById);


router.get("/course/:courseId", getAllAssignments);

router.delete(
    "/:id",
    protect,
    roleCheck("teacher", "admin"),
    deleteAssignment
);

router.put(
    "/:id",
    protect,
    roleCheck("teacher", "admin"),
    upload.single("assignment"),
    updateAssignment
);

module.exports = router;