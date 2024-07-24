const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    confirmPassword: {
        type: String,
        required: true,
    },
}, {
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)