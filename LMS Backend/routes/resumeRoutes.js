const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {

  reviewResume

} = require("../controllers/resumeController");

router.get(

  "/",

  protect,

  reviewResume

);

module.exports = router;