const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({

    assignment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Assignment",
        required: true
    },

    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    fileUrl: {
        type: String,
        required: true
    },

    marks: {
        type: Number,
        default: 0
    },

    feedback: {
        type: String,
        default: ""
    },

    submittedAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Submission", submissionSchema);