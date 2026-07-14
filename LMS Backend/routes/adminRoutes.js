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
  updateUserRole
} = require("../controllers/adminController");

router.get(
  "/dashboard",
  protect,
  roleCheck("admin"),
  getAdminDashboard
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

module.exports = router;