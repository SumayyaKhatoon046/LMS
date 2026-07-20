const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {

  checkCode

} = require("../controllers/codeGuardController");

router.post("/", protect, checkCode);

module.exports = router;