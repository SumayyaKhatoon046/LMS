const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const roleCheck = require("../middleware/roleMiddleware");
const upload = require("../middleware/uploadMiddleware");

const {
  uploadResource,
  getResourcesByLecture,
  deleteResource,
} = require("../controllers/resourceController");

// Upload Resource (Teacher/Admin)
router.post(
  "/",
  protect,
  roleCheck("teacher", "admin"),
  upload.single("file"),
  uploadResource
);

// Get Resources of Lecture
router.get(
  "/lecture/:lectureId",
  protect,
  getResourcesByLecture
);

// Delete Resource
router.delete(
  "/:id",
  protect,
  roleCheck("teacher", "admin"),
  deleteResource
);

module.exports = router;