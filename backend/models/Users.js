const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please provide your email."],
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Please provide a valid email."],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please provide a password."],
        minLength: 6
    },
    display_name: {
        type: String,
        required: [true, "Please provide your name."],
        maxLength: 50,
        minLength: 2
    },
})

module.exports = mongoose.model("Users", UserSchema)