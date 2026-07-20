const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {

  getCareerPrediction

} = require("../controllers/careerController");

router.get(

  "/",

  protect,

  getCareerPrediction

);

module.exports = router;