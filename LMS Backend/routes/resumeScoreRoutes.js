const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {

  getResumeScore

} = require("../controllers/resumeScoreController");

router.post("/", protect, getResumeScore);

module.exports = router;