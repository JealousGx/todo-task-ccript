const mongoose = require("mongoose");

// Define schema for task
const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

// Define more advanced schema or update the existing one.

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
