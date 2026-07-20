const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {

  startMockInterview

} = require("../controllers/mockInterviewController");

router.post("/", protect, startMockInterview);

module.exports = router;