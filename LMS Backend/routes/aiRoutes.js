const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const { generateRoadmap } = require("../controllers/aiController");

const { generateInterview } = require("../controllers/interviewController");

router.post(
  "/roadmap",
  protect,
  generateRoadmap
);

router.post(
  "/skill-gap",
  protect,
  generateRoadmap
);

router.post(
  "/interview",
  protect,
  generateInterview
);


module.exports = router;