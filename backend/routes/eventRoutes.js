const express = require("express");
const router = express.Router();
const Event = require("../model/Event");

// GET all events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find().populate("createdBy", "username email");
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// POST a new event
router.post("/", async (req, res) => {
  const { name, date, location, description } = req.body;

  if (!name || !date || !location || !description) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newEvent = new Event({
      name,
      date,
      location,
      description,
      createdBy: req.body.createdBy, // Use the sender's data if required (e.g., passing user ID in the request)
    });

    await newEvent.save();
    res.status(201).json({ message: "Event created successfully", event: newEvent });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT to update event
router.put("/:id", async (req, res) => {
  const { name, date, location, description } = req.body;

  if (!name || !date || !location || !description) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    event.name = name;
    event.date = date;
    event.location = location;
    event.description = description;

    await event.save();
    res.json({ message: "Event updated successfully", event });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
