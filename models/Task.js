const { DataTypes } = require("sequelize");
const sequelize = require("../config/db").default;
const User = require("./User");

const Task = sequelize.define("Task", {
  title: DataTypes.STRING,
  attachment: DataTypes.STRING,
  description: DataTypes.TEXT,
  status: {
    type: DataTypes.ENUM("Pending", "In Progress", "Completed"),
    defaultValue: "Pending",
  },
});

Task.belongsTo(User);
User.hasMany(Task);

module.exports = Task;