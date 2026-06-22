const express = require("express");
const app = express();
const connectDB = require("./config/db");
const bookRoutes = require("./routes/bookRoutes");
require("dotenv").config();

// DB connect
connectDB();

// Middlewares

app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 

app.use(express.static("public"));

// View engine
app.set("view engine", "ejs");

// Routes
app.use("/", bookRoutes);

// Server
const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});