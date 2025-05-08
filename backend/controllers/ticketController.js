const Ticket = require('../models/Ticket');
const Event = require('../models/Event');

exports.registerForEvent = async (req, res) => {
  try {
    const { eventId } = req.body;
    const event = await Event.findById(eventId);
    if (!event) return res.status(404).json({ msg: 'Event not found' });

    const existing = await Ticket.findOne({ user: req.user.id, event: eventId });
    if (existing) return res.status(400).json({ msg: 'Already registered' });

    const ticket = await Ticket.create({ user: req.user.id, event: eventId });
    res.status(201).json(ticket);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getEventTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find({ event: req.params.eventId }).populate('user', 'name email');
    res.json(tickets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
