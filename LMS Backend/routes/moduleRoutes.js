const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const roleCheck = require("../middleware/roleMiddleware");

const {
  createModule,
  getModulesByCourse,
  updateModule,
  deleteModule,
} = require("../controllers/moduleController");

// Create Module
router.post(
  "/",
  protect,
  roleCheck("teacher", "admin"),
  createModule
);

// Get Modules By Course
router.get(
  "/course/:courseId",
  protect,
  getModulesByCourse
);

// Update Module
router.put(
  "/:id",
  protect,
  roleCheck("teacher", "admin"),
  updateModule
);

// Delete Module
router.delete(
  "/:id",
  protect,
  roleCheck("teacher", "admin"),
  deleteModule
);

module.exports = router;