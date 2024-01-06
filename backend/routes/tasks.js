const express = require("express");
const Task = require("../models/task");

const router = express.Router();

// Define API routes for CRUD operations
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new task
router.post("/", async (req, res) => {
  const task = {
    title: req.body.title,
    completed: false,
  };

  try {
    Task.create(task);
    res.json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a task
router.put("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    task.completed = !task.completed;
    task.save();
    res.json(task);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a task
router.delete("/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    res.json(task);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
