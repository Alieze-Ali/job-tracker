const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    display_name: String,
})

module.exports = mongoose.model("Users", userSchema)