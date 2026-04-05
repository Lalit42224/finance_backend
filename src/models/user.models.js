const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minlength: [3, "Name must be at least 3 characters"],
    maxlength: [30, "Name cannot exceed 30 characters"]
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
    match: [
      /^\S+@\S+\.\S+$/,
      "Please use a valid email address"
    ]
  },

  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [5, "Password must be at least 5 characters"],
    select: false
  },

  role: {
    type: String,
    enum: {
      values: ["viewer", "analyst", "admin"],
      message: "Role must be viewer, analyst or admin"
    },
    default: "viewer"
  },

  status: {
    type: String,
    enum: {
      values: ["active", "inactive"],
      message: "Status must be active or inactive"
    },
    default: "active"
  }

}, {
  timestamps: true
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;