const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({

    course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true
},

lecture: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lecture",
    required: true
},

passingMarks: {
    type: Number,
    default: 70
},

    title: {
        type: String,
        required: true
    },

    questions: [
        {
            question: String,

            options: [String],

            correctAnswer: String
        }
    ]

}, {
    timestamps: true
});

module.exports = mongoose.model(
    "Quiz",
    quizSchema
);