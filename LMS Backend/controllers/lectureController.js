const Lecture = require("../models/Lecture");
const Course = require("../models/Course");
const Module = require("../models/Module");

// ===========================
// Add Lecture
// ===========================
exports.addLecture = async (req, res) => {
  try {

    const {
      title,
      module,
      order
    } = req.body;

    const videoUrl = req.file ? req.file.path : "";

    const course = await Course.findById(req.params.courseId);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course Not Found"
      });
    }

    const moduleData = await Module.findById(module);

    if (!moduleData) {
      return res.status(404).json({
        success: false,
        message: "Module Not Found"
      });
    }

    const lecture = await Lecture.create({

      title,

      videoUrl,

      course: req.params.courseId,

      module,

      order

    });

    course.lectures.push(lecture._id);

    await course.save();

    res.status(201).json({

      success: true,

      message: "Lecture Added Successfully",

      lecture

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }
};

// ===========================
// Get All Lectures Of Course
// ===========================
exports.getLectures = async (req, res) => {

  try {

    const lectures = await Lecture.find({

      course: req.params.courseId

    })
      .populate("module", "title")
      .sort({ order: 1 });

    res.status(200).json({

      success: true,

      lectures

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};

// ===========================
// Get Lectures By Module
// ===========================
exports.getLecturesByModule = async (req, res) => {

  try {

    const lectures = await Lecture.find({

      module: req.params.moduleId

    }).sort({ order: 1 });

    res.status(200).json({

      success: true,

      lectures

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};

// ===========================
// Update Lecture
// ===========================
exports.updateLecture = async (req, res) => {

  try {

    const lecture = await Lecture.findByIdAndUpdate(

      req.params.id,

      req.body,

      {
        new: true
      }

    );

    if (!lecture) {

      return res.status(404).json({

        success: false,

        message: "Lecture Not Found"

      });

    }

    res.status(200).json({

      success: true,

      message: "Lecture Updated Successfully",

      lecture

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};

// ===========================
// Delete Lecture
// ===========================
exports.deleteLecture = async (req, res) => {

  try {

    const lecture = await Lecture.findById(req.params.id);

    if (!lecture) {

      return res.status(404).json({

        success: false,

        message: "Lecture Not Found"

      });

    }

    await Course.findByIdAndUpdate(

      lecture.course,

      {

        $pull: {

          lectures: lecture._id

        }

      }

    );

    await Lecture.findByIdAndDelete(req.params.id);

    res.status(200).json({

      success: true,

      message: "Lecture Deleted Successfully"

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};