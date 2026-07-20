const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {

  generateInterview

} = require("../controllers/interviewController");

router.post(

  "/",

  protect,

  generateInterview

);

module.exports = router;