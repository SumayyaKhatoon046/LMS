const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const { generateHint } = require("../controllers/hintController");

router.post("/", protect, generateHint);

module.exports = router;