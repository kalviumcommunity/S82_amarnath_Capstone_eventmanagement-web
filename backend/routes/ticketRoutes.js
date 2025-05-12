const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/authMiddleware");
router.post("/", verifyToken, async (req, res) => {
  const { eventId, ticketCount } = req.body;

  if (!eventId || !ticketCount || ticketCount <= 0) {
    return res.status(400).json({ message: "Invalid event or ticket count" });
  }

  try {
    await bookTicket(req.user._id, eventId, ticketCount);
    res.status(201).json({ message: "Ticket(s) booked successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.get("/me", verifyToken, async (req, res) => {
  try {
    const tickets = await getUserTickets(req.user._id);
    res.status(200).json(tickets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.put("/:id", verifyToken, async (req, res) => {
  const { ticketCount } = req.body;

  if (!ticketCount || ticketCount <= 0) {
    return res.status(400).json({ message: "Invalid ticket count" });
  }

  try {
    await updateTicket(req.user._id, req.params.id, ticketCount);
    res.status(200).json({ message: "Ticket updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
