require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const guestRoutes = require("./routes/guestRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/eventvite", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("Mongo error:", err));

// ✅ Root route
app.get("/", (req, res) => {
  res.send("Eventvite Backend is working ✅");
});

// Guest routes
app.use("/api/guests", guestRoutes);

// Start server
app.listen(5000, () => console.log("Backend running at http://localhost:5000"));
