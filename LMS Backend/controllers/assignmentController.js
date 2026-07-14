const Assignment = require("../models/Assignment");
const Course = require("../models/Course");

exports.addAssignment = async (req, res) => {
    try {

        const { title, description, dueDate } = req.body;

        const fileUrl = req.file ? req.file.path : "";

        const course = await Course.findById(req.params.courseId);

        if (!course) {
            return res.status(404).json({
                message: "Course Not Found"
            });
        }

        const assignment = await Assignment.create({
            title,
            description,
            fileUrl,
            dueDate,
            course: req.params.courseId
        });

        res.status(201).json({
            message: "Assignment Added Successfully",
            assignment
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


exports.getAssignmentById = async (req, res) => {
    try {

        const assignment = await Assignment.findById(req.params.id);

        if (!assignment) {
            return res.status(404).json({
                message: "Assignment Not Found"
            });
        }

        res.status(200).json(assignment);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


exports.getAllAssignments = async (req, res) => {
    try {

        const assignments = await Assignment.find({
            course: req.params.courseId
        });

        res.status(200).json({
            success: true,
            assignments
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


exports.deleteAssignment = async (req, res) => {
    try {

        const assignment = await Assignment.findById(req.params.id);

        if (!assignment) {
            return res.status(404).json({
                message: "Assignment Not Found"
            });
        }

        await Assignment.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Assignment Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


exports.updateAssignment = async (req, res) => {
    try {

        const assignment = await Assignment.findById(req.params.id);

        if (!assignment) {
            return res.status(404).json({
                message: "Assignment Not Found"
            });
        }

        assignment.title = req.body.title || assignment.title;
        assignment.description = req.body.description || assignment.description;
        assignment.dueDate = req.body.dueDate || assignment.dueDate;

        if (req.file) {
            assignment.fileUrl = req.file.path;
        }

        await assignment.save();

        res.status(200).json({
            message: "Assignment Updated Successfully",
            assignment
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};
