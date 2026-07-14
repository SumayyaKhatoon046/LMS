const express = require("express");
const router = express.Router();

const {
    generateCertificate,
    getMyCertificates,
    downloadCertificate,
    checkCertificate
} = require("../controllers/certificateController");

const protect = require("../middleware/authMiddleware");
const roleCheck = require("../middleware/roleMiddleware");

// Generate Certificate
router.post(
    "/generate",
    protect,
    roleCheck("student"),
    generateCertificate
);

// Get My Certificates
router.get(
    "/my-certificates",
    protect,
    getMyCertificates
);

// Check Certificate Status
router.get(
    "/check/:courseId",
    protect,
    roleCheck("student"),
    checkCertificate
);

// Download Certificate
router.get(
    "/download/:courseId",
    protect,
    roleCheck("student"),
    downloadCertificate
);

module.exports = router;