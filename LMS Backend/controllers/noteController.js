const Note = require("../models/Note");

// Save / Update Note
exports.saveNote = async (req, res) => {
  try {
    const { lectureId, content } = req.body;

    let note = await Note.findOne({
      user: req.user._id,
      lecture: lectureId,
    });

    if (note) {
      note.content = content;
      await note.save();
    } else {
      note = await Note.create({
        user: req.user._id,
        lecture: lectureId,
        content,
      });
    }

    res.status(200).json({
      success: true,
      message: "Note Saved Successfully",
      note,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Note
exports.getNote = async (req, res) => {
  try {

    const note = await Note.findOne({
      user: req.user._id,
      lecture: req.params.lectureId,
    });

    res.status(200).json({
      success: true,
      note,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};