const Submission = require("../models/Submission");
const Assignment = require("../models/Assignment");

exports.submitAssignment = async (req, res) => {

    try {

        const assignment = await Assignment.findById(req.params.assignmentId);

        if (!assignment) {
            return res.status(404).json({
                message: "Assignment Not Found"
            });
        }

        const alreadySubmitted = await Submission.findOne({
            assignment: req.params.assignmentId,
            student: req.user._id
        });

        if (alreadySubmitted) {
            return res.status(400).json({
                message: "Assignment Already Submitted"
            });
        }

        const fileUrl = req.file ? req.file.path : "";

        const submission = await Submission.create({

            assignment: req.params.assignmentId,

            student: req.user._id,

            fileUrl

        });

        res.status(201).json({

            message: "Assignment Submitted Successfully",

            submission

        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


exports.getAllSubmissions = async (req, res) => {
    try {

        const submissions = await Submission
            .find({ assignment: req.params.assignmentId })
            .populate("student", "name email");

        res.json(submissions);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


exports.giveMarks = async (req, res) => {

    try {

        const submission = await Submission.findById(req.params.id);

        if (!submission) {
            return res.status(404).json({
                message: "Submission Not Found"
            });
        }

        submission.marks = req.body.marks;

        await submission.save();

        res.status(200).json({
            message: "Marks Added Successfully",
            marks: submission.marks
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};



exports.giveFeedback = async (req, res) => {

    try {

        const submission = await Submission.findById(req.params.id);

        if (!submission) {
            return res.status(404).json({
                message: "Submission Not Found"
            });
        }

        submission.feedback = req.body.feedback;

        await submission.save();

        res.status(200).json({
            message: "Feedback Added Successfully",
            feedback: submission.feedback
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


exports.getMySubmissions = async (req, res) => {

    try {

        const submissions = await Submission
            .find({ student: req.user._id })
            .select("marks feedback")
            .populate("assignment", "title");

        res.json(submissions);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};