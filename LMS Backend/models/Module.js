const mongoose = require("mongoose");

const moduleSchema = new mongoose.Schema(
{
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        default: ""
    },

    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true
    },

    order: {
        type: Number,
        required: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("Module", moduleSchema);