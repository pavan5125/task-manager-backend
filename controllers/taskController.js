const Task = require("../models/Task");
// const User = require('../models/User');

exports.getTasks = async (req, res) => {
  // const where = req.user.role === "admin" ? {} : { UserId: req.user.id };
  const where = { UserId: req.user.id }
  const tasks = await Task.findAll({ where });
  res.json(tasks);
};

exports.createTask = async (req, res) => {
  const task = await Task.create({ ...req.body, UserId: req.user.id });
  res.status(201).json(task);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (!task || (req.user.role !== "admin" && task.UserId !== req.user.id)) {
    return res.status(403).json({ message: "Unauthorized" });
  }
  await task.update(req.body);
  res.json(task);
};

exports.deleteTask = async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (!task || (req.user.role !== "admin" && task.UserId !== req.user.id)) {
    return res.status(403).json({ message: "Unauthorized" });
  }
  await task.destroy();
  res.json({ message: "Task deleted" });
};

exports.getAllTasksAdmin = async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
};
