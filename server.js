require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASS:", process.env.DB_PASSWORD ? "✅ loaded" : "❌ missing");
// require('crypto').randomBytes(64).toString('hex')  // to generate secret key for Jwt
// Middleware
app.use(cors());
app.use(express.json());

// DB Connection
const sequelize = require("./config/db").default;

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/tasks", require("./routes/tasks"));

// Sync DB & Start Server
sequelize.sync().then(() => {
  app.listen(port, () => console.log(`Server running on port ${port}`));
});
