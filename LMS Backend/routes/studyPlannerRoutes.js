const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {

  getStudyPlan

} = require("../controllers/studyPlannerController");

router.get(

  "/",

  protect,

  getStudyPlan

);

module.exports = router;