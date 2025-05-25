const { DataTypes } = require("sequelize");
const sequelize = require("../config/db").default;

const User = sequelize.define("User", {
  email: { type: DataTypes.STRING, unique: true },
  password: DataTypes.STRING,
  role: { type: DataTypes.STRING, defaultValue: "user" },
});

module.exports = User;