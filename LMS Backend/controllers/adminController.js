const User = require("../models/User");
const Course = require("../models/Course");
const Certificate = require("../models/Certificate");
const Notification = require("../models/Notification");

exports.getAdminDashboard = async (req, res) => {

  try {

    const totalUsers = await User.countDocuments();

    const totalStudents = await User.countDocuments({
      role: "student",
    });

    const totalTeachers = await User.countDocuments({
      role: "teacher",
    });

    const totalCourses = await Course.countDocuments();

    const totalCertificates =
      await Certificate.countDocuments();

    const courses = await Course.find();

    let totalEnrollments = 0;

    courses.forEach((course) => {
      totalEnrollments +=
        course.studentsEnrolled.length;
    });

        res.status(200).json({

      success: true,

      dashboard: {

        totalUsers,

        totalStudents,

        totalTeachers,

        totalCourses,

        totalEnrollments,

        totalCertificates

      }

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};


exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
exports.deleteUser = async (req, res) => {

  try {

    const user = await User.findById(req.params.id);

    if (!user) {

      return res.status(404).json({

        success: false,

        message: "User Not Found"

      });

    }

    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({

      success: true,

      message: "User Deleted Successfully"

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};


exports.getAllCourses = async (req, res) => {

  try {

    const courses = await Course.find()
      .populate("instructor", "name email");

    res.status(200).json({

      success: true,

      courses

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};

exports.deleteCourse = async (req, res) => {

  try {

    const course = await Course.findById(req.params.id);

    if (!course) {

      return res.status(404).json({

        success: false,

        message: "Course Not Found"

      });

    }

    await Course.findByIdAndDelete(req.params.id);

    res.status(200).json({

      success: true,

      message: "Course Deleted Successfully"

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};

// ======================================
// Update User Role
// ======================================

exports.updateUserRole = async (req, res) => {

  try {

    const { role } = req.body;

    const user = await User.findById(req.params.id);

    if (!user) {

      return res.status(404).json({

        success: false,

        message: "User Not Found"

      });

    }

    user.role = role;

    await user.save();

    res.status(200).json({

      success: true,

      message: "Role Updated Successfully",

      user

    });

  }

  catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};


// ======================================
// Recent Activity
// ======================================

exports.getRecentActivity = async (req, res) => {

  try {

    const users = await User.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select("name createdAt");

    const courses = await Course.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select("title createdAt");

    const certificates = await Certificate.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select("createdAt");

    const activity = [];

    users.forEach((user) => {

      activity.push({

        type: "User",

        message: `${user.name} registered`,

        createdAt: user.createdAt,

      });

    });

    courses.forEach((course) => {

      activity.push({

        type: "Course",

        message: `Course "${course.title}" created`,

        createdAt: course.createdAt,

      });

    });

    certificates.forEach((certificate) => {

      activity.push({

        type: "Certificate",

        message: "Certificate Generated",

        createdAt: certificate.createdAt,

      });

    });

    activity.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    res.status(200).json({

      success: true,

      activity: activity.slice(0, 10),

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message,

    });

  }

};


// ======================================
// Get All Notifications
// ======================================

exports.getNotifications = async (req, res) => {

  try {

    const notifications = await Notification.find()
      .sort({ createdAt: -1 });

    res.status(200).json({

      success: true,

      notifications,

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message,

    });

  }

};


// ======================================
// Create Notification
// ======================================

exports.createNotification = async (req, res) => {

  try {

    const { title, message, type } = req.body;

    const notification = await Notification.create({

      title,

      message,

      type,

    });

    res.status(201).json({

      success: true,

      notification,

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message,

    });

  }

};