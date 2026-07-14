const express = require("express");

const router = express.Router();

const {

    submitAssignment,
    getAllSubmissions,
    giveMarks,
    giveFeedback,
    getMySubmissions

} = require("../controllers/submissionController");

const protect = require("../middleware/authMiddleware");

const roleCheck = require("../middleware/roleMiddleware");

const upload = require("../middleware/uploadMiddleware");

router.post(

    "/:assignmentId",

    protect,

    roleCheck("student"),

    upload.single("submission"),

    submitAssignment

);

router.get(
    "/assignment/:assignmentId",
    protect,
    roleCheck("teacher", "admin"),
    getAllSubmissions
);


router.put(
    "/marks/:id",
    protect,
    roleCheck("teacher", "admin"),
    giveMarks
);

router.put(
    "/feedback/:id",
    protect,
    roleCheck("teacher", "admin"),
    giveFeedback
);


router.get(
    "/student",
    protect,
    roleCheck("student"),
    getMySubmissions
);

module.exports = router;