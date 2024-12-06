const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "Please enter a valid email address",
    ],
  },
  age: {
    type: Number,
    min: [18, "Age must be at least 18"],
    max: [100, "Age must be at most 100"],
    required: [true, "Age is required"],
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
