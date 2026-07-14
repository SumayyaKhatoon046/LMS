const Course = require("../models/Course");
const User = require("../models/User");

const Progress = require("../models/Progress");
const Lecture = require("../models/Lecture");

exports.addCourse = async (req, res) => {
    try {

        const { title, description, category } = req.body;
        const thumbnail = req.file ? req.file.path : "";


        const course = await Course.create({

            title,

            description,

            instructor: req.user._id,

            category,

            thumbnail

        });


        res.status(201).json({

            message: "Course Added Successfully",

            course

        });


    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }
};

exports.getAllCourses = async (req, res) => {

  try {

    const {
      search,
      category,
      sort
    } = req.query;

    let filter = {};

    // ==========================
    // Search
    // ==========================

    if (search) {

      filter.title = {
        $regex: search,
        $options: "i"
      };

    }

    // ==========================
    // Category
    // ==========================

    if (category && category !== "All") {

      filter.category = category;

    }

    let query = Course.find(filter);

    // ==========================
    // Sorting
    // ==========================

    if (sort === "newest") {

      query = query.sort({
        createdAt: -1
      });

    }

    else if (sort === "oldest") {

      query = query.sort({
        createdAt: 1
      });

    }

    else if (sort === "a-z") {

      query = query.sort({
        title: 1
      });

    }

    else if (sort === "z-a") {

      query = query.sort({
        title: -1
      });

    }

    const courses = await query;

    res.status(200).json({

      success: true,

      total: courses.length,

      courses

    });

  }

  catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};



exports.getCourseById = async (req, res) => {
  try {

    const course = await Course.findById(req.params.id)
      .populate("instructor", "name email")
      .populate("studentsEnrolled", "name");

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course Not Found",
      });
    }

    res.status(200).json({
      success: true,
      course,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};



exports.updateCourse = async (req, res) => {
    try {

        const updatedCourse = await Course.findByIdAndUpdate(
            req.params.id,
            req.body,
            { returnDocument: "after" }
        );

        if (!updatedCourse) {
            return res.status(404).json({
                message: "Course Not Found"
            });
        }

        res.status(200).json({
            message: "Course Updated Successfully",
            updatedCourse
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


exports.deleteCourse = async (req, res) => {
    try {

        const deletedCourse = await Course.findByIdAndDelete(req.params.id);

        if (!deletedCourse) {
            return res.status(404).json({
                message: "Course Not Found"
            });
        }

        res.status(200).json({
            message: "Course Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};



exports.enrollCourse = async (req, res) => {

    try {

        const courseId = req.params.id;

        const user = await User.findById(req.user._id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User Not Found"
            });
        }

        const course = await Course.findById(courseId);

        if (!course) {
            return res.status(404).json({
                success: false,
                message: "Course Not Found"
            });
        }

        // Already Enrolled

        if (user.enrolledCourses.includes(courseId)) {
            return res.status(400).json({
                success: false,
                message: "You are already enrolled in this course."
            });
        }

        // Enroll User

        user.enrolledCourses.push(courseId);
        course.studentsEnrolled.push(user._id);

        await user.save();
        await course.save();

        // ==========================
        // CREATE INITIAL PROGRESS
        // ==========================

        let progress = await Progress.findOne({
            user: user._id,
            course: course._id
        });

        if (!progress) {

            const firstLecture = await Lecture.findOne({
                course: course._id
            }).sort({ order: 1 });

            progress = await Progress.create({

                user: user._id,

                course: course._id,

                completedLectures: [],

                unlockedLectures: firstLecture
                    ? [firstLecture._id]
                    : [],

                passedQuizzes: [],

                currentLecture: firstLecture
                    ? firstLecture._id
                    : null,

                progressPercentage: 0

            });

        }

        res.status(200).json({

            success: true,

            message: "Course Enrolled Successfully",

            progress

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};


exports.getMyCourses = async (req, res) => {

  try {

    const user = await User.findById(req.user._id)
      .populate("enrolledCourses");

    res.status(200).json({

      success: true,

      courses: user.enrolledCourses

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};
