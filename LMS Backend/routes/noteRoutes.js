const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  saveNote,
  getNote,
} = require("../controllers/noteController");

// Save / Update Note
router.post(
  "/",
  protect,
  saveNote
);

// Get Note by Lecture
router.get(
  "/:lectureId",
  protect,
  getNote
);

module.exports = router;