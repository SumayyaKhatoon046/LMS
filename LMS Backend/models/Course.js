const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    category: {
        type: String,
        required: true
    },

    // 👇 New Fields

    thumbnail: {
        type: String,
        default: ""
    },

    price: {
        type: Number,
        default: 0
    },
    

    studentsEnrolled: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],

    modules: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Module"
        }
    ],

    lectures: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Lecture"
        }
    ],

    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Course", courseSchema);