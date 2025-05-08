const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  date: Date,
  capacity: Number,
  price: Number,
  organizer: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Event", eventSchema);