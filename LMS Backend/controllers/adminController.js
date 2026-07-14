const User = require("../models/User");
const Course = require("../models/Course");
const Certificate = require("../models/Certificate");

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

    const users = await User.find()
      .select("-password");

    res.status(200).json({

      success: true,

      users

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

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