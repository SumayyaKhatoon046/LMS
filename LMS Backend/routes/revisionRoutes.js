const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {

  getRevisionReminder

} = require("../controllers/revisionController");

router.get(

  "/",

  protect,

  getRevisionReminder

);

module.exports = router;