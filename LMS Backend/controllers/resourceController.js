const Resource = require("../models/Resource");

// ===============================
// Upload Resource
// ===============================
exports.uploadResource = async (req, res) => {
  try {

    const { lecture, title, fileType } = req.body;

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload a file",
      });
    }

    const resource = await Resource.create({
      lecture,
      title,
      fileType,
      fileUrl: req.file.path,
    });

    res.status(201).json({
      success: true,
      message: "Resource Uploaded Successfully",
      resource,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ===============================
// Get Resources by Lecture
// ===============================
exports.getResourcesByLecture = async (req, res) => {
  try {

    const resources = await Resource.find({
      lecture: req.params.lectureId,
    });

    res.status(200).json({
      success: true,
      resources,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ===============================
// Delete Resource
// ===============================
exports.deleteResource = async (req, res) => {
  try {

    const resource = await Resource.findByIdAndDelete(
      req.params.id
    );

    if (!resource) {
      return res.status(404).json({
        success: false,
        message: "Resource Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Resource Deleted Successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};