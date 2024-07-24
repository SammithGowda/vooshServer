const mongoose = require("mongoose")
const taskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: true,
    }, description: {
        type: String,
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model("Task", taskSchema)