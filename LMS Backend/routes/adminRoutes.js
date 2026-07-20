const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");
const roleCheck = require("../middleware/roleMiddleware");

const {
  getAdminDashboard,
  getAllUsers,
  deleteUser,
  getAllCourses,
  deleteCourse,
  updateUserRole,
  getRecentActivity,
  getNotifications,
  createNotification,
} = require("../controllers/adminController");

router.get(
  "/dashboard",
  protect,
  roleCheck("admin"),
  getAdminDashboard
);

router.get(
  "/users",
  protect,
  roleCheck("admin"),
  getAllUsers
);

router.delete(
  "/users/:id",
  protect,
  roleCheck("admin"),
  deleteUser
);

router.get(
  "/courses",
  protect,
  roleCheck("admin"),
  getAllCourses
);

router.delete(
  "/courses/:id",
  protect,
  roleCheck("admin"),
  deleteCourse
);

router.put(

    "/users/:id/role",

    protect,

    roleCheck("admin"),

    updateUserRole

);


router.get(
  "/recent-activity",
  protect,
  roleCheck("admin"),
  getRecentActivity
);


router.get(
  "/notifications",
  protect,
  roleCheck("admin"),
  getNotifications
);

router.post(
  "/notifications",
  protect,
  roleCheck("admin"),
  createNotification
);


module.exports = router;