const express = require('express');
const router = express.Router();
const { registerForEvent, getEventTickets } = require('../controllers/ticketController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.post('/register', protect, authorize('attendee'), registerForEvent);
router.get('/:eventId', protect, authorize('organizer'), getEventTickets);

module.exports = router;
