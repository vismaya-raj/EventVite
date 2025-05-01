const mongoose = require("mongoose");

const guestSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  eventType: String,
  eventDate: String,
  time: String,
  description: String,
});

module.exports = mongoose.model("Guest", guestSchema);
