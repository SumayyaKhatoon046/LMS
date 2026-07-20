const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {

  getPlacementScore

} = require("../controllers/placementController");

router.get(

  "/",

  protect,

  getPlacementScore

);

module.exports = router;