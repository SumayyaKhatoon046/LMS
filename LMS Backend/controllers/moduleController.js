const Module = require("../models/Module");
const Course = require("../models/Course");

// Create Module
exports.createModule = async (req, res) => {
  try {
    const { title, description, course, order } = req.body;

    const module = await Module.create({
      title,
      description,
      course,
      order,
    });

    await Course.findByIdAndUpdate(course, {
      $push: { modules: module._id },
    });

    res.status(201).json({
      success: true,
      message: "Module Created Successfully",
      module,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Modules of a Course
exports.getModulesByCourse = async (req, res) => {
  try {
    const modules = await Module.find({
      course: req.params.courseId,
    }).sort({ order: 1 });

    res.status(200).json({
      success: true,
      modules,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Module
exports.updateModule = async (req, res) => {
  try {
    const module = await Module.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Module Updated Successfully",
      module,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Module
exports.deleteModule = async (req, res) => {
  try {
    await Module.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Module Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};