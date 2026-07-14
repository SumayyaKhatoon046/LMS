const mongoose = require("mongoose");

const lectureSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    videoUrl: {
        type: String,
        required: true
    },

    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true
    },

    module: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Module",
    required: true
},


    // Lecture order
    order: {
        type: Number,
        required: true
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Lecture", lectureSchema);