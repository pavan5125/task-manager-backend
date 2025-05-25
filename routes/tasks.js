const router = require("express").Router();
const auth = require("../middleware/auth");
const role = require("../middleware/role");
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  getAllTasksAdmin,
} = require("../controllers/taskController");

// Admin-only route
router.get("/admin", auth, role("admin"), getAllTasksAdmin);

// User/Admin route
router.get("/", auth, getTasks);
router.post("/", auth, createTask);
router.put("/:id", auth, updateTask);
router.delete("/:id", auth, deleteTask);

module.exports = router;
