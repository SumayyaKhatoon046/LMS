const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const protect = require("../middleware/authMiddleware");
const User = require("../models/User");

const {
    getStudentDashboard,
    updateProfile,
    uploadProfileImage,
    addToWishlist,
    getWishlist,
    removeFromWishlist,
} = require("../controllers/userController");


// Get Profile
router.get("/profile", protect, (req, res) => {

    res.json({
        user: req.user
    });

});


// Get My Courses
router.get("/mycourses", protect, async (req, res) => {

    try {

        const user = await User.findById(req.user._id)
            .populate("enrolledCourses");


        res.json({
            success: true,
            courses: user.enrolledCourses
        });


    } catch(error) {

        res.status(500).json({
            message: error.message
        });

    }

});


// Student Dashboard
router.get(
    "/dashboard",
    protect,
    getStudentDashboard
);

router.put(
  "/profile",
  protect,
  updateProfile
);

router.put(
    "/upload-profile",
    protect,
    upload.single("image"),
    uploadProfileImage
);

// ==========================
// Wishlist
// ==========================

// Add To Wishlist
router.post(
    "/wishlist/:courseId",
    protect,
    addToWishlist
);

// Get Wishlist
router.get(
    "/wishlist",
    protect,
    getWishlist
);

// Remove From Wishlist
router.delete(
    "/wishlist/:courseId",
    protect,
    removeFromWishlist
);


module.exports = router;