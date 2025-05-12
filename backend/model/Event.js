const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Event Schema
const eventSchema = new Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  createdBy: { 
    type: Schema.Types.ObjectId, 
    ref: "User",  // Reference to User model
    required: true 
  },
});

// Creating the Event model
const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
